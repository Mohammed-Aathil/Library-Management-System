const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  availability: {
    type: Boolean,
    required: true,
    default: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
