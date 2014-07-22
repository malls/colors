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

function complimentary (hex) {

}

module.exports = {
  random: random,
  randomSet: randomSet,
  complimentary: complimentary,
  toHex: toHex
};