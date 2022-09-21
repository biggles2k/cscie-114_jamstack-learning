const starWarsMovieTitles = [
    "The Phantom Menace",
    "Attack of the Clones",
    "Revenge of the Sith",
    "A New Hope",
    "The Empire Strikes Back",
    "Return of the Jedi",
    "The Force Awakens",
    "The Last Jedi",
    "The Rise of Skywalker",
    "Rogue One: A Star Wars Story"
];

window.addEventListener("DOMContentLoaded", () => {
    var movieTitle = starWarsMovieTitles[Math.floor(Math.random() * starWarsMovieTitles.length)];
    document.querySelector("p").append(movieTitle);
});

