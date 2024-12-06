const Handlebars = require("handlebars");

module.exports = {
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

    let sortType = column === _sort.column ? _sort.type : "default";

    // prevent XSS attack(XSS: hacker code script into href)
    let href = Handlebars.escapeExpression(
      `?_sort&column=${column}&type=${types[sortType]}`
    );

    const result = `<a href=${href}>${icons[sortType]}</a>`;
    return new Handlebars.SafeString(result);
  },
};
