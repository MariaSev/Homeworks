var textToFind="";
var lastTextFinded="";
function searchTextOnPage(inputId) {
  
var obj = window.document.getElementById(inputId);
   
 
if(lastTextFinded==textToFind)
{
  document.getElementById("out").innerHTML = document.getElementById("out").innerHTML.replace(eval("/<b>"+lastTextFinded+"<.b>/gi"),lastTextFinded)
}
  
if (obj) {
  textToFind = obj.value;
} else {
  alert("Unable to find input with id = " + inputId);
  document.getElementById("res_search").innerHTML = "Unable to find input with id = " + inputId;
  return;
}
  
if (textToFind == "") {
  document.getElementById("res_search").innerHTML = "Please, input text";
  return;
}
document.getElementById("res_search").innerHTML = "Found";
document.getElementById("out").innerHTML = document.getElementById("out").innerHTML.replace(eval("/"+textToFind+"/g"),"<b>"+textToFind+"</b>");
 
lastTextFinded=textToFind;

function Translate() {
  document.getElementById('out').innerHTML = document.getElementById("input").value;
}
