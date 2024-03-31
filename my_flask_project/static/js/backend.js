// URL de la base de datos Firebase
const databaseURL = 'https://the-show-ticket-default-rtdb.firebaseio.com/';

// Función para hacer una solicitud GET a la base de datos
function getDataFromFirebase(path) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        } else {
          reject('Error al obtener datos de Firebase');
        }
      }
    };
    xhr.open('GET', `${databaseURL}${path}.json`, true);
    xhr.send();
  });
}

// Función para actualizar los datos en Firebase
function updateDataInFirebase(path, newData) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 204) {
          resolve(xhr.responseText);
        } else {
          reject('Error al actualizar datos en Firebase');
        }
      }
    };
    xhr.open('PUT', `${databaseURL}${path}.json`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(newData));
  });
}

// Función para mostrar los datos del evento en la página
function mostrarDatosDeEvento(data) {
  const eventoName = data['Name-Evento'];
  const fechas = data['Fecha']; 
  const infoDeFecha = data['InfoDeFecha']; 

  const eventoNameElement = document.getElementById("Name-Evento");
  const fechasElement = document.getElementById("Fecha");
  const infoDeFechaElement = document.getElementById("InfoDeFecha");
  
  eventoNameElement.textContent = eventoName || '';
  fechasElement.textContent = fechas || ''; 
  infoDeFechaElement.textContent = infoDeFecha || ''; 
}

// Uso de la función para obtener datos de la base de datos
getDataFromFirebase('')
  .then(data => {
    mostrarDatosDeEvento(data);
  })
  .catch(error => {
    console.error(error);
  });
