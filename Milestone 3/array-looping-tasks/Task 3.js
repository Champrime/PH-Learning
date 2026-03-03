/*
### Task 3

Use a for...of loop to concatenate all the elements of an array into a single string.

**Input:**
`var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

**Output:**

`'TomTimTinTik'`
*/

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var numString = "";
for (let i = 0; i < numbers.length; i++){
    numString = numString+numbers[i];
}

console.log(numString);