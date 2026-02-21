const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    roomNumber: { type:String, required: true, unique: true },
    type: String,
    price: Number,
    status: {
        type: String,
        enum: ["available", "occupied", "cleaning", "maintenance"],
        default: "available",
    },
    capacity: Number,
})

module.exports = mongoose.model("Room", RoomSchema);