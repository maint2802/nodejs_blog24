const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;
const routes = require("./routes");
const db = require("./config/db");
const methodOverride = require("method-override");
const sortMiddleware = require("./app/middleware/sortMiddlewarex");
db.connect();
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
    helpers: require("./helper/handlebarHelper"),
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
