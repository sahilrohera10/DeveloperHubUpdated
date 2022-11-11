const mongoose = require("mongoose");

const trainerSchema = mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    ContactNumber: {
      type: Number,
      required: true,
    },
    AlternateContact: {
      type: Number,
      required: true,
    },
    EmailId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("trainerList", trainerSchema);
