const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $div = d.getElementById(id);
  let conf = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(position) {
    let coords = position.coords;
    $div.innerHTML = `<p>Tu posición actual es:</p> <ul>
    <li>Latitud: <b>${coords.latitude}</b></li>
    <li>Longitud: <b>${coords.longitude}</b></li>
    <li>Precisión: <b>${coords.accuracy} metros</b></li>
    </ul>
    <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>`;
  }

  function error(err) {
    $div.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
    console.log(`¡Sucedió el siguiente error!: ${err}`);
  }

  n.geolocation.getCurrentPosition(success, error, conf);
}
