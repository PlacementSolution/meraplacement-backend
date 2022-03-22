const mongoose = require("mongoose");
const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter company name"],
    },
    location: {
      type: String,
      required: [true, "Please enter company name"],
    },
    jobPosition: {
      type: String,
    },
    jdLink: {
      type: String,
    },
    ctc: {
      type: String,
      required: [true, "Please enter ctc amount"],
    },
    description: {
      type: String,
      required: [true, "Please enter company name"],
    },
    internship: {
      stipend: {
        type: String,
      },
      duration: {
        type: String,
      },
    },
    bond: {
      amount: {
        type: String,
      },
      duration: {
        type: String,
      },
    },
    expectedDate: {
      type: Date,
      required: [true, "Please enter company arrival date"],
    },
    placedCount: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false }
);
module.exports = mongoose.model("company", companySchema);
