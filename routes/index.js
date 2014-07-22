var colors = require('../app/colors');
var express = require('express');
var router = express.Router();

/* GET home page. */
router
  .get('/', function(req, res) {
    var rgb = colors.randomSet();
    var hex = colors.toHex(rgb);
    var sum = colors.sum(rgb);
    res.render('index', { rgb: rgb, hex: hex, sum: sum });
  })
  .get('/:color', function(req, res) {
    var rgb = colors.toRgb(req.params.color);
    var sum = colors.sum(rgb);
    console.log('sum', sum);
    console.log('rgb', rgb);

    res.render('index', { hex: req.params.color, rgb: rgb, sum: sum });
  });

module.exports = router;
