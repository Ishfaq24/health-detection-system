const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Backend running 🚀"));

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/predict", require("./routes/predictRoutes"));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));