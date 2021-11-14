var x = document.getElementsByClassName("sound");
console.log(x.length)

x[0].addEventListener("mouseover", myFunction);
x[1].addEventListener("mouseover", myFunction);
x[2].addEventListener("mouseover", myFunction);
x[3].addEventListener("mouseover", myFunction);
x[4].addEventListener("mouseover", myFunction);
x[5].addEventListener("mouseover", myFunction);
x[6].addEventListener("mouseover", myFunction);
x[7].addEventListener("mouseover", myFunction);
x[8].addEventListener("mouseover", myFunction);
x[9].addEventListener("mouseover", myFunction);
x[10].addEventListener("mouseover", myFunction);
x[11].addEventListener("mouseover", myFunction);
x[12].addEventListener("mouseover", myFunction);
x[13].addEventListener("mouseover", myFunction);
x[14].addEventListener("mouseover", myFunction);
x[15].addEventListener("mouseover", myFunction);

function myFunction(ev) {
  var file = document.getElementById('tick')
  file.play();

}

function calculateSQFT() {
  var width = document.getElementById("w1").value;
  var length = document.getElementById("l1").value;
  var result = width * length;
  if (width && length) {
    document.getElementById('result1').innerHTML = `${result} SQ.FT.`
  } else {
    alert("Every field must have an input value!")
  }
}

function calculateCUFT() {
  var width = document.getElementById("w2").value;
  var length = document.getElementById("l2").value;
  var height = document.getElementById("h2").value;
  if (width && length && height) {
    var result = width * length * height;
    document.getElementById('result2').innerHTML = `${result} CU.FT.`;
  } else {
    alert("Every field must have an input value!")
  }
}

function calcSodAmount() {
  var width = document.getElementById("wsod").value;
  var length = document.getElementById("lsod").value;
  var result = width * length;
  var pieces = Math.ceil(result / 8);


  document.getElementById('resultsod1').innerHTML = `${pieces} Sod Rolls`;
  alert(     `If you want to get the estimated cost of the sod with tax, do not push the reset button!
              Go down to the next calculator on a smartphone or tablet, or  go the right on a PC, where the
              sod quantity will be prefilled. Then add the extra fields.`)
  document.getElementById('piecesod').value = pieces;
}

function calcSodPrice() {
  var piecesod = document.getElementById('piecesod').value;
  var pricesod;
  var deliveryMethod = document.getElementById('pickup').value;


  if (deliveryMethod === "one") {
    if (piecesod < 60) {
       alert(     `The sod farm wont deliver sod below 60 pieces. Store pick-up or store delivery is an option.
                   To continue, pres the SUBMIT BUTTON!!`)

       document.getElementById('pricesod').value = "";
       document.getElementById('pickup').value = "two";
       document.getElementById('tax').value = "";
       document.getElementById('resultsod2').innerHTML = "";
    } else if (piecesod < 120) {
      pricesod = 6.58;
    calculateFinal(pricesod,piecesod)
      alert(`Sod farm delivery is free!!`)
    } else if (piecesod < 300) {
      pricesod = 4.94;
      calculateFinal(pricesod,piecesod)
        alert(`Sod farm delivery is free!!`)
    } else {
      pricesod = 3.29;
      calculateFinal(pricesod,piecesod)
        alert(`Sod farm delivery is free!!`)
    }
  } else if (deliveryMethod === "two") {
    if (piecesod < 60) {
      pricesod = 6.58;
      calculateFinal(pricesod,piecesod)
    } else {
      pricesod = 5.92;
      calculateFinal(pricesod,piecesod)
    }
    alert(`There is an extra charge for IN STORE DELIVERY!!. Go to the special order desk or pro desk to get
           a delivery quote`)
  }

}
function calculateFinal(pricesod,piecesod){
var subtotal = Number((pricesod * piecesod).toFixed(2));
var tax = Number((subtotal * .0775).toFixed(2));
var total = (subtotal + (tax));
document.getElementById('pricesod').value = pricesod;
document.getElementById('tax').value = `$ ${tax}`;
document.getElementById('resultsod2').innerHTML = `$ ${total.toFixed(2)}`
}
/*function toFixed(number, decimals) {
  var x = Math.pow(10, Number(decimals) + 1);
  return (Number(number) + (1 / x)).toFixed(decimals)
}*/


function reset() {
  document.getElementById("w1").value = "";
  document.getElementById("l1").value = "";
  document.getElementById("w2").value = "";
  document.getElementById("l2").value = "";
  document.getElementById("h2").value = "";
  document.getElementById("result1").innerHTML = "";
  document.getElementById("result2").innerHTML = "";
  document.getElementById("wsod").value = "";
  document.getElementById("lsod").value = "";
  document.getElementById('resultsod1').innerHTML = "";
  document.getElementById('piecesod').value = "";
  document.getElementById('pickup').value = "one";
  document.getElementById('pricesod').value = "";
  document.getElementById('tax').value = "";
  document.getElementById('resultsod2').innerHTML = "";


}
