var videoarea = document.querySelector("#videoarea");

var rearangeVideos = false;
var objectArray = [];
var clips = [
  [
    "BOMBSHELL! Government Whistle Blower Exposes Mass Deaths From Covid Shots",
    "https://madmaxworld.tv/watch?id=656b9e0f0681e68064f01ea7",
  ],
  [
    "Steve Kirsch Makes Major Announcement: New Zealand Covid Whistleblower Biggest Bombshell Yet!",
    "https://madmaxworld.tv/watch?id=656a5c4e0681e68064e50415",
  ],
  [
    "WATCH: UAP Transparency; House Oversight VOWS To Tell American People The Truth On UFO's",
    "https://www.youtube.com/embed/cmBNb12xrY8?si=tVKbnbmEmLOxyTUi",
  ],
  [
    "Special Report: Experts Believe Malaysian Flight 370 May Have Been Attacked by Secret Pentagon Technology",
    "https://madmaxworld.tv/watch?id=656a6b180681e68064e866ff",
  ],
];

class VideoMaker {
  constructor(title, video) {
    this.title = title;
    this.video = video;
  }
  objectMaker() {
    return { title: this.title, video: this.video };
  }
}

for (var i of clips) {
  var temp = new VideoMaker(i[0], i[1]);
  var obj = temp.objectMaker();
  objectArray.push(obj);
}

console.log(objectArray);

createPage(objectArray);

if (rearangeVideos === false) {
} else {
  var arrangeOrder = [
    [1, 4],
    [2, 3],
    [1, 4],
  ];
  videoarea.innerHTML = "";
  main = document.querySelector("main");
  var newArray = changeOrder(objectArray, arrangeOrder);
  //console.log(newArray)
  createPage(newArray);
}

var latestMFLC1 = document.getElementById("latestMFLC1");
latestMFLC1.addEventListener("click", calculateLatest);

//*************************************************************************************************************************************

function createPage(tempArray) {
  for (var i of tempArray) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute(
      "allow",
      "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.setAttribute("allowfullscreen", "");
    var h = document.createElement("p");
    var div = document.createElement("div");
    h.textContent = i.title;
    iframe.setAttribute("src", i.video);
    div.appendChild(iframe);
    div.appendChild(h);
    videoarea.appendChild(div);
  }
  //console.log(tempArray)
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function changeOrder(objectArray, arrangeOrder) {
  var tempArray = [...objectArray];
  for (var i of arrangeOrder) {
    var temp = tempArray[i[0]];
    console.dir(`temp: ${temp.title}`);
    tempArray[i[0]] = tempArray[i[1]];
    console.log(`tempArray 0: ${tempArray[i[0]].title}`);
    tempArray[i[1]] = temp;
    console.log(`tempArray 1: ${tempArray[i[1]].title}`);
    console.log(tempArray);
  }

  return tempArray;
}

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
async function calculateLatest() {
  var response = await fetch(
    "https://mesonet.agron.iastate.edu/api/1/currents.json?station=MFLC1&minutes=14400"
  );

  var result = await response.json();

  console.log("Station: ", result.data[0].station);
  console.log("Name: ", result.data[0].name);
  console.log("County: ", result.data[0].county);
  console.log("State: ", result.data[0].state);
  console.log("Local Date: ", result.data[0].local_valid);
  console.log("Precipitation Hour : ", result.data[0].phour);
  console.log("Precipitation Day : ", result.data[0].pday);
}
//calculateLatest()
//***********************************************************************************
async function calculateLTLC1() {
  var response = await fetch(
    "https://mesonet.agron.iastate.edu/api/1/currents.json?station=LTLC1&minutes=14400"
  );

  var result = await response.json();
  console.log(result);
}
//calculateLTLC1()
