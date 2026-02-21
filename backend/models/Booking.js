const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
    {
        guest: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
        room: {type: mongoose.Schema.Types.ObjectId, ref: "Room"},
        checkInData: Date,
        checkOutDate: Date,
        status: {
            type: String,
            enum: ["reserved", "checked-in", "checked-out"],
            default: "reserved",
        },
        totalAmount: Number,
    },
    { timestamps: true}
);

module.exports = mongoose.model("Booking", bookingSchema);