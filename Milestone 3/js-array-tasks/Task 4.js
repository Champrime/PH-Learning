/*
### Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

function count_zero(binaryString){
    return binaryString.split('').filter(char => char === '0'|| char === '1').length;
}

let binaryStr = "1001101001";

console.log(count_zero(binaryStr));