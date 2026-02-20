const express = require("express");
const {protect, authorize} = require("../middleware/authMiddleware");
const {getAllUsers, getUserbyId, updateUser, deleteUser} = require("../controllers/userController.js");

const router = express.Router();

router.get("/", protect, authorize("admin"), getAllUsers);
router.get("/:id", protect, authorize("admin"), getUserbyId);
router.put("/:id", protect, authorize("admin"), updateUser);
router.delete("/:id", protect, authorize("admin"), deleteUser);
module.exports = router;