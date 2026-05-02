import mongoose from "mongoose";

const analyticsEventSchema = new mongoose.Schema(
  {
    event: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80
    },
    path: {
      type: String,
      trim: true,
      maxlength: 200
    },
    meta: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },
    userAgent: {
      type: String,
      trim: true,
      maxlength: 300
    }
  },
  {
    timestamps: true
  }
);

const AnalyticsEvent = mongoose.model("AnalyticsEvent", analyticsEventSchema);

export default AnalyticsEvent;

