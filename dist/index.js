"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const mysql2_1 = require("mysql2");
// import hotelsRoute from "./routes/hotels.routes";
// import roomsRoute from "./routes/rooms.routes";
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const SQLPORT = process.env.SQLPORT || 20285;
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const connection = (0, mysql2_1.createConnection)({
    host: process.env.AIVAN_HOST,
    user: process.env.AIVAN_USERNAME,
    password: process.env.AIVAN_PASSWORD,
    database: process.env.AIVAN_DB,
    connectTimeout: 30000,
    port: 20285,
    ssl: {
        rejectUnauthorized: true,
        ca: process.env.CA_Certificate,
    },
});
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the MySQL database:", err);
    }
    else {
        console.log("Successfully connected to the MySQL database");
    }
    connection.end(); // Close the connection after testing
});
app.listen(SQLPORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// Connect to MongoDB
const connect = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB.");
    }
    catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
};
mongoose_1.default.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
});
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api/auth", auth_routes_1.default);
app.use("/api/users", users_routes_1.default);
// app.use("/api/hotels", hotelsRoute);
// app.use("/api/rooms", roomsRoute);
// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    res.status(status).json({
        success: false,
        status,
        message,
    });
});
// Start the server
app.listen(PORT, () => {
    connect();
    console.log(`Server running on port ${PORT}`);
});
