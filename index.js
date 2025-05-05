var videoarea = document.querySelector("#videoarea");

var rearangeVideos = false;
var objectArray = [];
var clips = [
  [
    "Catherine Fitts: Power Grids, Bankers vs. the West, Secret Underground Bases, and Extinction Events",
    "https://www.youtube.com/embed/z8pA2TDXtew?si=TjulMr4YSwP1iKBn",
  ],
  [
    "Tucker Carlson interviewing Rep. Curt Weldon on 9/11 ",
    "https://www.youtube.com/embed/8SWoEGXk-V8?si=ZiddTm-iNeWds4ap",
  ],
  [
    "ELON MUSK JOINS VERDICT | Verdict Ep. 214",
    "https://www.youtube.com/embed/BDREZmpkIz8?si=_IOFJrW-pnenORxi",
  ],
  [
    "Karen Bass Leaked Phone Call Jan. 4, 2025 Before The Fires!!",
    "https://rumble.com/embed/v6lgr4u/?pub=c8ff5",
  ],
  [
    "PROJECT BIG BALLS’: D.O.G.E Explained in Detail",
    "https://rumble.com/embed/v6g9271/?pub=c8ff5",
  ],
  [
    `The Democratic Party's Desperate Attempt To Claim That Elon Musk's DOGE Is Unconstitutional Crashes & Burns`,
    "https://www.banned.video/watch?id=67a549982a23988368ba5bad",
  ],
  [
    `BREAKING EXCLUSIVE: Pennsylvania Investigators Found Strong Evidence Of A Criminal Network Handling Trump's Attempted Assassin In Butler, Penn.`,
    "https://madmaxworld.tv/watch?id=67aba93ee02deded20f1a9d9",
  ],
  [
    `L.A. Marzulli Brokeness`,
    "https://www.youtube.com/embed/-VvVYlHSVG4?si=5CE3U42RiUY0dgSS&amp;start=884",
  ],
  [
    `DOJ Lawyer Admits FDA War Against Ivermectin was Abuse of Authority, "Millions of Deaths" Resulted`,
    "https://www.youtube.com/embed/HH2Rh1_owqI?si=jnrhqjz8D-Na8PAf",
  ],
  [
    `RFK Jr. Bombshell: Nukes Entire Democrat Party in Historic Speech That Every American NEEDS To See`,
    "https://www.youtube.com/embed/iVUdXGC-Tg8?si=o2hRF9PP9dUpqGDM",
  ],

  [
    `Confessions of a UFO Hunter: Ross Coulthart interviews Lue Elizondo`,
    "https://www.youtube.com/embed/wgM5V44eQHU?si=V7C0DDzyPKdAnMjT",
  ],
  [
    `Prophit Predicts Trump Assasination Attempt April 2024 (Short Version)`,
    "https://www.youtube.com/embed/FCGfE9yMnXc?si=gX6gf63dBLlOeO4k",
  ],
  [
    `3 PROPHETS Explain 3 American SOLAR ECLIPSES | APRIL8 SIGN | Amanda Grace, Brandon Biggs Cioccolanti`,
    "https://www.youtube.com/embed/Ey0qVzG8_vU?si=C_LAiNhOrevotedP",
  ],
  [
    `New Trump Update: Bomb materials found in vehicle of suspected shooter `,
    "https://www.youtube.com/embed/dWlQmsq5740?si=WzJpaooGa30F5RPO",
  ],

  [`Vaxxed II the movie`, "https://rumble.com/embed/v2r08s2/?pub=c8ff5"],
  [
    `A Quick Q&A With Father, Relics, Protestant Deliverance and Mediums`,
    "https://www.youtube.com/embed/EBc1VMAzIH8?si=MoEnIkhYld9D5_B_&amp;start=1569",
  ],
  [`Let My People Go`, "https://rumble.com/embed/v4hirv6/?pub=c8ff5"],

  [
    `The Brutal Reality of the Middle East | Mosab Hassan Yousef | EP 443`,
    "https://www.youtube.com/embed/I5VPFw0vI6U?si=2jAT1JsyW07JmKXE",
  ],
  [
    `Source Code, Fraud Algorithms, and Injecting Votes: Dr. Daugherity - "Let My People Go" Interview`,
    "https://rumble.com/embed/v4q9f0n/?pub=c8ff5",
  ],
];
console.log(clips);
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
var remAddSwitch = false;
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
var sub = document.querySelector("#input");
sub.addEventListener("click", (e) => {
  var answer = document.querySelector("#pass");
  var result = answer.value.toUpperCase();
  if (result === "E108832270") {
    console.log(result);
    window.open("Ed.html", "_blank");
  }
  answer.value = null;
  console.log(answer.value);
});

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
async function calculateLatest() {
  if (!remAddSwitch) {
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
    middleData.appendChild(remove);
    middleData.lastElementChild.style.cssText =
      "color:red;margin-top:20px;font-size:20px";
    middleData.lastElementChild.textContent = "Remove Box ";
    middleData.lastElementChild.id = "remove";
    document.body.appendChild(middleData);

    remAddSwitch = true;

    var target = document.getElementById("remove");
    target.addEventListener("click", removeTheBox);
    console.log(remAddSwitch);
  } else {
  }
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
  var target2 = document.getElementById("remove");
  target2.removeEventListener("click", calculateLatest);

  if (remAddSwitch) {
    var box = document.getElementById("middleFork");

    box.parentNode.removeChild(box);

    remAddSwitch = false;
    console.log(remAddSwitch);
    //console.log(remAddSwitch)
  } else {
  }
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
