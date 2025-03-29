var videoarea = document.querySelector("#videoarea");

var rearangeVideos = false;
var objectArray = [
  {
    title:
      "What is Psoriasis and Is Psoriasis Contagious? Explained by Dr.Berg",
    video: "https://www.youtube.com/embed/3ZYMZpOr3u4?si=gW3BloXCPdVVuXRD",
  },

  {
    title: "Psoriasis Treatment – The Best 3 Remedies for Psoriasis – Dr.Berg",
    video: "https://www.youtube.com/embed/jSYto3FAJUA?si=U5jkJDbUwES31sFG",
  },

  {
    title:
      "How to Get Rid of Psoriasis? – Natural Remedies for Psoriasis by Dr.Berg",
    video: "https://www.youtube.com/embed/DsJwB3bTzp8?si=GGeH_OsUURadnvcj",
  },

  
];
createPage(objectArray);

if (rearangeVideos === false) {
} else {
  var arrangeOrder = [[0, 5]];
  videoarea.innerHTML = "";
  main = document.querySelector("main");
  var newArray = changeOrder(objectArray, arrangeOrder);

  createPage(newArray);
}

document.getElementById('navigation').addEventListener('change', function() {
  var url = this.value
  if (url) {
    window.location.href = url;
  }
});

//*************************************************************************************************************************************

function createPage(tempArray) {
  for (var i of tempArray) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
  console.log(tempArray);
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function changeOrder(objectArray, arrangeOrder) {
  for (var i of arrangeOrder) {
    var temp = objectArray[i[0]];
    objectArray[i[0]] = objectArray[i[1]];
    objectArray[i[1]] = temp;
  }
  return objectArray;
}
