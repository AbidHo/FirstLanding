var arrow = document.querySelector(".arrow");
var i = 1;
arrow.addEventListener("click", function () {
  document.querySelector(".result").innerText = i++;
  var nt = document.querySelector(".result");
});

var lt = document.querySelector(".border03");
function random() {
  lt.style.left = Math.random() * 60 - 10 + "%";
}

setInterval(random, 1000);

var x = 60;
function juju() {
  document.getElementById("timewe").innerText = x--;

  if (x == 0) {
    document.querySelector(".canvas").style.display = "none";
    document.querySelector(".time").style.display = "none";
    document.querySelector(".message").style.display = "block";
  }
}

setInterval(() => {
  var congrat = document.querySelector(".result").innerText;
  if (congrat == 12) {
    document.querySelector(".next-level-2").style.display = "block";
    document.querySelector(".canvas").style.display = "none";
    document.querySelector(".time").style.display = "none";
  }
}, 500);

setInterval(juju, 1000);
var fire = new Audio();
fire.src = "fire.mp3";
