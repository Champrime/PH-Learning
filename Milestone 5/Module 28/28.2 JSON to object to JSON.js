let salary = 30000;
let person = {
    name: "Selim", // Quotation for String
    fruit: "Dalim",
    dish: "Halim",
    friends: ["A. Alim", "Fahim", "Lamim"],
    isRich: false, // No Quotation for Boolean
    money: salary, // No Quotation for Number
    // No Quotation for variable, array, object, function as well.
}

console.log(person); 

let personJSON = JSON.stringify(person);
// console.log(personJSON);
console.log(`Object to JSON version is this: ${personJSON}`);

let personObject = JSON.parse(personJSON);
console.log(personObject);
console.log("JSON to Object version is this:", personObject); //JSON to Object version is this: [object Object]