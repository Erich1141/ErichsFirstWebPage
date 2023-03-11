var videoarea = document.querySelector("#videoarea")

var rearangeVideos = false;
var objectArray = [

  {
    title: "Gop Oversight: Select Subcommittee Hearing: Investigating the Origins of COVID-19 - March 8, 2023",
    video: "https://rumble.com/embed/v29owfs/?pub=4"
  },
  {
    title: "New Documentary-'Died Suddenly'",
    video: "https://rumble.com/embed/v1to6s2/?pub=c8ff5"
  }, {
    title: "Pfizer Unable To Finish Press Conference As Spokespeople Keep Collapsing",
    video: "https://www.youtube.com/embed/FsQjnv9Dwco"
  }, {
    title: "Jordan Trishton Walker, Director of Research and Development Admitting, 'Pfizer Exploring Mutating Covid19 and Preemptively Developing a Vaccine'",
    video: "https://rumble.com/embed/v24ih1i/?pub=c8ff5"
  }, {
    title: "James O'Keefe of Project Veritas Confronting Jordan Trishton Walker, Director of Research for Pfizer, about The Directed Evolution of Covid19 by Pfizer.",
    video: "https://www.youtube.com/embed/u5n7RRKgDog"
  }, {
    title: "Pfizer Director Concerned Over Women's Reproductive Health After COVID-19 Vaccination",
    video: "https://rumble.com/embed/v25is2a/?pub=c8ff5"
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
  var arrangeOrder = [
    [0, 5]
  ];
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
