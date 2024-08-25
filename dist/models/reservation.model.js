"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
const mongoose_1 = require("mongoose");
const ReservationSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    hotel_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "Hotel", required: true },
    room_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "Room", required: true },
    check_in: { type: Date, required: true },
    check_out: { type: Date, required: true },
    price: { type: Number, required: true },
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending",
    },
}, {
    timestamps: true,
});
exports.Reservation = (0, mongoose_1.model)("Reservation", ReservationSchema);
