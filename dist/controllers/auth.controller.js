"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoggedInUser = exports.register = exports.login = exports.checkEmail = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const error_1 = require("../utils/error");
const user_model_2 = __importDefault(require("../models/user.model"));
// Check if the email exists
const checkEmail = async (req, res, next) => {
    const { email } = req.body;
    try {
        const user = await user_model_1.default.findOne({ email });
        if (user) {
            return res.status(200).json({ exists: true });
        }
        else {
            return res.status(200).json({ exists: false });
        }
    }
    catch (error) {
        next((0, error_1.createError)(500, error.message));
    }
};
exports.checkEmail = checkEmail;
// Handle Login
const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await user_model_1.default.findOne({ email });
        if (!user)
            return next((0, error_1.createError)(404, "User not found"));
        const isPasswordCorrect = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordCorrect)
            return next((0, error_1.createError)(400, "Invalid password"));
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET, {
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
    }
    catch (error) {
        next((0, error_1.createError)(500, error.message));
    }
};
exports.login = login;
// Handle Registration
const register = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const existingUser = await user_model_1.default.findOne({ email });
        if (existingUser)
            return next((0, error_1.createError)(400, "Email already registered"));
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const newUser = new user_model_1.default({
            email,
            password: hashedPassword,
        });
        const savedUser = await newUser.save();
        const token = jsonwebtoken_1.default.sign({ userId: savedUser._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });
        res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: savedUser._id,
                email: savedUser.email,
            },
        });
    }
    catch (error) {
        next((0, error_1.createError)(500, error.message));
    }
};
exports.register = register;
// Controller to get the logged-in user's data
const getLoggedInUser = async (req, res) => {
    try {
        // Find the user by ID, excluding the password field
        const user = await user_model_2.default.findById(req.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Send the user data as a JSON response
        res.json({
            _id: user._id,
            email: user.email,
        });
    }
    catch (err) {
        // Log the error and return a generic 500 response
        console.error("Error fetching logged-in user data:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
exports.getLoggedInUser = getLoggedInUser;
