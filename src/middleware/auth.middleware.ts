import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { createError } from "../utils/error";

// Extend the Request interface to include userId
interface AuthenticatedRequest extends Request {
  userId?: string;
}

// Middleware to verify the token
export function verifyToken(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.header("Authorization") || req.header("authorization");
  if (!authHeader) return next(createError(401, "Access denied."));

  const token = authHeader.split(" ")[1];
  if (!token) return next(createError(401, "Access denied."));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      userId: string;
    };

    req.userId = decoded.userId; // Attach the userId to the request object
    // console.log("User ID from token:", req.userId);

    next(); // Call the next middleware
  } catch (error) {
    console.log(error);
    return next(createError(401, "Invalid token"));
  }
}

// Middleware to verify if the request is made by the same user
export const verifyUser = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  verifyToken(req, res, () => {
    if (req.userId === req.params.id) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
