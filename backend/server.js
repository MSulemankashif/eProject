const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/rooms", require("./routes/roomRoutes"));
app.use("/api/bookings", require("./routes/bookingsRoutes"));
app.use("/api/invoices", require("./routes/invoicesRoutes"));
app.use("/api/maintenance", require("./routes/maintenanceRoutes"));

app.listen(process.env.PORT, ()=> {
    console.log("Server is running on PORT " , process.env.PORT);
});