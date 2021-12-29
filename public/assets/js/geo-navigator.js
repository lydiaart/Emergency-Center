
//https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples
// https://w3c.github.io/geolocation-api/#dom-navigator-geolocation
//https://github.com/mdn/content/blob/main/files/en-us/web/api/navigator/geolocation/index.md
// https://www.tutorialrepublic.com/html-tutorial/html5-geolocation.php
const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');
mapLink.href = '';
mapLink.textContent = '';

function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`position ${JSON.stringify(position.coords.latitude)}`)

  status.textContent = '';
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  status.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  localStorage.setItem("latitude", latitude );
  localStorage.setItem("longitude", longitude );
}

function error() {
  status.textContent = 'Unable to retrieve your location';
}

function getCacheGeoCoords() {
  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

  setTimeout(getCacheGeoCoords, 3600000);
}
getCacheGeoCoords();