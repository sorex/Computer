var express = require('express');
var router = express.Router();
var hbs = require('hbs');

/* GET notebooks listing. */
router.get('/', function(req, res) {
	hbs.layout = false;
    res.render('notebooks/index', {
    	layout: false,
        title: 'Express...',
        user: {
			id: 'abcd',
			name: 'jasper'
		}
    });
});

module.exports = router;