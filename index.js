var videoarea = document.querySelector("#videoarea");

var rearangeVideos = false;
var objectArray = [];
var clips = [
  [
    "The Miraculous Nature of Water",
    "https://madmaxworld.tv/watch?id=65853bb9d73929b3eeec38c4",
  ],

  [
    "BOMBSHELL! Government Whistle Blower Exposes Mass Deaths From Covid Shots",
    "https://madmaxworld.tv/watch?id=656b9e0f0681e68064f01ea7",
  ],
  [
    "New Zealand Covid-19 vaccination database admin turns whistleblower",
    "https://rumble.com/embed/v3wfhpm/?pub=c8ff5",
  ],
  [
    "BOMBSHELL: NEW ZEALAND WHISTLEBLOWER EXPOSES COVID MASS GENOCIDE PLAN (2DEC23)-FULL VIDEO",
    "https://rumble.com/embed/v3wlpw2/?pub=c8ff5",
  ],
  [
    "New Zealand Police Are Raiding Home Of Whistleblower Who Leaked Covid-19 Vaccine Mortality Data!",
    "https://rumble.com/embed/v3wqf2e/?pub=c8ff5",
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
  [
    "GOP lawmaker calls for transparency on UFOs: ‘Our public wants to know what’s going on’",
    "https://www.youtube.com/embed/iBm_EbQLcII?si=Y3Stxq0PPfcsXqIk",
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

//console.log(objectArray);

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
    // console.dir(`temp: ${temp.title}`);
    tempArray[i[0]] = tempArray[i[1]];
    // console.log(`tempArray 0: ${tempArray[i[0]].title}`);
    tempArray[i[1]] = temp;
    // console.log(`tempArray 1: ${tempArray[i[1]].title}`);
    //console.log(tempArray);
  }

  return tempArray;
}
var sub=document.querySelector("#input")
sub.addEventListener("click", (e) => {
  
  var answer = document.querySelector("#pass")
  var result=answer.value.toUpperCase()
if(result==="E108832270"){
console.log(result)
window.open("Ed.html","_blank")
}
answer.value=null
  console.log(answer.value)
});


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
async function calculateLatest() {
  var response = await fetch(
    "https://mesonet.agron.iastate.edu/api/1/currents.json?station=MFLC1&minutes=14400"
  );

  var result = await response.json();

  var info = [
    ["Station: ", 1],
    ["Name: ", 2],
    ["Station: ", result.data[0].station],
    ["Name: ", result.data[0].name],
    ["County: ", result.data[0].county],
    ["State: ", result.data[0].state],
    ["Local Date: ", new Date(result.data[0].local_valid).toLocaleString()],
    ["Precipitation Hour : ", result.data[0].phour],
    ["Precipitation Day : ", result.data[0].pday],
  ];

  saveToLocal(info);

  var middleData = document.createElement("div");
  middleData.style.cssText =
    "position:absolute;width:200px;height:380px;left:10px;top:200px;background-color:black;z-index:10;color:white;border:3px solid dodgerblue";
  middleData.id = "middleFork";

  for (var i of info) {
    var temp = document.createElement("div");
    temp.style.cssText = "color:white;margin-bottom: 5px";
    temp.textContent = i[0] + i[1];
    middleData.appendChild(temp);
  }

  var remove = document.createElement("div");
  middleData.append(remove);
  middleData.lastElementChild.style.cssText =
    "color:red;margin-top:20px;font-size:20px";
  middleData.lastElementChild.textContent = "Remove Box ";
  middleData.lastElementChild.id = "remove";

  document.body.appendChild(middleData);
  var target = document.getElementById("remove");
  target.addEventListener("click", removeTheBox);
}

//***********************************************************************************
async function calculateLTLC1() {
  var response = await fetch(
    "https://mesonet.agron.iastate.edu/api/1/currents.json?station=LTLC1&minutes=14400"
  );

  var result = await response.json();
  console.dir(result);
}
//calculateLTLC1()
//**********************************************************************************

function removeTheBox() {
  var box = document.getElementById("middleFork");
  box.remove();
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function saveToLocal(info) {
  var local = localStorage.getItem("Precipitation");
  var decode = JSON.parse(local);

  if (decode === null) {
    var result = processForLocalStorage(info);
    var process = JSON.stringify(result);

    localStorage.setItem("Precipitation", process);
  } else {
    var answer = processForLocalStorage(info);
    decode.push(answer);
    var end = JSON.stringify(decode);

    localStorage.setItem("Precipitation", end);
  }
}
//*********************************************************************************
function processForLocalStorage(info) {
  var obj = [];
  var arr = [];
  for (var i of info) {
    var temp = i[0].split(" ").join("");
    arr.push([temp.split(":").join(""), i[1]]);
  }
  var entries = new Map(arr);
  var final = Object.fromEntries(entries);
  obj.push(final);

  return obj;
}
