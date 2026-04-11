import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectDatabase();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors()
);
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({ ok: true, message: "Server is healthy." });
});

app.use("/api/contact", contactRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

