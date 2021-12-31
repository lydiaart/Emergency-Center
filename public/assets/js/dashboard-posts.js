async function updateGeoCoords(position) {
    const latitude  =  position.coords.latitude;
    const longitude =  position.coords.longitude;
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

async function submitPost(event) {
    event.preventDefault();
    //console.log(" \n\n\n\n\n\n \t\t\t\t\t ******* in dashboard-posts.js:submitPosts")
    const title = document.querySelector('#report-title').value.trim();
    const contents = document.querySelector('#report-desc').value.trim();
    const severity = document.querySelector('#severity').value
    //console.log(`\n\n\n\n\n\n \t\t\t\t\t ********* in dashboard-posts.js:submitPosts after query selector, severity ${JSON.stringify(severity)}`)

   
    //await navigator.geolocation.getCurrentPosition(updateGeoCoords, error);
    const latitude = localStorage.getItem("latitude");
    const longitude = localStorage.getItem("longitude")
    console.log("in dashboard-posts.js:submitPosts before if statement")
    //const user_id = 3;
    if (title && contents && latitude && longitude)  {
        console.log("in dashboard-posts.js:submitPosts entered if statement")
      const response = await fetch('/dashboard/posts', {
        method: 'post',
        body: JSON.stringify({
          title,
          contents,
          latitude,
          longitude,
          severity 
          //user_id
        }),
        headers: { 'Content-Type': 'application/json' }
      });

  
      // check the response status
      if (response.ok) {
        console.log('success, post submitted');
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }

      //--------------

    }

   

  }
  document.querySelector('.post-form').addEventListener('submit', submitPost);