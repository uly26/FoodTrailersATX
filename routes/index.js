var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('views/index');
});
/* GET about page. */
router.get('/about', function(req, res) {
    res.render('views/about');
});


module.exports = router;
