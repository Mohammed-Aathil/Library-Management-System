const express = require("express");
const connectDb = require("./database/db");
const bookRoutes = require("./router/bookRoutes");

const app = express();

app.use(express.json());

connectDb();

app.use("/lib/books", bookRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
