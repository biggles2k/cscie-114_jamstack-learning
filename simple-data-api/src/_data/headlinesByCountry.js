require('dotenv').config();
const axios = require('axios').default; 
const countries = require("./countries.json");

async function getNewsByCountry(country) {
    try {
        console.log("https://newsapi.org/v2/top-headlines?pageSize=10&category=science&country=" + country + "&apiKey=" + process.env.NEWS_API_KEY);
        const headlines = 
            await axios.get("https://newsapi.org/v2/top-headlines?pageSize=10&category=science&country=" + country + "&apiKey=" + process.env.NEWS_API_KEY);
        return {
            "country": country,
            "articles": headlines.data.articles
        };

    } catch (error) {
        console.error(error);

    }

}

module.exports = async function() {
 
    // Fetch the top 10 science headlines for each country in the countries array
    var bunchOfPromises = countries.map(getNewsByCountry);
    return Promise.all(bunchOfPromises).then( newsObjects => {
        return [].concat.apply([], newsObjects);
    });
};