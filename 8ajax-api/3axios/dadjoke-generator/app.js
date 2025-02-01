const btn = document.querySelector('#btn');
const jokes = document.querySelector('#jokes');

btn.addEventListener('click', async () => {
    const jokeText = await getJokes();
    const newJoke = document.createElement('li');
    newJoke.append(jokeText);
    jokes.append(newJoke);
})

const getJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        };
        let res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    } catch(err) {
        return 'No Jokes Available!';
    }
}