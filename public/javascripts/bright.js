function random() {
  return Math.floor(Math.random() * 257 - 1);
}

function randomSet () {
  return [random(), random(), random()];
}

function numberToHex (number) {
  return number.toString(16);
}

function hexToNumber (hex) {
  return parseInt(hexString, 16);
}

function toHex (input) {
  var hex = numberToHex(input[0]) + numberToHex(input[1]) + numberToHex(input[2]);
  return hex;
}

var set;

function caller(fn) {
  return fn();
}
 
function changer() {
  document.body.style.backgroundColor = "rgb(" + set  + ")";
  document.getElementsByTagName('span')[0] = set;
  document.getElementsByTagName('span')[1] = toHex(set);
}

// var timer = setTimeout(function(){changer()}, 100);

var i = 0;

document.onscroll = function(e){
    i++;
    if (i % 6 === 0) {
      changer();
    }
    set = randomSet();
};

history.pushState()