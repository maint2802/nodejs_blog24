class NewsController {
   // [GET] /news
   index(req, res) {
      res.render('news', { title: 'Handlebars' });
   }
   //[GET] /news/:slug
   show(req, res) {
      res.send('show detail');
   }
}

module.exports = new NewsController();
