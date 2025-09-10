const express = require("express");
const router = express.Router();
const controller = require("../controller/libController");
// const {
//   createBook,
//   getBookById,
//   getBooksByAuthor,
//   getBooksByTitle,
//   updateBookById,
//   deleteBookById,
// } = require("../controller/libController");

// Routes
router.post("/", controller.createBook);
router.get("/:id", controller.getBookById);
router.get("/author/:author", controller.getBooksByAuthor);
router.get("/title/:title", controller.getBooksByTitle);
router.put("/:id", controller.updateBook);
router.delete("/:id", controller.deleteBook);

module.exports = router;
