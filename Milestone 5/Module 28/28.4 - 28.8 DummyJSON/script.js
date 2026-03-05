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

for (let i = 1; i <= 45; i++){
  // setInterval (() => {
    arr[i-1] = `https://dummyjson.com/products/${i}`;
    console.log(arr[i-1]);
  // }, 500);
}

//2
loadPost.addEventListener("click", () => {
  let wrapper = document.createElement("div"), container = document.createElement("ol");
  wrapper.className = "api-json"; container.className = "json-list";
  document.querySelector("body").appendChild(wrapper.appendChild(container));
  
  displayLoop();
  });

let displayLoop = () => {
  wrapper.innerHTML = "";
  for (let i = 0; i < arr.length; i++){
    let url = arr[i];
    fetch(url).then(response => response.json()).then(jsonData => {
      let arrObj = [];
      if (typeof jsonData === "object" || typeof jsonData === "string") {arrObj.push(jsonData); console.dir(`${jsonData} is in`)};
      console.log(arrObj);
      arrObj.forEach((data) => {
          let x = document.createElement("li");
          x.innerHTML = `
            <detail>
              <summary>Product ${data.id}: ${data.title}</summary>
            </detail>
            <br>`;
          container.appendChild(x);
      })
    })
  }
}

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