// Select the button and user input field from the DOM
const btn = document.querySelector('#btn');
const userInput = document.querySelector('#userInput');

// Add a click event listener to the button
btn.addEventListener('click', async (e) => {
    e.preventDefault();  // Prevents the default form submission behavior

    // Remove any existing images from previous searches
    document.querySelectorAll('img').forEach(img => img.remove());

    // Get the search keyword from user input
    const keyword = userInput.value;
    const config = {
        params: { q: keyword }  // Set the query parameter for the API request
    }

    try {
        // Fetch search results from the TVMaze API
        const res = await axios.get('http://api.tvmaze.com/search/shows', config);
        // Process and display images from the response data
        getImages(res.data);
    } catch(err) {
        document.body.append(err.message);
    }
    
    // Clear the input field after search
    userInput.value = '';
})

// Function to extract and display images from API response
function getImages(shows) {
    for (let result of shows) {
        if (result.show.image) { // Ensure the show has an image before displaying
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}