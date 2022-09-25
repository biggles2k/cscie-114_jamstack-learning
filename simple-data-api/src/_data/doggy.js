module.exports = async function() {
 
    // Fetch a random dog image URL from the Dog API
    try {

        const dogData = 
            await fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })

        return dogData;

    } catch (error) {
        console.log(error);
    }
};