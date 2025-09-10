const express = require("express");
const router = express.Router();
const {
  createBook,
  getBookById,
  getBooksByAuthor,
  getBooksByTitle,
  updateBookById,
  deleteBookById,
} = require("../controller/libController");

// Routes
router.post("/", createBook);
router.get("/:id", getBookById);
router.get("/author/:author", getBooksByAuthor);
router.get("/title/:title", getBooksByTitle);
router.put("/:id", updateBookById);
router.delete("/:id", deleteBookById);

module.exports = router;
