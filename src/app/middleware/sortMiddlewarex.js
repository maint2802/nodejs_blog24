module.exports = function sortMiddleware(req, res, next) {
  res.locals._sort = {
    enabled: false,
    type: "default",
  };

  if (req.query.hasOwnProperty("_sort")) {
    const isValidSortType = ["desc", "asc"].includes(req.query.type);

    res.locals._sort.enabled = true;
    res.locals._sort.type = isValidSortType ? req.query.type : "desc";
    res.locals._sort.column = req.query.column;
  }
  next();
};
