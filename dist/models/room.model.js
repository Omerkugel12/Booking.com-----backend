"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoomSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    hotel_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "Hotel", required: true },
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
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Room", RoomSchema);
