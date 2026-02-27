const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
    roomNumber: { type:String, required: true, unique: true },
    type: {
        type: String,
        enum: ["single", "double", "suite"],
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["available", "occupied", "cleaning", "maintenance"],
        default: "available",
    },
    },
{timestamps: true}
)

module.exports = mongoose.model("Room", RoomSchema);