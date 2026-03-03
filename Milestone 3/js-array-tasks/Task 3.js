/*
### Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(array){
    return array.reduce((acc, num)=>acc+num, 0)/array.length;
}

let arr = [60, 22, 53, 81, 76, 89, 78, 88, 82];

console.log(make_avg(arr).toFixed(2));