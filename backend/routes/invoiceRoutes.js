const express = require("express");
const {protect} = require("../middleware/authMiddleware");
const{
    createInvoice,
    getInvoices,
} = require("../controllers/invoiceController");

const Router = express.Router();

Router.post("/", protect, createInvoice);
Router.get("/", protect, getInvoices);


module.exports = Router;