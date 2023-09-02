//GLOBAL VARIABLES
var src = tilebacks();
placeTileSource(src);
var navigation = false;
addNav()

var successfulAttemptsPlayer1;
var successfulAttemptsPlayer2;
var failedAttemptsPlayer1;
var failedAttemptsPlayer2;
var text = document.getElementsByClassName("player1")[0]
var text1 = document.getElementsByClassName("player2")[0]
var onePlayer = undefined;
var playerGroup = []

//EVENT LISTENERS

var start = document.getElementsByClassName("start_game_button")[0];
start.addEventListener("click", startGame);

var stoppy = document.getElementsByClassName("stop_game_button")[0]
stoppy.addEventListener("click", hitIt)

var stop = document.getElementsByClassName("stop_game_button")[0];
stop.addEventListener("click", stopTheGame);

var start = document.getElementsByClassName("start_game_button")[0]
start.addEventListener("click", hitIt);

//AUDIO CLICK FUNCTION
function hitIt(e) {
  var play = document.createElement("audio")
  play.src = "mouseClick.wav"
  play.play()


}

//************************************************************************************************************************************
function startGame() { //starts the game
  removeNav()
  reinstateBoard();
  eraseScores()

  var imageArray = createImageArray(); //creates an Image Array. Try not to redo this every session not every game
  var player1 = true;
  var player2 = false;
  failedAttemptsPlayer1 = 0;
  failedAttemptsPlayer2 = 0;
  successfulAttemptsPlayer1 = 0;
  successfulAttemptsPlayer2 = 0;
  var scorePlayer1 = 0;
  var scorePlayer2 = 0;

  var counter = 0;
  var board = PhotoShuffle(imageArray);

  var sound = document.getElementById("tick")
  var tileCount = board.length;
  var flippedCards = [];
  var backOfTile = src;
  var target = document.getElementsByTagName("img");
  var j = document.getElementById("tick")[0]
  for (var i = 0; i <= target.length - 1; i++) {
    target[i].addEventListener("click", hitIt)
    target[i].addEventListener("click", tilePieceInfo)
    //  target[i].addEventListener("touchstart",hitIt)
    //target[i].addEventListener("touchstart",tilePieceInfo)

  }
  promptBox();


  //*****************************************************************************************************************
  function tilePieceInfo(e) { //This is the heart of the program.this is in the startgame function

    if (counter <= 1) {

      var classy = e.target.className;


      var index = classy.substring(3, 5).trim();

      var target = document.getElementsByClassName(classy)[0].setAttribute("src", board[index])


      flippedCards.push([classy, index])

      if ((counter == 1) && (flippedCards[0][1] == flippedCards[1][1])) {

        alert("You picked the same card dummy LOL! Pick another card!")
        flippedCards.pop()
        counter = 1

      } else {
        counter++
      }

    } else if (flippedCards[0][1] != flippedCards[1][1]) { //checks to see if you tried to pick the same tile

      var card1 = document.getElementsByClassName(flippedCards[0][0])[0].src
      var card2 = document.getElementsByClassName(flippedCards[1][0])[0].src

      if (card1 == card2) { //checks to see if the tiles are equal
        document.getElementsByClassName(flippedCards[0][0])[0].remove()
        document.getElementsByClassName(flippedCards[1][0])[0].remove()
        if (onePlayer) {
          successfulAttemptsPlayer1++
          scorePlayer1++

        } else {

          if (player1) {
            successfulAttemptsPlayer1++
            scorePlayer1++
          } else {
            successfulAttemptsPlayer2++
            scorePlayer2++
          }

        }

        flippedCards = [];
        counter = 0;
        tileCount = tileCount - 2;

        keepScore(scorePlayer1, scorePlayer2, player1, player2)
        checkTilecount(tileCount)
      } else if (card1 != card2) { //checks to see if the tiles are not equal

        for (var p of flippedCards) {

          var firstCard = document.getElementsByClassName(p[0])[0].setAttribute("src", backOfTile);
          var secondCard = document.getElementsByClassName(p[0])[0].setAttribute("src", backOfTile);
          if (onePlayer) {

            failedAttemptsPlayer1++

          } else {
            if (player1) {
              failedAttemptsPlayer1++

            } else {
              failedAttemptsPlayer2++
            }
          }
          flippedCards = [];
          counter = 0;

        }
        if (onePlayer) {

        } else {

          if (player1) {
            player1 = false;
            player2 = true;
          } else {
            player1 = true;
            player2 = false;
          }
        }
      }

    }

  }

}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function stopTheGame() { // this stope the game and refreshes the page. Stand alone function


  var pause = setTimeout(renewWindow, 500)

  function renewWindow() {


    var doc = document.getElementsByClassName("board")[0]
    doc.setAttribute("style", `background-color:transparent`)
    doc.innerHTML = tilePieceHolder()


    placeTileSource(src)
    if (navigation === false){
      addNav()

  }

  document.getElementsByClassName("player1_Score")[0].innerHTML = ""
  document.getElementsByClassName("player2_Score")[0].innerHTML = "";

}
}
//********************************************************************************************************************************************
function keepScore(scorePlayer1, scorePlayer2, player1, player2, onePlayer) { // keeps score and puts it in score board. Stand alone function
  if (onePlayer) {

    var playboy = document.getElementsByClassName("player1_Score")[0].innerHTML = `${scorePlayer1} pair`

  } else {

    if (player1) {
      var playboy = document.getElementsByClassName("player1_Score")[0].innerHTML = `${scorePlayer1} pair`

    } else {

      var playboy = document.getElementsByClassName("player2_Score")[0].innerHTML = `${scorePlayer2} pair`


    }
  }
}
//((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))
function checkTilecount(tileCount) { //checks if the game is out of tiles to end the game. Stand alone function

  if (tileCount == 0) {


    var board = document.getElementsByClassName("board")[0];
    board.innerHTML = "<div>PLAYER STATS</div><div>PLAYER 1</div><div class='player1stats'>  <div class='statstyle'>Date -</div><div class='statstyle' id='date'></div><div class='statstyle'>Name -</div><div class='statstyle' id='name'></div><div class='statstyle'>Match Percentage -</div><div class='statstyle' id='matchpercentage'></div><div class='statstyle'>Memory Improvement -</div><div class='statstyle' id='memoryimprovement'></div></div><div>PLAYER 2</div><div class='player2stats'>  <div class='statstyle'>Date -</div><div class='statstyle' id='date1'></div><div class='statstyle'>Name -</div><div class='statstyle' id='name1'></div><div class='statstyle'>Match Percentage -</div><div class='statstyle' id='matchpercentage1'></div><div class='statstyle'>Memory Improvement -</div><div class='statstyle' id='memoryimprovement1'></div></div>";
    board.style.cssText = "background-color:slateblue;color:white;width:500px;height:auto;margin-bottom:20px;margin-top:20px;margin-left:10px;border:3px solid black"
    board.children[0].style.cssText = "width:100%;text-align:center;font-size:2em;margin-top:10px;margin-bottom:20px;"
    board.children[1].style.cssText = "font-size:1.5em;padding-bottom:10px;width:100%";
    board.children[2].style.cssText = "font-size:1em;width:70%;padding-bottom:10px;display:flex;flex-wrap:wrap";
    board.children[3].style.cssText = "font-size:1.5em;padding-bottom:10px;width:100%;height:auto;";
    board.children[4].style.cssText = "font-size:1em;width:70%;padding-bottom:10px;display:flex;flex-wrap:wrap";


    var changeStyle = document.getElementsByClassName("statstyle");
    for (var i = 0; i <= changeStyle.length - 1; i++) {
      changeStyle[i].style.cssText = "width:50%;";

    }


    //storePerson()
    xxxx()
    if (navigation === false) {
      addNav()

    }
  }

}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


function reinstateBoard() {


  var doc = document.getElementsByClassName("board")[0]
  doc.setAttribute("style", `background-color:transparent`)
  doc.innerHTML = tilePieceHolder()

  placeTileSource(src)

}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function promptBox() {
  var pause = setTimeout(load, 500)

  function load() {
    if (onePlayer == undefined) {


      var numPlayers = window.prompt("Enter number of players", "1 or 2")

      onePlayer = numPlayers == 1 ? true : false;

    } else {


    }
    if (onePlayer) {

      if (text.innerText == "PLAYER 1") {
        var player1 = window.prompt("What is your first name ?").toUpperCase()

        text.innerText = player1


      } else if (text.innerText != "PLAYER 1") {
        var player1 = window.prompt(`Are you ${text.innerText}`, "y or n").toUpperCase()

        if (player1 == "Y") {

        } else {
          var changeUser = window.prompt("What is your first name ?", "First Name Here").toUpperCase()
          text.innerText = changeUser;

        }
      }
    } else {


      if (text.innerText == "PLAYER 1") {
        var player1 = window.prompt("Player 1, what is your first name ?").toUpperCase()

        text.innerText = player1

      } else if (text.innerText != "PLAYER 1") {
        var player1 = window.prompt(`Player 1, are you ${text.innerText}`, "y or n").toUpperCase()

        if (player1 == "Y") {

        } else {
          var changeUser = window.prompt("Player 1, what is your first name ?", "First Name Here").toUpperCase()
          text.innerText = changeUser;

        }
      }







      if (text1.innerText == "PLAYER 2") {
        var player2 = window.prompt("Player 2, what is your first name ?").toUpperCase()

        text1.innerText = player2

      } else if (text1.innerText != "PLAYER 2") {
        var player2 = window.prompt(`Player2, Are you ${text1.innerText}`, "y or n").toUpperCase()

        if (player2 == "Y") {

        } else {
          var changeUser1 = window.prompt("Player 2, what is your first name ?", "First Name Here").toUpperCase()
          text1.innerText = changeUser1;

        }
      }
    }
  }

}

//************************************************************************************************************************************************
function eraseScores() {
  var player1 = document.getElementsByClassName("player1_Score")[0]
  player1.innerText = ""
  var player2 = document.getElementsByClassName("player2_Score")[0]
  player2.innerText = ""


}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function storePerson() {
  console.log(onePlayer)
  var evaluate = localStorage.getItem(text.innerText)

  var data = new Date();
  var date = data.toLocaleDateString()
  var time = data.toLocaleTimeString()

  var total = successfulAttemptsPlayer1 + failedAttemptsPlayer1
  var result = successfulAttemptsPlayer1 / total;

  var person = {
    date: date,
    time: time,
    name: text.innerText,
    matchPercentage: result,
    improvement: 0,
  }
  if (evaluate === null) {


    var arr = [];
    arr.push(person)

    var result = JSON.stringify(arr);
    localStorage.setItem(text.innerText, result)
  } else {
    var unfolded = JSON.parse(evaluate)
    console.log(unfolded)
    var improve = person.matchPercentage - unfolded[0].matchPercentage;
    person.improvement = improve;
    unfolded.push(person)
    localStorage.setItem(`${text.innerText}`, JSON.stringify(unfolded))


  }
  document.getElementById("date").textContent = person.date;
  document.getElementById("name").textContent = person.name;
  document.getElementById("matchpercentage").textContent = `${(person.matchPercentage*100).toPrecision(5)} %`;
  document.getElementById("memoryimprovement").textContent = `${(person.improvement*100).toPrecision(3)} %`;


}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function xxxx() {
  var data = new Date();
  var date = data.toLocaleDateString()
  var time = data.toLocaleTimeString()

  if (onePlayer) {
    playerGroup.length = 1;
    playerGroup[0] = new CreatePlayerObjects(date, time, text.innerText, successfulAttemptsPlayer1, failedAttemptsPlayer1, "date", "name", "matchpercentage", "memoryimprovement");

  } else if (onePlayer === false) {
    playerGroup.length = 2;
    playerGroup[0] = new CreatePlayerObjects(date, time, text.innerText, successfulAttemptsPlayer1, failedAttemptsPlayer1, "date", "name", "matchpercentage", "memoryimprovement");
    playerGroup[1] = new CreatePlayerObjects(date, time, text1.innerText, successfulAttemptsPlayer2, failedAttemptsPlayer2, "date1", "name1", "matchpercentage1", "memoryimprovement1");
  }

  for (var i of playerGroup) {
    var evaluate = localStorage.getItem(i.name)
    if (evaluate === null) {
      var total = i.successfulAttempts + i.failedAttempts
      var result = i.successfulAttempts / total;
      i.matchPercentage = result

      var arr = [];
      arr.push(i)
      var jason = JSON.stringify(arr);
      localStorage.setItem(i.name, jason)

    } else {
      var total = i.successfulAttempts + i.failedAttempts
      var result = i.successfulAttempts / total;
      i.matchPercentage = result
      var unfolded = JSON.parse(evaluate)

      var improve = i.matchPercentage - unfolded[0].matchPercentage;
      i.improvement = improve;
      unfolded.push(i)
      localStorage.setItem(i.name, JSON.stringify(unfolded))


    }
    document.getElementById(i.idDate).textContent = i.date;
    document.getElementById(i.idName).textContent = i.name;
    document.getElementById(i.idMatchpercentage).textContent = `${(i.matchPercentage*100).toPrecision(2)} %`;
    document.getElementById(i.idMemoryimprovement).textContent = `${(i.improvement*100).toPrecision(3)} %`;




  }
}



//**********************************************************************************************************************************************
function CreatePlayerObjects(date, time, name, successfulAttempts, failedAttempts, idDate, idName, idMatchpercentage, idMemoryimprovement) {

  this.date = date;
  this.time = time;
  this.name = name;
  this.improvement = 0;
  this.idDate = idDate;
  this.idName = idName;
  this.idMatchpercentage = idMatchpercentage;
  this.idMemoryimprovement = idMemoryimprovement;
  this.successfulAttempts = successfulAttempts;
  this.failedAttempts = failedAttempts;
  this.matchPercentage = 0

}
/*-----------this is the memory module memory.js------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function placeTileSource(src) { //places the back of tile photo link into src Attribute for easy switching
  var doc = document.getElementsByClassName("board")

  for (var i = 0; i <= doc[0].children.length - 1; i++) {

    doc[0].children[i].firstElementChild.src = src;

  }

}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function createImageArray() {

  var dahlia = `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dahlia-1508785047.jpg?crop=1xw:1xh;center,top&resize=480:*`;
  var dahlia1 = `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dahlia-1508785047.jpg?crop=1xw:1xh;center,top&resize=480:*`;
  var blueSalvia = `https://plants.dutchgrowers.net/Content/Images/Photos/G562-09.jpg`;
  var blueSalvia1 = `https://plants.dutchgrowers.net/Content/Images/Photos/G562-09.jpg`;
  var sunflower = `https://i.pinimg.com/736x/76/7b/e0/767be0e0cc15f3dba78eeef36481a937.jpg`;
  var sunflower1 = `https://i.pinimg.com/736x/76/7b/e0/767be0e0cc15f3dba78eeef36481a937.jpg`;

  var hibiscus = `http://www.bmpt1.com/tutorialimages/flower01/IMG_3515flower.jpg`
  var hibiscus1 = `http://www.bmpt1.com/tutorialimages/flower01/IMG_3515flower.jpg`
  var ranunculus = `https://www.cherokeelair.com/users/CherokeeLair18253/largerThumbs/CherokeeLair182532670032t.jpg`
  var ranunculus1 = `https://www.cherokeelair.com/users/CherokeeLair18253/largerThumbs/CherokeeLair182532670032t.jpg`
  var tigerlily = `https://i.pinimg.com/originals/e6/b3/26/e6b326b7ef3f6815dec1238c52a763d4.jpg`
  var tigerlily1 = `https://i.pinimg.com/originals/e6/b3/26/e6b326b7ef3f6815dec1238c52a763d4.jpg`
  var icelandPoppy = `https://a4.pbase.com/g4/80/608780/3/134795110.jJD4FNpm.jpg`
  var icelandPoppy1 = `https://a4.pbase.com/g4/80/608780/3/134795110.jJD4FNpm.jpg`
  var pansy = `https://s.hdnux.com/photos/04/27/45/1145182/5/920x920.jpg`
  var pansy1 = `https://s.hdnux.com/photos/04/27/45/1145182/5/920x920.jpg`
  var snapdragon = `https://farm4.staticflickr.com/3123/2542910113_f9eb1c6cd9_z.jpg`
  var snapdragon1 = `https://farm4.staticflickr.com/3123/2542910113_f9eb1c6cd9_z.jpg`
  var alysum = `https://www.joncarloftis.com/wp-content/uploads/2015/05/Snow-Princess%C2%AE-Alyssum-Lobularia-300x300.jpg`
  var alysum1 = `https://www.joncarloftis.com/wp-content/uploads/2015/05/Snow-Princess%C2%AE-Alyssum-Lobularia-300x300.jpg`
  var lobelia = `https://a4.pbase.com/u47/hjsteed/medium/30450976.0406200131.jpg`
  var lobelia1 = `https://a4.pbase.com/u47/hjsteed/medium/30450976.0406200131.jpg`
  var hydrangea = `https://i.pinimg.com/originals/d3/00/06/d300062b8141a532f874df7fd668f0b6.jpg`
  var hydrangea1 = `https://i.pinimg.com/originals/d3/00/06/d300062b8141a532f874df7fd668f0b6.jpg`
  var marigold = `http://www.wellgrowhorti.com/Pictures/FlowerSeeds/Thumbnail/Marigold/Marigold%20Little%20Hero%20Orange%20wp.jpg`
  var marigold1 = `http://www.wellgrowhorti.com/Pictures/FlowerSeeds/Thumbnail/Marigold/Marigold%20Little%20Hero%20Orange%20wp.jpg`
  var calibrachoa = `https://www.greenthumb.com/wp-content/uploads/2020/04/millionbells-600x447.jpg`
  var calibrachoa1 = `https://www.greenthumb.com/wp-content/uploads/2020/04/millionbells-600x447.jpg`




  var flowerImages = [];
  //flowerImages.push(dahlia, dahlia1, blueSalvia, blueSalvia1, sunflower, sunflower1, hibiscus, hibiscus1, ranunculus, ranunculus1)
  flowerImages.push(dahlia, dahlia1, blueSalvia, blueSalvia1, sunflower, sunflower1, hibiscus, hibiscus1, ranunculus, ranunculus1, tigerlily, tigerlily1, icelandPoppy, icelandPoppy1, pansy, pansy1, snapdragon, snapdragon1, alysum, alysum1, lobelia, lobelia1, hydrangea, hydrangea1, marigold, marigold1, calibrachoa, calibrachoa1)




  return flowerImages

}
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function PhotoShuffle(imageArray) {

  var newPos, temp

  for (var j = imageArray.length - 1; j >= 0; j--) {
    newPos = Math.floor(Math.random() * j);
    temp = imageArray[j];
    imageArray[j] = imageArray[newPos];
    imageArray[newPos] = temp;



  }
  return imageArray

}
//********************************************************************************************************************************************************
function tilePieceHolder() {


  var tiles = `<div class="item proto01"><img class="img0 mouseover" src="" alt=""> </div>
      <div class="item proto02"><img class="img1 mouseover" src="" alt=""> </div>
      <div class="item proto03"><img class="img2 mouseover" src="" alt=""> </div>
      <div class="item proto04"><img class="img3 mouseover" src="" alt=""> </div>

     <div class="item proto05"><img class="img4 mouseover"src="" alt="" ></div>
      <div class="item proto06"><img class="img5 mouseover"src="" alt=""> </div>
      <div class="item proto07"><img class="img6 mouseover"src="" alt=""> </div>
      <div class="item proto08"><img class="img7 mouseover"src="" alt=""> </div>
      <div class="item proto09"><img class="img8 mouseover"src="" alt=""> </div>
      <div class="item proto10"><img class="img9 mouseover"src="" alt=""></div>
      <div class="item proto11"><img class="img10 mouseover"src="" alt=""></div>
     <div class="item proto12"><img  class="img11 mouseover"src="" alt=""></div>
      <div class="item proto13"><img class="img12 mouseover"src="" alt=""></div>
      <div class="item proto14"><img class="img13 mouseover"src="" alt=""></div>
      <div class="item proto15"><img class="img14 mouseover"src="" alt=""></div>
      <div class="item proto16"><img class="img15 mouseover"src="" alt=""></div>
      <div class="item proto17"><img class="img16 mouseover"src="" alt=""></div>
      <div class="item proto18"><img class="img17 mouseover"src="" alt=""></div>
      <div class="item proto19"><img class="img18 mouseover"src="" alt=""></div>
      <div class="item proto20"><img class="img19 mouseover"src="" alt=""></div>
      <div class="item proto21"><img class="img20 mouseover"src="" alt=""></div>
      <div class="item proto22"><img class="img21 mouseover"src="" alt=""></div>
      <div class="item proto23"><img class="img22 mouseover"src="" alt=""></div>
      <div class="item proto24"><img class="img23 mouseover"src="" alt=""></div>
      <div class="item proto25"><img class="img24 mouseover"src="" alt=""></div>
      <div class="item proto26"><img class="img25 mouseover"src="" alt=""></div>
      <div class="item proto27"><img class="img26 mouseover"src="" alt=""></div>
      <div class="item proto28"><img class="img27 mouseover"src="" alt=""></div>`

  return tiles
}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function tilebacks() {
  var dodgersTiles = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2W0EoAB67owGURamAlbwPwHaHH%26pid%3DApi&f=1";

  var ceramicTiles = "https://i.pinimg.com/originals/b0/78/eb/b078eb5c08a14fc036506a61670e0e00.jpg";
  return ceramicTiles
}
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function addNav() {


    navigation=true;

    var inq = document.body
     inq.insertAdjacentHTML("beforeend", `<nav class="nav">
   <ul>
     <li><a href="Covid19.html" >Health and Wellness</a></li>
     <li><a href="UFO.html" >UFO</a></li>
     <li><a href="Sasquatch.html" >Sasquatch</a></li>
     <li><a href="Useful_Info.html" >Useful Information</a></li>
     <li><a href="GardenCalculations.html">Garden Calculations</a></li>
     <li><a href="index.html">Erichs' Homepage</a></li>

   </ul>
 </nav>`)

}
//********************************************************************************************
function removeNav() {
  navigation=false
  var parent = document.body
  var child = parent.getElementsByClassName("nav")[0]
  parent.removeChild(child)

}
