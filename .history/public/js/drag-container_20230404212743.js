var container = document.getElementById("container");
var calendar = document.getElementById('container-calendar')



// Obtenemos la posición guardada del contenedor desde el almacenamiento local
var savedPositionChat = JSON.parse(localStorage.getItem("containerPositionChat"));
var savedPositionCalendar = JSON.parse(localStorage.getItem("containerPositionCalendar"));

if (savedPositionChat) {
  container.style.left = savedPositionChat.left;
  container.style.top = savedPositionChat.top;
}
if (savedPositionCalendar) {
  calendar.style.left = savedPositionCalendar.left;
  calendar.style.top = savedPositionCalendar.top;
}

var chatOffsetX, chatOffsetY, calOffsetX, calOffsetY;

container.addEventListener("mousedown", function(e) {
  chatOffsetX = e.clientX - container.offsetLeft;
  chatOffsetY = e.clientY - container.offsetTop;

  document.addEventListener("mousemove", mousemoveHandler);
});
calendar.addEventListener("mousedown", function(e) {
  chatOffsetX = e.clientX - container.offsetLeft;
  chatOffsetY = e.clientY - container.offsetTop;

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
  var x = e.clientX - chatOffsetX;
  var y = e.clientY - chatOffsetY;

  container.style.left = x + "px";
  container.style.top = y + "px";
}