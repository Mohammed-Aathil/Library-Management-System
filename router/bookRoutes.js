const express = require("express");
const router = express.Router();
const controller = require("../controller/libController");

router.post("/", controller.createBook);

router.get("/", controller.getAllBooks);

router.get("/:id", controller.getBookById);

router.get("/author", controller.getBooksByAuthor);

router.get("/title", controller.getBooksByTitle);

router.get("/year", controller.getBooksByYear);

router.get("/category", controller.getBooksByCategory);

router.get("/availability", controller.getBooksByAvailability);

router.put("/:id", controller.updateBook);

router.delete("/:id", controller.deleteBook);

module.exports = router;
