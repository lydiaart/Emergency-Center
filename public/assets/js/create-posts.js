async function updateGeoCoords(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  status.textContent = "";
  //mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  //mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  status.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  localStorage.setItem("latitude", latitude);
  localStorage.setItem("longitude", longitude);
}

function error() {
  status.textContent = "Unable to retrieve your location";
}

async function submitPost(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const contents = document.querySelector("#contents").value.trim();
  //const severity = document.querySelector('#severity').value

  // make a function call to update the lat and long
  await navigator.geolocation.getCurrentPosition(updateGeoCoords, error);
  const latitude = localStorage.getItem("latitude");
  const longitude = localStorage.getItem("longitude");

  //const user_id = 3;
  if (title && contents && latitude && longitude) {
    const response = await fetch("/create-post/", {
      method: "post",
      body: JSON.stringify({
        title,
        contents,
        latitude,
        longitude,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // check the response status
    if (response.ok) {
      console.log("success, post submitted");
      document.location.replace("/view-posts");
    } else {
      alert(response.statusText);
    }

    //--------------
  }
}

function initTestGeoCoords() {
  if (!navigator.geolocation) {
    window.alert("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition(updateGeoCoords, error);
  }
  // every hour update the cached geor cords
  //setTimeout(getCacheGeoCoords, 3600000);
}
initTestGeoCoords();

document.querySelector(".post-form").addEventListener("submit", submitPost);