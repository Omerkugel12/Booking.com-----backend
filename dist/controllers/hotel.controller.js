"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHotelByID = void 0;
const __1 = require("..");
const getHotelByID = (req, res) => {
  const id = req.params.id;
  const sql = `
    SELECT Hotels.*, AVGRating.*, 
      (AVGRating.staff + AVGRating.facilities + AVGRating.cleanliness + AVGRating.freeWifi + 
       AVGRating.location + AVGRating.valueForMoney + AVGRating.comfort) / 7 AS avg_rating 
    FROM Hotels 
    LEFT JOIN AVGRating ON Hotels.id = AVGRating.hotelID 
    WHERE Hotels.id = ?`;
  __1.db.query(sql, [id], (err, result, fields) => {
    if (err) {
      console.error("Error fetching hotel by id:", err);
      res.status(500).send("Server error");
      return;
    }
    if (result.length === 0) {
      res.status(404).send("Hotel not found");
      return;
    }
    res.status(200).json(result[0]);
  });
};
exports.getHotelByID = getHotelByID;
