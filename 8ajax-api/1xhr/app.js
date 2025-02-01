// See results in console (f12)

/* Example 1 */
const req = new XMLHttpRequest();
let data;

req.onload = function() {
    data = JSON.parse(this.responseText);
    console.log(data);  //this return full json
    console.log(data.joke);  //this return .joke value
}
req.onerror = function() {
    console.log(this);
}
//to see error, change the link to https://icanhazdadjoke999.com
req.open('GET', 'https://icanhazdadjoke.com', true);
req.setRequestHeader('Accept', 'application/json');
req.send();



/* Example 2 */
const req2 = new XMLHttpRequest();
let data2;

req2.onload = function() {
    data2 = JSON.parse(this.responseText);
    console.log(data2);  //this return full json
    console.log(data2.name);  //this return .name value
}
req2.onerror = function() {
    console.log('Error', this);
}

req2.open('GET', 'https://swapi.dev/api/people/1', true);
req2.setRequestHeader('Accept', 'application/json');
req2.send();