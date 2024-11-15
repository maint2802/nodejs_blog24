const Course = require("../../models/Course");
class SideController {
  index(req, res) {
    Course.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(404).json({ message: "error" });
      });
    //  res.render("home");
  }
  search(req, res) {
    res.render("search");
  }
  postSearch(req, res) {
    res.render("search");
    console.log("post search");
    console.log(req.body);
  }
}
module.exports = new SideController();
