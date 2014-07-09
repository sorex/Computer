var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('home/index', {
		title: 'Express',
		user: {
			id: 'abcd',
			name: 'jasper'
		}
	});
});

module.exports = router;