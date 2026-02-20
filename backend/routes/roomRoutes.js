const express = require("express");
const {protect, authorize} = require("../middleware/authMiddleware");
const {createRoom, getRooms, updateRoom, deleteRoom} = require("../controllers/roomController");

const router = express.Router();

router.post("/", protect, authorize("admin"), createRoom);
router.get("/", protect, getRooms);
router.put("/:id", protect, authorize("admin"), updateRoom);
router.delete("/:id", protect, authorize("admin", deleteRoom));

module.exports = router;