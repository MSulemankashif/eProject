const express = require("express");
const {protect} = require("../middleware/authMiddleware");
const {
    createMaintenanceRequest,
    getMaintenanceRequests,
    updateMaintenanceRequestStatus,
} = require("../controllers/maintenanceController");

const router = express.Router();

router.post("/", protect, createMaintenanceRequest);
router.get("/", protect, getMaintenanceRequests);
router.put("/:id/status", protect, updateMaintenanceRequestStatus);

module.exports = router;