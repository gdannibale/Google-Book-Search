const router = require("express").Router();
const books = require("./searchbooks");

// Book routes
router.use("/books", books);

module.exports = router;