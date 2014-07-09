var express = require('express');
var router = express.Router();

/* GET notebooks listing. */
router.get('/', function(req, res) {
    res.render('notebooks/index', {
        title: 'Express...'
    });
});

module.exports = router;