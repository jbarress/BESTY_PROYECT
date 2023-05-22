var container = document.getElementById("container");
var calendar = document.getElementById('calendar')

var respuestaBot = document.getElementById("container-respuesta-bot");

// Obtenemos la posición guardada del contenedor desde el almacenamiento local
var savedPosition = JSON.parse(localStorage.getItem("containerPosition"));
if (savedPosition) {
  container.style.left = savedPosition.left;
  container.style.top = savedPosition.top;
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

var savedPositionC = JSON.parse(localStorage.getItem("containerPositionC"));
if (savedPositionC) {
  calendar.style.left = savedPositionC.left;
  calendar.style.top = savedPositionC.top;
}

var offsetXC, offsetYC;

container.addEventListener("mousedown", function(e) {
  offsetXC = e.clientX - calendar.offsetLeft;
  offsetYC = e.clientY - calendar.offsetTop;

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