import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

dotenv.config();
connectDatabase()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error:", err));

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors()
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ ok: true, message: "Server is healthy." });
});

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.use("/api/contact", contactRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
