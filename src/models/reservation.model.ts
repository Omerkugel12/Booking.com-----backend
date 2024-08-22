import { Document, Schema, model, Types } from "mongoose";

// Interface to define the structure of the Reservation document
export interface IReservation extends Document {
  user_id: Types.ObjectId;
  hotel_id: Types.ObjectId;
  room_id: Types.ObjectId;
  check_in: Date;
  check_out: Date;
  price: number;
  status: "pending" | "confirmed" | "cancelled";
}

const ReservationSchema = new Schema<IReservation>(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    hotel_id: { type: Schema.Types.ObjectId, ref: "Hotel", required: true },
    room_id: { type: Schema.Types.ObjectId, ref: "Room", required: true },
    check_in: { type: Date, required: true },
    check_out: { type: Date, required: true },
    price: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const Reservation = model<IReservation>(
  "Reservation",
  ReservationSchema
);
