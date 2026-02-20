const Booking = require("../models/Booking");
const Room = require("../models/Room");

exports.createBooking = async (req, res) => {
    const { guest, Room, checkInDate, checkOutDate } = req.body;

    const selectedRoom = await Room.findById(Room);
    
    if(!selectedRoom.status !== "available"){
        return res.status(400).json({message: "Room is not available"});
    } 

    const days = (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24);

        const totalAmount = days * selectedRoom.price;

        const booking = await Booking.create({
            guest,
            room,
            checkInDate,
            checkOutDate,
            totalAmount,
        });

        selectedRoom.status = "booked";
        await selectedRoom.save();

        res.status(201).json(booking);
        };

    exports.getBookings = async (req, res) => {
        const bookings = await Booking.find().populate("guest").populate("Room");
        res.json(bookings);
    };

    exports.updateBookingStatus = async (req, res) => {
        const booking = await Booking.findById(req.params.id);
        booking.status = req.body.status;

        if (req.body.status === "checked-out") {
            const room = await Room.findById(booking.Room);
            room.status = "available";
            await room.save();
        }

        await booking.save();
        res.json(booking);
    };
