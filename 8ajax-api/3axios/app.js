/*
UNCOMMENT THIS TO SEE EXAMPLE 1 & 2
// Example 1 - GET
axios.get('https://swapi.dev/api/people/1')
    .then(response => {
        // console.log(response);  //to see all available property
        console.log(response.data);
        console.log(response.data.name);
    })
    .catch(err => {
        // console.log(err);  //to see all aavailable property
        console.log(err.message);
    });
// Example 2 - POST
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'Learn Axios',
    body: 'Axios makes HTTP request easy',
    userId: 1
})
    .then(res => {
        console.log(res.data);
        console.log('Data has been sent');
    })
    .catch(err => {
        console.log(err.message);
    });
*/

// Example 3 - async await
const getPeople = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
        console.log(res.data.name);
    } catch(err) {
        console.log(err.message);
    }
};
// getPeople(1);
// getPeople(15);

// Example 4 - with Headers
const getJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }

        let res = await axios.get('https://icanhazdadjoke.com/', config);
        console.log(res.data.joke);
    } catch(err) {
        console.log(err.message);
    }
};
getJokes();