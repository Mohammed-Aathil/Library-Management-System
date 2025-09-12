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
    type: String,
    enum: ["available", "borrowed"],
    required: true,
    default: "available",
  },

  isbn: {
  type: String,
  unique: true,
  sparse: true
},
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
