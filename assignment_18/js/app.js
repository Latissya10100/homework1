window.onload = init;

function init() {
  document.getElementById('btn1').onclick = changeHeading2;
  document.getElementById('btn2').onclick = changeParagraph;
}

function changeHeading2() {
    var elms = document.getElementsByTagName("h2");
  for (var i = 0; i <elms.length; i++) {
    elms[i].innerHTML = "Javascript Ninjas!";
  }
}

function changeParagraph() {
  var elms = document.getElementsByClassName("par");
  for (var i = 0; i < elms.length; i++) {
    elms[i].innerHTML ="Javascript Ninjas on fleek!";
  }
}
