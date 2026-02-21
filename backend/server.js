const connectDB = require('./config/db');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require("./routes/authRoutes.js");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/rooms", require("./routes/roomRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/invoices", require("./routes/invoiceRoutes"));
app.use("/api/maintenance", require("./routes/maintenanceRoutes"));

app.listen(process.env.PORT, ()=> {
    console.log("Server is running on PORT " , process.env.PORT);
});