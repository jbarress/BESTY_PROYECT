var container = document.getElementById("container");
var calendar = document.getElementById('container-calendar')



// Obtenemos la posición guardada del contenedor desde el almacenamiento local
var savedPositionChat = JSON.parse(localStorage.getItem("containerPosition"));
var savedPositionCalendar = JSON.parse(localStorage.getItem("containerPosition"));

if (savedPositionChat) {
  container.style.left = savedPositionChat.left;
  container.style.top = savedPositionChat.top;
}

var offsetX, offsetY;

container.addEventListener("mousedown", function(e) {
  offsetX = e.clientX - container.offsetLeft;
  offsetY = e.clientY - container.offsetTop;

  document.addEventListener("mousemove", mousemoveHandler);
});

document.addEventListener("mouseup", function(e) {
  document.removeEventListener("mousemove", mousemoveHandler);

  // Guardamos la posición actual del contenedor en el almacenamiento local
  var currentPosition = {
    left: container.style.left,
    top: container.style.top
  };
  localStorage.setItem("containerPosition", JSON.stringify(currentPosition));
});

function mousemoveHandler(e) {
  var x = e.clientX - offsetX;
  var y = e.clientY - offsetY;

  container.style.left = x + "px";
  container.style.top = y + "px";
}
