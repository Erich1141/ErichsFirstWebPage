var x = document.getElementsByClassName("sound");
x[0].addEventListener("mouseover", myFunction);
x[1].addEventListener("mouseover", myFunction);
x[2].addEventListener("mouseover", myFunction);
x[3].addEventListener("mouseover", myFunction);

function myFunction(ev) {
  var file = document.getElementById('tick')
  file.play();

}

function calculate() {
  var width = document.getElementById("w").value;
  var height = document.getElementById("h").value;
  var result = width * height;
  document.getElementById('result').innerHTML = result;

}

function reset() {
  width = document.getElementById("w").value="";
  height = document.getElementById("h").value="";
  document.getElementById('result').innerHTML = "";


}
