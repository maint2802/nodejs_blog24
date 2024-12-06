const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const routes = require("./routes");
const db = require("./config/db");
const methodOverride = require("method-override");
<<<<<<< HEAD
const sortMiddleware = require("./app/middleware/sortMiddlewarex");
=======
const sortMiddleware = require("./app/middleware/sortMiddleware");
>>>>>>> 8e54bc9591a09314e9d105861b5443f077a11412
db.connect();
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
<<<<<<< HEAD
    helpers: require("./helper/handlebarHelper"),
=======
    helpers: {
      add: (a, b) => a + b,
      sortable: (column, _sort) => {
        const icons = {
          desc: '<i class="bi bi-sort-alpha-down-alt"></i>',
          asc: '<i class="bi bi-sort-alpha-down"></i>',
          default: '<i class="bi bi-filter-square-fill"></i>',
        };

        const types = {
          default: "asc",
          asc: "desc",
          desc: "asc",
        };

        console.log(_sort);

        let sortType = ["desc", "asc"].includes(_sort.type)
          ? _sort.type
          : "desc";
        sortType = column === _sort.column ? _sort.type : "default";

        return `<a href="?_sort&column=${column}&type=${types[_sort.type]}">${icons[sortType]}</a>`;
      },
    },
>>>>>>> 8e54bc9591a09314e9d105861b5443f077a11412
  })
);
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resourse", "views"));

app.use(express.urlencoded({ extended: true })); //handle data from html/form
app.use(express.json()); //handle data from javascript code

// Custom middleware
app.use(sortMiddleware);

routes(app);

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  // console.log("listen tor port: " + port);
});

// app.use(morgan("combined"));
