let oneClick = document.getElementById("oneClick");

oneClick.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1") // promise of response
    .then((res) => res.json()) // res.json() is roughly equivalent to: res.text().then(text => JSON.parse(text)) -- Which means whatever it'll pass to data is an object.
    .then((data) => {
        let x = document.createElement('div');
        x.innerHTML = `<br><code>${JSON.stringify(data)}</code><br>`;
        document.querySelector("body").appendChild(x);
        console.log(data);
    });
});

let loadPost = document.getElementById("loadPost");

loadPost.addEventListener("click", () => {
  let url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url).then(response => response.json()).then(jsonData => {
    jsonData.forEach((data) => {
      //create HTML element
      let x = document.createElement("div");
      x.innerHTML = `<br><code>${data.title}</code><br>`;
      document.querySelector("body").appendChild(x);
      console.log(data);
    }) 
  })
});