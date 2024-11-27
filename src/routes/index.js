const newRouter = require("./news");
const sideRouter = require("./side");
const coursesRouter = require("./courses");
const meRouter = require("./me");
const routes = (app) => {
  app.use("/news", newRouter);
  app.use("/courses", coursesRouter);
  app.use("/me", meRouter);
  app.use("/", sideRouter);

  app.post("/search", (req, res) => {
    res.render("search");
    console.log("post search");
    console.log(req.body);
  });
};

module.exports = routes;
