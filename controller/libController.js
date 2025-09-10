const Book = require("../model/Book");

// Create a book with manual ID
const createBook = async (req, res) => {
    try {
        const { id, title, author, category, isbn, publishedYear } = req.body;
        const newBook = new Book({ id, title, author, category, isbn, publishedYear });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get by ID
const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get by author
const getBooksByAuthor = async (req, res) => {
    const { author } = req.query;
    try {
        const books = await Book.find({ author });
        res.json(books);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get by title
const getBooksByTitle = async (req, res) => {
    const { title } = req.query;
    try {
        const books = await Book.find({ title });
        res.json(books);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get by year
const getBooksByYear = async (req, res) => {
    const { year } = req.query;
    try {
        const books = await Book.find({ publishedYear: year });
        res.json(books);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update by ID
const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) return res.status(404).json({ message: "Book not found" });
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete by ID
const deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: "Book not found" });
        res.json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createBook,
    getBookById,
    getBooksByAuthor,
    getBooksByTitle,
    getBooksByYear,
    updateBook,
    deleteBook
};
