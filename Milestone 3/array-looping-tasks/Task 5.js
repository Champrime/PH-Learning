/*
### Task 5

Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.


Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3]
Copy: [99, 2, 3]
*/

let omok = [1, 2, 3];
let tomok = omok;
tomok[0] = 99;

console.log(tomok)