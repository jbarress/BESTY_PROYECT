// window.addEventListener('load', ()=>{
  fetch('/getShows')
  .then(response => response.json())
  .then(data => {
      // Utiliza los valores de configuración para actualizar la página
      var calendar = document.getElementById('container-calendar');
      var contactos = document.getElementById('container-contactos');
      var transacciones = document.getElementById('container-transacciones');
      console.log(data);
      if(data.showCalendar){
          console.log('nene')
          calendar.style.display = 'block';
      }else{
          calendar.style.display = 'none';
      }
      if(data.showTransacciones){
          transacciones.style.display = 'block';
      }else{
          transacciones.style.display = 'none';
      }
      if(data.showContacts){
          contactos.style.display = 'block';
      }else{
          contactos.style.display = 'none';
      }
  })
  .catch(error => console.error(error));
// })
