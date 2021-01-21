const router = require("express").Router();
const books = require("../../controllers/books");

router.route("/new")
    .post(books.create);

router.route("/saved")
    .get(books.findAll);

router
  .route("/:id")
 .delete(books.remove);

module.exports = router;