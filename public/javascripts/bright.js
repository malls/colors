function random() {
  return Math.floor(Math.random() * 257 - 1);
}

function randomSet () {
  return [random(), random(), random()];
}

var set;

function caller(fn) {
  return fn();
}
 
function changer() {
  document.body.style.backgroundColor = set;
}

var timer = setTimeout(function(){changer()}, 100);


document.onscroll = function(e){
    set = "rgb(" + randomSet() + ")";
    console.log(set);
};

history.pushState()