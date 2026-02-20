const Maintenance = require("../models/Maintenance");

exports.createMaintenance = async (req, res) => {
    const maintenance = await Maintenance.create(req.body);
    req.status(201).json(maintenance);
};

exports.getMaintenances = async (req, res) => {
    const data = await Maintenance.find().populate("Room").populate("reportedBy");
    res.json(data);
};

exports.updateMaintenanceStatus = async (req, res) => {
    const maintenance = await Maintenance.findByIdAndUpdate(req,params.id);
    maintenance.status = req.body.status;
    await maintenance.save();
    res.json(maintenance);
    
}