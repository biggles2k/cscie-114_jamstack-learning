require('dotenv').config();
const axios = require('axios').default; 

module.exports = async function() {
 
    // Fetch the top 10 most recent articles about "Star Wars" from newsapi.org
    try {
        const starwarsHeadlines = 
            await axios.get("https://newsapi.org/v2/everything?q=%22star%20wars%22&pageSize=10&sortBy=publishedAt&language=en&apiKey=" + process.env.NEWS_API_KEY);
        return starwarsHeadlines.data;

    } catch (error) {
        console.error(error);

    }
};