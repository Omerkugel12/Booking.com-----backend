import express from "express";
import {
    addNewReservation,
 getHotelByID,
} from "../controllers/hotel.controller";

const hotelRoutes = express.Router();

hotelRoutes.get("/:id", getHotelByID);
hotelRoutes.post("/reservation", addNewReservation)
// router.get("/", getHotels);
// router.put("/availability", updateRoomAvailability); // Updating room availability

export default hotelRoutes;
