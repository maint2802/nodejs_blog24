const express = require('express');
const router = express.Router();
const sideController = require('../app/controllers/SideController');

// router.use("/search", sideController.search());
router.use('/search', sideController.search);
router.post('/search', () => {
   console.log('done');
});
router.use('/', sideController.index);

module.exports = router;
