window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM fully loaded and parsed: ' + e.type );

    // Fetch a random dog image URL from the Dog API
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        const myImg = document.querySelector("main p img");
        myImg.src = data.message;
    });
});