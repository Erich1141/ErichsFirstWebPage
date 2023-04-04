var videoarea = document.querySelector("#videoarea")

var rearangeVideos = true;
var objectArray = [

  {
    title: "Dr. McCullough--Uncensored Raw Medical Truth!",
    video: "https://madmaxworld.tv/watch?id=642b1b667159da6493c21209"
  },
  {
    title: "Breaking Trump Arrest Expected To Happen Next week As Democrats Make Preparations For His Perp Walk",
    video: "https://madmaxworld.tv/watch?id=64150385605edf539c55e627"
  },
  {
    title: "EXPLOSIVE testimony today at the Sen. Elections and House O/sight hearings by Jacqueline Breger",
    video: "https://rumble.com/embed/v289ong/?pub=4"
  },
  {
    title: "Missing 411- Special Edition of the NEWS January 6.",
    video: "https://www.youtube.com/embed/VDnXEEZnGbI"
  },

  {
    title: "Hit Song 'Trump Won !!' Natasha Owens",
    video: "https://rumble.com/embed/v28pxm4/?pub=4"
  },


  {
    title: "CDC Virologist EXPOSES Covid 'Viral Cleavage Site' as Evidence of Lab Origin",
    video: "https://www.youtube.com/embed/rZAPAyZyhVA"
  },
  {
    title: "Interview with Father Lampert Clip",
    video: "https://www.youtube.com/embed/oiyCGd3q4P0?start=4252"

  },

  {
    title: " Pink-Haired Communists Teaching Our Kids!': Trump Reveals Plan To 'Save American Education'",
    video: "https://www.youtube.com/embed/EdOR880Ribo"
  },

  {
    title: "Trump Calls for ‘Quantum Leap’ In U.S. Standard of Living With Creation of ‘Freedom Cities’",
    video: "https://rumble.com/embed/v2909ri/?pub=c8ff5"

  },
  {
    title: "Pfizer Unable To Finish Press Conference As Spokespeople Keep Collapsing",
    video: "https://www.youtube.com/embed/FsQjnv9Dwco"

  },
  {
    title: "Mark of the Beast | 'If I Were the Devil...' - Paul Harvey | Are We NOW Entering Into the Mark of the Beast System?",
    video: "https://rumble.com/embed/v1uind0/?pub=c8ff5"

  },

];
createPage(objectArray);

if (rearangeVideos === false) {

} else {
  var arrangeOrder = [
    [1, 4],
    [2, 3],
    [1, 4]
  ];
  videoarea.innerHTML = "";
  main = document.querySelector("main")
  var newArray = changeOrder(objectArray, arrangeOrder)
  //console.log(newArray)
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
  //console.log(tempArray)
}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function changeOrder(objectArray, arrangeOrder) {
  var tempArray = [...objectArray]
  for (var i of arrangeOrder) {

    var temp = tempArray[i[0]]
    console.dir(`temp: ${temp.title}`)
    tempArray[i[0]] = tempArray[i[1]]
    console.log(`tempArray 0: ${tempArray[i[0]].title}`, )
    tempArray[i[1]] = temp
    console.log(`tempArray 1: ${tempArray[i[1]].title}`, )
    console.log(tempArray)

  }

  return tempArray
}
