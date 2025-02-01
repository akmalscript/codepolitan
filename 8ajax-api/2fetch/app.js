/*
Sometimes
You'll see the output of example 2 first THEN the output of example 1.

NOTE: SEE README.md
*/
 
/* Example 1 */
fetch('https://swapi.dev/api/people/1')
    .then((res) => {
        if(!res.ok) {
            throw Error('Could not fetch the data for that resource');
        }
        return res.json();
    })
    .then((data) => {
        console.log('=== EXAMPLE 1 ===');
        console.log(data);
        console.log(data.name);
        console.log(data.hair_color);
    })
    .catch((error) => {
        console.log('ERROR EXAMPLE1', error);
        //to see error, change endpoint to https://swapi.dev/api/people/19999
    });

/* Example 1 short syntax */
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(data => console.log(data.name))
    .catch(error => console.log(error));

/* Example 2 */
fetch('https://icanhazdadjoke.com', {
    //the link above return html by default, to get json, we need to set header
    headers: {
        'Accept': 'application/json'
        }
    })
    .then(res => {
        if(!res.ok) {
            throw Error('Could not fetch the data for that resource');
        }
        return res.json();
    })
    .then(data => {
        console.log('=== EXAMPLE 2 ===');
        console.log(data);
        console.log(data.joke);
    })
    .catch(error => {
        console.log('ERROR EXAMPLE 2:', error.message);
    });

/* Example 3 - async-await fetch */
const loadPeople = async () => {
    try {
        let res = await fetch('https://swapi.dev/api/people/1');
        let data = await res.json();
        console.log(data);
        console.log(data.name);

        let res2 = await fetch('https://swapi.dev/api/people/5');
        let data2 = await res2.json();
        console.log(data2);
        console.log(data2.name);
    } catch(err) {
        console.log(err);
    }
}
// loadPeople();
const loadJoke = async () => {
    try {
        let res = await fetch('https://icanhazdadjoke.com', {
            headers: {
                'Accept' : 'application/json'
            }
        });
        let data = await res.json();
        console.log(data);
        console.log(data.joke);
    } catch(err) {
        console.log(err);
    }
}
// loadJoke();
const loadAll = async () => {
    await loadPeople();
    await loadJoke();
}
loadAll();
/*
// 3 ways to make loadJoke await loadPeople (sequence output)
// 1) Additional function
const loadAll = async () => {
    await loadPeople();
    await loadJoke();
}
// loadAll();
// 2) use .then()
loadPeople().then(() => {
    return loadJoke();
});
// 3) use IIFE(immediately invoced async function)
(async () => {
    await loadPeople();
    await loadJoke();
})();
*/

/* Example 4 - Promise.all() to make all requests run simultaneously */
const loadPromiseAll = async () => {
    try {
        const urls = [
            'https://swapi.dev/api/people/1',
            'https://swapi.dev/api/people/5'
        ];

        let responses = await Promise.all(urls.map(url => fetch(url)));
        let data = await Promise.all(responses.map(res => res.json()));

        // console.log(data);  //array of object
        data.forEach(people => {
            console.log(people.name);
        })

    } catch(err) {
        console.log(err);
    }
}
loadPromiseAll();