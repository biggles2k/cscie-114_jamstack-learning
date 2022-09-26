require('dotenv').config();

module.exports = async function() {
 
    // Fetch the top 10 headlines about "Star Wars" from newsapi.org
    try {

        const starwarsHeadlines = 
            await fetch("https://newsapi.org/v2/everything?q=%22star%20wars%22&pageSize=10&sortBy=publishedAt&language=en&apiKey=" + process.env.NEWS_API_KEY)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })

        return starwarsHeadlines;

    } catch (error) {
        console.error(error);
    }
};