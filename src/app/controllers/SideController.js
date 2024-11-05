class SideController {
   index(req, res) {
      res.render('home');
   }
   search(req, res) {
      res.render('search');
   }
   postSearch(req, res) {
      res.render('search');
      console.log('post search');
      console.log(req.body);
   }
}
module.exports = new SideController();
