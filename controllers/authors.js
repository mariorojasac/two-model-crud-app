const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/authors", (req, res) => {
  res.render("authors/index.ejs");
});

indexRouter.get("/authors/new", (req, res) => {
  res.render("authors/new.ejs");
});

module.exports = indexRouter;
