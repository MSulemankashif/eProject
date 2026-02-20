const Invoice = require("../models/Invoices");
const Booking = require("../models/Booking");
const Invoices = require("../models/Invoices");

exports.createInvoice = async (req, res) => {
    const {bookingId, services} = req.body;

    const booking = await Booking.findById(bookingId);

    let extraCharges = 0;
    services.forEach(service => {
        extraCharges += service.price;
    });

    const totalAmount = booking.totalAmount + extraCharges;

    const invoice = await Invoice.create({
        booking: bookingId,
        services,
        totalAmount,
    });

    res.status(201).json(invoice);

};

exports.getInvoices = async (req, res) => {
    const invoices = await Invoices.find().populate({
        path: "booking",
        populate: ["guest", "Room"],
    });

    res.json(invoices);
};