var videoarea = document.querySelector("#videoarea")

var rearangeVideos = false;
var objectArray = [{
    title: "Pfizer Unable To Finish Press Conference As Spokespeople Keep Collapsing",
    video: "https://www.youtube.com/embed/FsQjnv9Dwco"
  },
  {
    title: "Robert F. Kennedy, Jr. warns America: 'We all need to resist vaccine tyranny'",
    video: "https://www.brighteon.com/embed/7bc6967a-ac24-4710-a116-88574d0f7ecf"
  }, {
    title: "Robert Kennedy Jr. and Dr. Judy Mikovitz on The Corruption of The CDC, Dr. Fauci, FDA, NIH, Big Pharma and Vaccines!",
    video: "https://rumble.com/embed/va5bw5/?pub=c8ff5"
  }, {
    title: "Stella Immanuel Demands an Apology!",
    video: "https://rumble.com/embed/vb3bkd/?pub=c8ff5"
  }, {
    title: "Frontline Doctors Discussing Covid 19 Treatments",
    video: "https://rumble.com/embed/v84hn9/?pub=c8ff5"
  },

];
createPage(objectArray);

if (rearangeVideos === false) {

} else {
  var arrangeOrder = [[0, 5]];
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
  console.log(tempArray)
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
