const express = require("express");
const router = express.Router();
const { createFeedback, getFeedbacks } = require("../controllers/FeedbackController");
const { verifyToken } = require("../middleware/authMiddleware");

router.post("/", verifyToken, createFeedback);
