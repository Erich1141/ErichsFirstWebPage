var videoarea = document.querySelector("#videoarea");

var rearangeVideos = false;
var objectArray = [];
var clips = [




  [
    "I Exposed California's Billion Dollar Day Care and Hospice Fraud Crisis",
    "https://www.youtube.com/embed/kegwwB4RHgA?si=jPvsRQW9oZ-ETRys"
  ],

  [
    "I Investigated California’s Suspected Voter Fraud",
    "https://www.youtube.com/embed/zSh1Ey4dLcY?si=JKpOoXM0x-3moL04",
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
      "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
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
    var weather = await fetch(
      "https://erichs-real-server.onrender.com/API/weather/latestObservation/MFLC1",
    );

    if (!weather.ok) {
      console.log("Server error:", weather.status, await weather.text());
      return;
    }

    var result = await weather.json();
    var section = result.STATION[0];

    console.log(result);

    const {
      OBSERVATIONS: {
        precip_accum_one_hour_value_1: {
          date_time: time_1hour,
          value: value_1hour,
        },
        precip_accum_value_1: { date_time: time_season, value: value_season },
      },
    } = section ?? {};

    var obs = {
      timeHour: time_1hour,
      timeValue: value_1hour,
      seasonTime: time_season,
      seasonValue: value_season,
    };
    console.log(obs);

    //___________________________________________________

    var info = [
      ["Station: ", "MFLC1"],
      ["Name: ", "Middle Fork Lytle Creek"],
      ["County: ", "San Bernardino County"],
      ["State: ", "California"],
      ["Local Date: ", new Date().toLocaleString()],
      [`Hourly Precipitation :`, ` ${obs.timeValue}`],
      [`Hourly Time Stamp :`, `${timeSync(obs.timeHour)}`],
      [`Seasonal Precipitation :`, ` ${obs.seasonValue}`],
      [`Seasonal Time Stamp :`, `${timeSync(obs.seasonTime)}`],
    ];

    var middleData = document.createElement("div");
    middleData.style.cssText =
      "position:absolute;width:270px;height:380px;left:10px;top:200px;background-color:black;z-index:10;color:white;border:3px solid dodgerblue";
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
    "https://mesonet.agron.iastate.edu/api/1/currents.json?station=LTLC1&minutes=14400",
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
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function timeSync(val) {
  let date = new Date(val);
  let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZoneName: "short", // Optional: includes the time zone abbreviation
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  val = formattedDate;

  return val;
}
