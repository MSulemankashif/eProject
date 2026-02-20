const Room = require("../models/Room");
const room = require("../models/Room");

exports.createRoom = async (req, res) => {
    const room = await Room.create(req.body);
    res.status(201).json(room);
};

exports.getRooms = async (req, res) => {
    const rooms = await Room.find();
    res.json(rooms);
}

exports.updateRoom = async (req, res) => {
    const Room = await room.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(Room);
};

exports.deleteRoom = async (req, res) => {
    await Room.findByIdAndDelete(req.params.id);
    res.json({message: "Room Deleted"});
} 