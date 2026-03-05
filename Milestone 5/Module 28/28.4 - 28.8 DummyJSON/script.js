let oneClick = document.getElementById("oneClick");

oneClick.addEventListener("click", () => {
  fetch("https://dummyjson.com/products/1") // promise of response
    .then((res) => res.json()) // res.json() is roughly equivalent to: res.text().then(text => JSON.parse(text)) -- Which means whatever it'll pass to data is an object.
    .then((data) => {
        let x = document.createElement('div');
        x.innerHTML = `<br><code>${JSON.stringify(data)}</code><br>`;
        document.querySelector("body").appendChild(x);
        console.log(data);
    });
});

let loadPost = document.getElementById("loadPost");
let arr = []
for (let i = 0; i <= 100; i++){
  arr[i] = `https://dummyjson.com/products/${i}`;
}

console.log(arr);

//2
loadPost.addEventListener("click", () => {
  let z = document.createElement("div > ol");
  document.querySelector("body").appendChild(z);
  for (let i = 0; i < arr.length; i++){
    let url = arr[i];
    fetch(url).then(response => response.json()).then(jsonData => {
      jsonData.forEach((Data) => { 
          let x = document.createElement("li");
          x.innerHTML = `li<br><code>${Data}</code><br>`;
          document.querySelector("ol").appendChild(x);
      })
    })
  }
});

// 2
// loadPost.addEventListener("click", () => {
//   let url = "https://dummyjson.com/products";
//   fetch(url).then(response => response.json()).then(jsonData => {
//     products(jsonData)
//     jsonData.forEach((Data) => { 
//         let x = document.createElement("div");
//         x.innerHTML = `<br><code>${Data}</code><br>`;
//         document.querySelector("body").appendChild(x);
//     })
//   })
// });

// let products = (json) => {
//   json.forEach((Data) => { 
//     let x = document.createElement("div");
//     x.innerHTML = `<br><code>${Data}</code><br>`;
//     document.querySelector("body").appendChild(x);
//   })
// }