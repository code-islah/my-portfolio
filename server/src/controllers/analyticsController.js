import mongoose from "mongoose";
import AnalyticsEvent from "../models/AnalyticsEvent.js";

const createAnalyticsEvent = async (req, res) => {
  const { event, path, meta } = req.body;

  if (!event) {
    return res.status(400).json({ message: "Event is required." });
  }

  if (!mongoose.connection.readyState) {
    return res.status(202).json({ message: "Accepted without persistence." });
  }

  try {
    await AnalyticsEvent.create({
      event,
      path,
      meta: meta || {},
      userAgent: req.headers["user-agent"] || ""
    });
    return res.status(201).json({ message: "Event tracked." });
  } catch (error) {
    return res.status(500).json({ message: "Failed to track event." });
  }
};

export { createAnalyticsEvent };

