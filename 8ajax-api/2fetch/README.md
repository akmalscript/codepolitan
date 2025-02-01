# Fetch API Examples 🚀

This README provides examples of how to use the Fetch API to retrieve data from external APIs using both **Promises (`.then()`)** and **Async/Await**.

---

## 📌 Example 1
### **Basic Fetch Example with Error Handling**
```javascript
fetch('https://swapi.dev/api/people/1')
    .then((res) => {
        if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
        }
        return res.json();
    })
    .then((data) => {
        console.log('=== EXAMPLE 1 ===');
        console.log(data);
        console.log(data.name);       // Output: Luke Skywalker
        console.log(data.hair_color); // Output: Blond
    })
    .catch((error) => {
        console.log('ERROR EXAMPLE 1:', error);
        // To see an error, change the URL to https://swapi.dev/api/people/19999
    });
```

### Short Syntax Version
```javascript
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(data => console.log(data.name))
    .catch(error => console.log(error));
```

### Basic Fetch Example with Headers
This example fetches a random joke from icanhazdadjoke.
```javascript
fetch('https://icanhazdadjoke.com', {
    //the link above return html by default, to get json, we need to set header
    headers: {
        'Accept': 'application/json'
    }
})
    .then(res => {
        if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
        }
        return res.json();
    })
    .then(data => {
        console.log('=== EXAMPLE 2 ===');
        console.log(data);
        console.log(data.joke); // Outputs a random joke
    })
    .catch(error => {
        console.log('ERROR EXAMPLE 2:', error.message);
    });
```

## 📌 Example 2 - Using Async/Await for Fetch
This example demonstrates how to use async and await for cleaner, more readable asynchronous code.

Fetching Multiple People from SWAPI
```javascript
const loadPeople = async () => {
    try {
        let res = await fetch('https://swapi.dev/api/people/1');
        let data = await res.json();
        console.log(data);
        console.log(data.name); // Output: Luke Skywalker

        let res2 = await fetch('https://swapi.dev/api/people/5');
        let data2 = await res2.json();
        console.log(data2);
        console.log(data2.name); // Output: Leia Organa
    } catch (err) {
        console.log(err);
    }
};
```

Fetching a Random Joke with Async/Await
```javascript
const loadJoke = async () => {
    try {
        let res = await fetch('https://icanhazdadjoke.com', {
            headers: {
                'Accept': 'application/json'
            }
        });
        let data = await res.json();
        console.log(data);
        console.log(data.joke); // Outputs a random joke
    } catch (err) {
        console.log(err);
    }
};
```

## 📌 Ensuring Sequential Execution
### Ensures loadPeople() completes before loadJoke() executed
Method 1: Using an Additional Function
```javascript
const loadAll = async () => {
    await loadPeople();
    await loadJoke();
};
loadAll();
```
Method 2: Using .then()
```javascript
loadPeople().then(() => {
    return loadJoke();
});
```
Method 3: Using an IIFE (Immediately Invoked Function Expression)
```javascript
(async () => {
    await loadPeople();
    await loadJoke();
})();
```

## 📌 Example 4 - Promise.all()
Promise.all() to make all requests run simultaneously
```javascript
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
```