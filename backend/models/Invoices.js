const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
    {
        booking: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
        services: [
            {
                name: String,
                price: Number,
            },
        ],
        totalAmount : Number,
        paymentStatus: {
            type: String,
            enum: ["paid", "unpaid"],
            default: "unpaid"
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Invoice", invoiceSchema);