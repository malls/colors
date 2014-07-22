var colors = require('../app/colors');
var express = require('express');
var router = express.Router();

/* GET home page. */
router
  .get('/', function(req, res) {
    var color = colors.randomSet();
    var hex = colors.toHex(color);
    console.log(hex);
    res.render('index', { color: color, hex: hex });
  })
  .get('/:color', function(req, res) {
    res.render('index', { hex: req.params.color, color: "something" });
  });

module.exports = router;
