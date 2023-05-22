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

  document.addEventListener("mousemove", mousemoveHandlerChat);
});
calendar.addEventListener("mousedown", function(e) {
  calOffsetX = e.clientX - calendar.offsetLeft;
  calOffsetY = e.clientY - calendar.offsetTop;

  document.addEventListener("mousemove", mousemoveHandlerCal);
});


document.addEventListener("mouseup", function(e) {
  document.removeEventListener("mousemove", mousemoveHandlerChat);

  // Guardamos la posición actual del contenedor en el almacenamiento local
  var currentPositionChat = {
    left: container.style.left,
    top: container.style.top
  };
  localStorage.setItem("containerChatPosition", JSON.stringify(currentPositionChat));
});
document.addEventListener("mouseup", function(e) {
  document.removeEventListener("mousemove", mousemoveHandlerCal);

  // Guardamos la posición actual del contenedor en el almacenamiento local
  var currentPositionCal = {
    left: calendar.style.left,
    top: calendar.style.top
  };
  localStorage.setItem("containerCalPosition", JSON.stringify(currentPositionCal));
});

function mousemoveHandlerChat(e) {
  var x = e.clientX - chatOffsetX;
  var y = e.clientY - chatOffsetY;

  container.style.left = x + "px";
  container.style.top = y + "px";
}
function mousemoveHandlerCal(e) {
  var x = e.clientX - calOffsetX;
  var y = e.clientY - calOffsetY;

  container.style.left = x + "px";
  container.style.top = y + "px";
}