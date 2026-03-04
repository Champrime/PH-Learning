// JSON structural model
    //

// let api = fetch('https://jsonplaceholder.typicode.com/posts/1');
// console.log(api); // Promise { <pending> }

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => console.log(data))

//   .then((response) => response.json())
//   .then((json) => console.log(json));

//1. fetch() gives a promise
//2. we can use .then() to get the response of the promise
//3. we can use .json() to convert the response to json format
//4. we can use another .then() to get the json data and log it to the console