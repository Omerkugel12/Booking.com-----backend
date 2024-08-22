import mongoose, { Document, Schema, Types, model } from "mongoose";

// Define the interface for the Room document
export interface IRoom extends Document {
  title: string;
  hotel_id: Types.ObjectId;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: { number: number; unavailableDates: Date[] }[];
}

const RoomSchema: Schema = new Schema<IRoom>(
  {
    title: {
      type: String,
      required: true,
    },
    hotel_id: { type: Schema.Types.ObjectId, ref: "Hotel", required: true },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [
      {
        number: { type: Number, required: true },
        unavailableDates: { type: [Date], required: true },
      },
    ],
  },
  { timestamps: true }
);

export default model<IRoom>("Room", RoomSchema);
