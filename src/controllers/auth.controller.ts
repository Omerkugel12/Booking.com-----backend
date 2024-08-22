import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { createError } from "../utils/error";
import UserModel from "../models/user.model";

// Define AuthRequest interface to include userId
interface AuthRequest extends Request {
  userId?: string;
}

// Check if the email exists
export const checkEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json({ exists: true });
    } else {
      return res.status(200).json({ exists: false });
    }
  } catch (error) {
    next(createError(500, (error as Error).message));
  }
};

// Handle Login
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return next(createError(400, "Invalid password"));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        displayName: user.displayName,
      },
    });
  } catch (error) {
    next(createError(500, (error as Error).message));
  }
};

// Handle Registration
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) return next(createError(400, "Email already registered"));
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign(
      { id: savedUser._id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: savedUser._id,
        email: savedUser.email,
      },
    });
  } catch (error) {
    console.log("baba");
    next(createError(500, (error as Error).message));
  }
};

// Controller to get the logged-in user's data
export const getLoggedInUser = async (req: AuthRequest, res: Response) => {
  try {
    // Find the user by ID, excluding the password field
    const user = await UserModel.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send the user data as a JSON response
    res.json({
      _id: user._id,
      email: user.email,
    });
  } catch (err) {
    // Log the error and return a generic 500 response
    console.error("Error fetching logged-in user data:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
