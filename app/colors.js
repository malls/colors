function random() {
  return Math.floor(Math.random() * 257 - 1);
}

function randomSet () {
  return [random(), random(), random()];
}


function complimentary (hex) {

}


module.exports = {
  random: random,
  randomSet: randomSet,
  complimentary: complimentary
};