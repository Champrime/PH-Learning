let oneClick = document.getElementById("oneClick");

oneClick.addEventListener("click", () => {
  fetch("https://dummyjson.com/products") // promise of response
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
  let url = "https://dummyjson.com/products";
  fetch(url).then(response => response.json()).then(jsonData => {
    let x = document.createElement("div");
    x.innerHTML = `<br><code>${JSON.stringify(jsonData)}</code><br>`;
    document.querySelector("body").appendChild(x);
    console.log(jsonData);
  })
});