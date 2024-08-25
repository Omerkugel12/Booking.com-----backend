"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const FacilitySchema = new mongoose_1.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
});
const GuestRatingSchema = new mongoose_1.Schema({
    category: { type: String, required: true },
    rating: { type: Number, required: true },
});
const AvailabilitySchema = new mongoose_1.Schema({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    available: { type: Number, required: true },
});
const RoomAvailabilitySchema = new mongoose_1.Schema({
    roomType: { type: String, required: true }, // e.g., "Standard", "Deluxe"
    price: { type: Number, required: true }, // Price per night
    maxGuests: { type: Number, required: true }, // Maximum guests allowed
    availability: [AvailabilitySchema],
});
const HotelSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    scoreNumber: { type: Number, required: true },
    scoreLetter: { type: String, required: true },
    reviewsCount: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    facilities: { type: [FacilitySchema], required: true },
    avgGuestRating: { type: [GuestRatingSchema], required: true },
    distance: { type: String, required: true },
    freeCancellation: { type: Boolean, required: true },
    prepayment: { type: Boolean, required: true },
    roomAvailability: { type: [RoomAvailabilitySchema], required: true },
});
exports.default = mongoose_1.default.model("Hotel", HotelSchema);
