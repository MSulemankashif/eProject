const mongoose = require("mongoose");

const maintenanceSchema = new mongoose.Schema(
  {
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room" },
    reportedBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    issue: String,
    status: {
      type: String,
      enum: ["pending", "resolved", "in-progress"],
      default: "pending",
    },
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Maintenance", maintenanceSchema);