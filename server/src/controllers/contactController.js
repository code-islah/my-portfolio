import mongoose from "mongoose";
import Message from "../models/Message.js";

const sendContactMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (!mongoose.connection.readyState) {
    return res
      .status(503)
      .json({ message: "Database is unavailable. Try again shortly." });
  }

  try {
    await Message.create({ name, email, message });
    return res.status(201).json({ message: "Thanks! Your message was sent." });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to send message. Please try again." });
  }
};

export { sendContactMessage };

