"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const hotel_controller_1 = require("../controllers/hotel.controller");
const hotelRoutes = express_1.default.Router();
hotelRoutes.get("/:id", hotel_controller_1.getHotelByID);
// router.get("/", getHotels);
// router.put("/availability", updateRoomAvailability); // Updating room availability
exports.default = hotelRoutes;
