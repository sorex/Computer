var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('home/index', {
        title: 'Express'
    });
    var obj = {
        "aaa"    : 12,
        "asdqwe" : 755
    }
});

module.exports = router;