const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const routes = require("./routes");
const db = require("./config/db");
const methodOverride = require("method-override");
const SortMiddleware = require("./app/middleware/SortMiddleware");
db.connect();
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
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

        const sortType = column === _sort.column ? _sort.type : "default";

        return `<a href="?_sort&column=${column}&type=${types[_sort.type]}">${icons[sortType]}</a>`;
      },
    },
  })
);
app.use(methodOverride("_method"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resourse", "views"));

app.use(express.urlencoded({ extended: true })); //handle data from html/form
app.use(express.json()); //handle data from javascript code

// Custom middleware
app.use(SortMiddleware);

routes(app);

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("listen tor port: " + port);
});

// app.use(morgan("combined"));
