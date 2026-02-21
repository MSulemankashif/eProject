const Maintenance = require("../models/Maintenance");

const createMaintenance = async (req, res) => {
    const maintenance = await Maintenance.create(req.body);
    req.status(201).json(maintenance);
};

const getMaintenances = async (req, res) => {
    const data = await Maintenance.find().populate("Room").populate("reportedBy");
    res.json(data);
};

const updateMaintenanceStatus = async (req, res) => {
    const maintenance = await Maintenance.findByIdAndUpdate(req,params.id);
    maintenance.status = req.body.status;
    await maintenance.save();
    res.json(maintenance);
    
}

module.exports = {
    createMaintenance,
    getMaintenances,
    updateMaintenanceStatus,
}