const body = document.body;
body.innerHTML += "<h1>Stephanie Shipley</h1>";
document.getElementsByTagName("h1")[0].onclick = function() {
  this.style.background = `yellow`;
};
