function random() {
  return Math.ceil(Math.random() * 257 - 1);
}

function randomSet () {
  return [random(), random(), random()];
}

function numberToHex (number) {
  var hex = number.toString(16);
  var str = hex + ''; 
  if (str.length === 1) {
    return '0' + hex;
  } 
  return hex;
}

function toHex (num) {
  var hex = numberToHex(num[0]) + numberToHex(num[1]) + numberToHex(num[2]);
  return hex;
}

function hexToNumber (hex) {
  return parseInt(hex, 16);
}

function toRgb (hex) {
  hex = hex.toString();
  return [hexToNumber(hex[0] + hex[1]), hexToNumber(hex[2] + hex[3]), hexToNumber(hex[4] + hex[5])];
}

function sum (arr) {
  return arr[0] + arr[1] + arr[2];
}

function complimentary (hex) {}

module.exports = {
  random: random,
  randomSet: randomSet,
  complimentary: complimentary,
  toRgb: toRgb,
  sum: sum,
  toHex: toHex
};