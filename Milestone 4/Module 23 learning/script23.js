let makeYellowV = document.querySelector(".make-yellow");
console.log(makeYellowV);

let makeYellow = () => {
  makeYellowV.style.backgroundColor = "#FFFF00";
  makeYellowV.style.color = "#000";
};

//-----------------------------------------------

console.log(makeYellow);

const makeOrange = document.querySelector(".make-orange");

makeOrange.onclick = () => {
  makeOrange.style.backgroundColor = "orange";
};

//--------------------------------------------------

const makePurple = document.querySelector(".make-purple")

makePurple.addEventListener("click", () => {makePurple.style.backgroundColor = "Purple";})
