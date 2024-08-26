import { db } from "..";
import { ResultSetHeader } from 'mysql2';
import { Request, Response } from "express";
import { RowDataPacket, QueryError, FieldPacket } from "mysql2";

export const getHotelByID = (req: Request, res: Response): void => {
  const id = req.params.id;
  const sql = `
    SELECT Hotels.*, AVGRating.*, 
      (AVGRating.staff + AVGRating.facilities + AVGRating.cleanliness + AVGRating.freeWifi + 
       AVGRating.location + AVGRating.valueForMoney + AVGRating.comfort) / 7 AS avg_rating 
    FROM Hotels 
    LEFT JOIN AVGRating ON Hotels.id = AVGRating.hotelID 
    WHERE Hotels.id = ?`;

  db.query(
    sql, [id], 
    (err: QueryError | null, result: RowDataPacket[], fields: FieldPacket[]) => {
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
    }
  );
};





interface QuantityResult extends RowDataPacket {
  new_quantity: number;
}

export const addNewReservation = (req: Request, res: Response): void => {
  const { userID, hotelID, roomID, startDate, endDate } = req.body;
  
  const getQuantitySql = `
    SELECT 
      CASE 
        WHEN EXISTS (
          SELECT 1
          FROM Reservations
          WHERE HotelID = ?
            AND RoomID = ?
            AND (
              (startDate <= ? AND endDate >= ?) OR
              (startDate <= ? AND endDate >= ?)
            )
        ) THEN (
          SELECT quantity - 1
          FROM Reservations
          WHERE HotelID = ?
            AND RoomID = ?
            AND (
              (startDate <= ? AND endDate >= ?) OR
              (startDate <= ? AND endDate >= ?)
            )
          ORDER BY quantity ASC
          LIMIT 1
        )
        ELSE (
          SELECT initial_quantity - 1
          FROM RoomsPerHotel
          WHERE HotelID = ?
            AND RoomID = ?
        )
      END AS new_quantity
  `;

  const quantityValues = [
    hotelID, roomID, startDate, endDate, startDate, endDate,
    hotelID, roomID, startDate, endDate, startDate, endDate,
    hotelID, roomID
  ];

  db.query<QuantityResult[]>(getQuantitySql, quantityValues, (quantityErr, quantityResult) => {
    if (quantityErr) {
      res.status(500).json({ error: 'Database error', details: quantityErr });
      return;
    }

    if (quantityResult.length === 0) {
      res.status(404).json({ error: 'No available rooms found' });
      return;
    }

    const newQuantity = quantityResult[0].new_quantity;

    const insertSql = `
      INSERT INTO Reservations (userID, HotelID, RoomID, startDate, endDate, quantity)
      VALUES (?, ?, ?, ?, ?, ?);
    `;

    const insertValues = [userID, hotelID, roomID, startDate, endDate, newQuantity];

    db.query<ResultSetHeader>(insertSql, insertValues, (insertErr, result) => {
      if (insertErr) {
        res.status(500).json({ error: 'Database error', details: insertErr });
        return;
      }
      res.status(201).json({ message: 'Reservation added successfully', reservationID: result.insertId });
    });
  });
};