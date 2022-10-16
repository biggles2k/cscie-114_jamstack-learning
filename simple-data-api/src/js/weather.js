const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
function success(pos) {
    const url = `/.netlify/functions/weatherapi?lat=${crd.latitude}&lon=${crd.longitude}&units=metric`

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    fetch(url)
    .then( (response) => {
        return response.json();

    })
    .then( (data) => {
        document.querySelector('#city').textContent = data.name;
        document.querySelector('#temp').textContent = data.main.temp;
        document.querySelector('#main').textContent = data.weather[0].main;
        document.querySelector('#desc').textContent = data.weather[0].description;

        console.log('data', data);

    });

}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
  

document.addEventListener("DOMContentLoaded", function() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }
});