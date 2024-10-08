import express from "express";
import {
  getHotels,
  getHotelDetailsWithAvailableRooms,
} from "../controllers/hotel.controller";

const hotelRoutes = express.Router();
hotelRoutes.get("/test", (req, res) => {
  console.log("Test route hit");
  res.json({ message: "Test route working" });
});

hotelRoutes.get("/:id", getHotelDetailsWithAvailableRooms);
hotelRoutes.get("/", getHotels);
// router.put("/availability", updateRoomAvailability); // Updating room availability

export default hotelRoutes;
