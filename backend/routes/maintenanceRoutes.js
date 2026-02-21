const express = require("express");
const {protect} = require("../middleware/authMiddleware");
const {
    createMaintenance,
    getMaintenances,
    updateMaintenanceStatus,
} = require("../controllers/maintenanceController");

const router = express.Router();

router.post("/", protect, createMaintenance);
router.get("/", protect, getMaintenances);
router.put("/:id/status", protect, updateMaintenanceStatus);

module.exports = router;