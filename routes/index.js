var colors = require('../app/colors');
var express = require('express');
var router = express.Router();

/* GET home page. */
router
  .get('/', function(req, res) {
    var color = colors.randomSet();
    res.render('index', { color: color });
  })
  .get('/:color', function(req, res) {
    res.render('index', { color: req.params.color, hex: true });
  });

module.exports = router;
