var set;

function random() {
  return Math.floor(Math.random() * 256);
}

function randomSet () {
  return [random(), random(), random()];
}

function numberToHex (number) {
  var hex = number.toString(16);
  var str = hex + ""; 
  if (str.length === 1){
    return "0" + hex;
  } 
  return hex;
}

function hexToNumber (hex) {
  return parseInt(hexString, 16);
}

function toHex (input) {
  var hex = numberToHex(input[0]) + numberToHex(input[1]) + numberToHex(input[2]);
  return hex;
}

function caller(fn) {
  return fn();
}
 
function changer() {
  document.getElementsByTagName('div')[0].style.backgroundColor = "rgb(" + set  + ")";
  document.getElementsByTagName('span')[0].innerText = "#" + toHex(set);
  document.getElementsByTagName('span')[1].innerText = set;
}

// var timer = setTimeout(function(){changer()}, 100);

var i = 0;

document.onscroll = function(e){
    i++;
    if (i % 6 === 0) {
      changer();
      history.pushState({},"", toHex(set));
    }
    set = randomSet();
};
