var result=document.styleSheets
console.dir(result[0].cssRules[2].cssText)
console.dir(result)

var test=document.getElementById("test")
test.style.width="50px";
test.style.height="50px";
test.style.backgroundColor="green";
test.textContent="Press Me"
test.addEventListener("click", () => {

var request= fetch("https://erichs-real-server.onrender.com/test")
.then(data => data.text())
.then(text=> console.log(text))
.catch(console.error)

});