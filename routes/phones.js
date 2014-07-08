var express = require('express');
var router = express.Router();

/* GET phones listing. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
