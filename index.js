console.log("what")
var videoarea = document.querySelector("#videoarea");

var rearangeVideos = false;
var objectArray = [];
var clips = [
  [
    `Vaxxed the movie`,
    "https://rumble.com/embed/v1ueeho/?pub=c8ff5",
  ],
  [
    `Vaxxed II the movie`,
    "https://rumble.com/embed/v2r08s2/?pub=c8ff5",
  ],
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

  [
    `Dr. Peter A. McCullough challenged on covid and vaccine views by radio host in heated interview`,
    "https://www.youtube.com/embed/k3NSmXbPegE?si=v8KYnTgM6nuv9oeX",
  ],
  [
    `The biggest crime in the history of medicine`,
    "https://www.youtube.com/embed/v3N-uFfvU5s?si=_fD9kV1rzBIOpGW9",
  ],
  [
    `CIA Officer/Former FBI Boasts “Can Put Anyone in Jail…Set ’Em Up!” “We Call It a Nudge”`,
    "https://www.youtube.com/embed/74Wdovjjt3s?si=I5Nw10TmPADETKGc",
  ],
  [
    `'Son of Hamas' Tackles University Antisemitism, Exposes Hamas 'Holy War' to Wipe Out Jews`,
    "https://www.youtube.com/embed/wpnvUIcvNUE?si=pMkH-cX7pqhbcVEL",
  ],
  [
    `Climate: The Movie (The Cold Truth) - Martin Durkin`,
    "https://rumble.com/embed/v4hzs25/?pub=4",
  ],
  [
    `Response To New Study On Intermittent Fasting, By Dr. Stan Ekberg`,
    "https://www.youtube.com/embed/aUWSlsivFhM?si=ReYcQFbgmf60Gvat",
  ],
  [
    `Intermittent Fasting Doubles Your Risk of Dying from a Heart Attack`,
    "https://www.youtube.com/embed/QMsItnMlhuo?si=MhWb4Wh1G4s_ZGmc",
  ],

  [
    `Trump wins in SCOTUS- professors and pundits lose!`,
    "https://www.youtube.com/embed/AQuuO8lnoQM?si=A-KtL77kAER1qnws",
  ],

  [
    "ARCHBISHOP CARLO MARIA VIGANO ON 3 JANUARY 2024",
    "https://rumble.com/embed/v42d6rl/?pub=c8ff5",
  ],
  [
    "Shot Dead The Movie- Covid 19 vaccine and  Explosive Deaths of Babies and Young People",
    "https://rumble.com/embed/v3sfcbp/?pub=c8ff5",
  ],


 
 
];
console.log(clips)
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









