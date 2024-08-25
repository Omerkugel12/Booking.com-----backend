"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hotel_controller_1 = require("../controllers/hotel.controller");
const router = express_1.default.Router();
router.get("/:id", hotel_controller_1.getHotelById);
router.get("/", hotel_controller_1.getHotels);
router.put("/availability", hotel_controller_1.updateRoomAvailability); // Updating room availability
exports.default = router;
