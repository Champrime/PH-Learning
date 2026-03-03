function multiply(a, b){
    a = a - 5;
    b = b - 10;
    console.log(a, b);
    return a * b;
}

let x = 10, y = 20;
console.log(`before calling ${x} and ${y}`);
const result = multiply(x, y);
console.log(result);
console.log("before calling", x, "and", y);