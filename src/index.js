const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./resourse/views"));

app.use(express.urlencoded({ extended: true })); //handle data from html/form
app.use(express.json()); //handle data from javascript code

app.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

app.get("/news", (req, res) => {
  res.render("news", { title: "Handlebars" });
  // console.log("news params:", req.query);
});

app.get("/search", (req, res) => {
  res.render("search");
  // console.log(req.query);
});

app.post("/search", (req, res) => {
  res.render("search");
  console.log(req.body);
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("listen tor port: " + port);
});

// app.use(morgan("combined"));
