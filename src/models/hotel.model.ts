import mongoose, { Schema, Document, Types } from "mongoose";

// Interface to define the structure of the Hotel document
interface IFacility {
  category: string;
  name: string;
}

interface IReview {
  category: string;
  rating: number;
}

export interface IHotel extends Document {
  name: string;
  address: string;
  scoreNumber: number;
  scoreLetter: string;
  reviewsCount: number;
  price: string;
  description: string;
  hotelLink: string;
  image: string;
  rooms: Types.ObjectId[];
  facilities: IFacility[];
  guestReviews: IReview[];
}

const FacilitySchema: Schema = new Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
});

const ReviewSchema: Schema = new Schema({
  category: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 10 },
});

const HotelSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  scoreNumber: { type: Number, required: true, min: 0, max: 10 },
  scoreLetter: { type: String, required: true },
  reviewsCount: { type: Number, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  hotelLink: { type: String, required: true },
  image: { type: String, required: true },
  rooms: [{ type: Schema.Types.ObjectId, ref: "Room" }],
  facilities: { type: [FacilitySchema], required: true },
  guestReviews: { type: [ReviewSchema], required: true },
});

// Export the model with the IHotel interface
export default mongoose.model<IHotel>("Hotel", HotelSchema);
