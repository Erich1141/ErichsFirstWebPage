var videoarea = document.querySelector("#videoarea")

var rearangeVideos = true;
var objectArray = [{
    title: "Pfizer Director Concerned Over Women's Reproductive Health After COVID-19 Vaccination",
    video: "https://rumble.com/embed/v25is2a/?pub=c8ff5"
  },
  {
    title: "Jordan Trishton Walker, Director of Research and Development Admitting, 'Pfizer Exploring Mutating Covid19 and Preemptively Developing a Vaccine'",
    video: "https://rumble.com/embed/v24ih1i/?pub=c8ff5"
  }, {
    title: "James O'Keefe of Project Veritas Confronting Jordan Trishton Walker, Director of Research for Pfizer, about The Directed Evolution of Covid19 by Pfizer.",
    video: "https://www.youtube.com/embed/u5n7RRKgDog"
  }, {
    title: " Pink-Haired Communists Teaching Our Kids!': Trump Reveals Plan To 'Save American Education'",
    video: "https://www.youtube.com/embed/EdOR880Ribo"
  }, {
    title: "New Documentary-'Died Suddenly'",
    video: "https://rumble.com/embed/v1to6s2/?pub=c8ff5"
  },


];
createPage(objectArray);
if (rearangeVideos === false) {

} else {
  var arrangeOrder = [[0, 4]];
  videoarea.innerHTML = "";
  main = document.querySelector("main")
  var newArray = changeOrder(objectArray, arrangeOrder)

  createPage(newArray)
}



//*************************************************************************************************************************************

function createPage(tempArray) {


  for (var i of tempArray) {
    var iframe = document.createElement("iframe")
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture")
    iframe.setAttribute("allowfullscreen", "")
    var h = document.createElement("p")
    var div = document.createElement("div")
    h.textContent = i.title;
    iframe.setAttribute("src", i.video)
    div.appendChild(iframe)
    div.appendChild(h)
    videoarea.appendChild(div)
  }
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function changeOrder(objectArray, arrangeOrder) {

  for (var i of arrangeOrder) {
    var temp = objectArray[i[0]]
    objectArray[i[0]] = objectArray[i[1]]
    objectArray[i[1]] = temp

  }
  return objectArray
}
