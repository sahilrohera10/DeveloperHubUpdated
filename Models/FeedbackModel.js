const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const feedbackSchema = mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },

    trainerId: {
      type: ObjectId,
    },
    cpId: {
      type: ObjectId,
    },
    acceleratorId: {
      type: ObjectId,
    },
    incubatorId: {
      type: ObjectId,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("feedback", feedbackSchema);
