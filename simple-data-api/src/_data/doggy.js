const axios = require('axios').default; 

module.exports = async function() {
 
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        return response.data;
      
      } catch (error) {
        console.error(error);

      }

};