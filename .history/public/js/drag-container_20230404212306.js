window.onload = function() {
  var container = document.getElementById("container");
  var calendar = document.getElementById("container-calendar");
  var respuestaBot = document.getElementById("container-respuesta-bot");

  // Obtenemos la posición guardada del contenedor desde el almacenamiento local
  var savedPosition = JSON.parse(localStorage.getItem("containerPosition"));
  if (savedPosition) {
    container.style.left = savedPosition.container.left;
    container.style.top = savedPosition.container.top;
    calendar.style.left = savedPosition.calendar.left;
    calendar.style.top = savedPosition.calendar.top;
  }

  var containerOffsetX, containerOffsetY, calendarOffsetX, calendarOffsetY;

  container.addEventListener("mousedown", function(e) {
    containerOffsetX = e.clientX - container.offsetLeft;
    containerOffsetY = e.clientY - container.offsetTop;

    document.addEventListener("mousemove", containerMousemoveHandler);
  });

  calendar.addEventListener("mousedown", function(e) {
    calendarOffsetX = e.clientX - calendar.offsetLeft;
    calendarOffsetY = e.clientY - calendar.offsetTop;

    document.addEventListener("mousemove", calendarMousemoveHandler);
  });

  document.addEventListener("mouseup", function(e) {
    document.removeEventListener("mousemove", containerMousemoveHandler);
    document.removeEventListener("mousemove", calendarMousemoveHandler);

    // Guardamos la posición actual del contenedor en el almacenamiento local
    var currentPosition = {
      container: {
        left: container.style.left,
        top: container.style.top
      },
      calendar: {
        left: calendar.style.left,
        top: calendar.style.top
      }
    };
    localStorage.setItem("containerPosition", JSON.stringify(currentPosition));
  });

  function containerMousemoveHandler(e) {
    var x = e.clientX - containerOffsetX;
    var y = e.clientY - containerOffsetY;

    container.style.left = x + "px";
    container.style.top = y + "px";
  }

  function calendarMousemoveHandler(e) {
    var x = e.clientX - calendarOffsetX;
    var y = e.clientY - calendarOffsetY;

    calendar.style.left = x + "px";
    calendar.style.top = y + "px";
  }
};
