const express = require("express");
const connectDb = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// middleware to parse JSON
app.use(express.json());

// connect to database
connectDb();

// use routes directly
app.use("/lib/books", bookRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
