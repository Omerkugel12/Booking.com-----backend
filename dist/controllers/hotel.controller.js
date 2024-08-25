"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRoomAvailability = exports.getHotels = exports.getHotelById = void 0;
const hotel_model_1 = __importDefault(require("../models/hotel.model"));
const error_1 = require("../utils/error");
// Get a single hotel by ID
const getHotelById = async (req, res, next) => {
    try {
        const hotel = await hotel_model_1.default.findById(req.params.id);
        if (!hotel)
            return next((0, error_1.createError)(404, "Hotel not found"));
        res.status(200).json(hotel);
    }
    catch (err) {
        next(err);
    }
};
exports.getHotelById = getHotelById;
// Get all hotels
const getHotels = async (req, res) => {
    try {
        const hotels = await hotel_model_1.default.find();
        res.status(200).json(hotels);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getHotels = getHotels;
// Update room availability for a specific room type
const updateRoomAvailability = async (req, res, next) => {
    try {
        const { hotelId, roomType, availability } = req.body;
        const hotel = await hotel_model_1.default.findById(hotelId);
        if (!hotel)
            return next((0, error_1.createError)(404, "Hotel not found"));
        const room = hotel.roomAvailability.find((r) => r.roomType === roomType);
        if (!room)
            return next((0, error_1.createError)(404, "Room type not found"));
        // Update the availability for the given date range
        room.availability = availability;
        const updatedHotel = await hotel.save();
        res.status(200).json(updatedHotel);
    }
    catch (err) {
        next(err);
    }
};
exports.updateRoomAvailability = updateRoomAvailability;
