var colors = require('../app/colors');
var express = require('express');
var names = require('../app/colornames');

var router = express.Router();

/* GET home page. */
router
  .get('/', function(req, res) {
    var response = {};
    response.rgb = colors.randomSet();
    response.hex = colors.toHex(response.rgb);
    response.sum = colors.sum(response.rgb);
    if (names[response.hex]){
      response.name = names[response.hex];
    }
    res.render('index', response);
  })
  .get('/:color', function(req, res) {
    let name = '';
    if (names[req.params.color.toUpperCase()]) {
      name = names[req.params.color.toUpperCase()];
    }

    var rgb = colors.toRgb(req.params.color);
    var sum = colors.sum(rgb);
    res.render('index', { hex: req.params.color, rgb, sum, name });
  });

module.exports = router;
