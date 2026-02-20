const express = require("express");
const {protect, authorize} = require("../middleware/authMiddleware");
const {
    createBooking,
    getBookings,
    updateBookingStatus,
} = require("../controllers/bookingController");

const router = express.Router();

router.post("/", protect, createBooking);
router.get("/", protect, getBookings);
router.put("/:id/status", protect, updateBookingStatus);

module.exports = router;