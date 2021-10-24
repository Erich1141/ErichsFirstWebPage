var x = document.getElementsByClassName("sound");
x[0].addEventListener("mouseover", myFunction);
x[1].addEventListener("mouseover", myFunction);
x[2].addEventListener("mouseover", myFunction);
x[3].addEventListener("mouseover", myFunction);

function myFunction(ev) {
 var file=document.getElementById('tick')
 file.play();

}
