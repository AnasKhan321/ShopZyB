const mongoose = require("mongoose");

const ReviewSchema = mongoose.Schema({
  pid: {
    type: String,
    required: true,
  },
  User: {
    type: Object,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review; 