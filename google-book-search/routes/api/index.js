const router = require("express").Router();
const books = require("./googlebooks");

// Book routes
router.use("/books", books);

module.exports = router;