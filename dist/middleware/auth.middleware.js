"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = void 0;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_1 = require("../utils/error");
// Middleware to verify the token
function verifyToken(req, res, next) {
    const authHeader = req.header("Authorization") || req.header("authorization");
    if (!authHeader)
        return next((0, error_1.createError)(401, "Access denied."));
    const token = authHeader.split(" ")[1];
    if (!token)
        return next((0, error_1.createError)(401, "Access denied."));
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId; // Attach the userId to the request object
        console.log("User ID from token:", req.userId);
        next(); // Call the next middleware
    }
    catch (error) {
        console.log(error);
        return next((0, error_1.createError)(401, "Invalid token"));
    }
}
// Middleware to verify if the request is made by the same user
const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.userId === req.params.id) {
            next();
        }
        else {
            return next((0, error_1.createError)(403, "You are not authorized!"));
        }
    });
};
exports.verifyUser = verifyUser;
