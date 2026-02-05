/*
Task-1  
Take four parameters. Multiply the four numbers and then return the result 
*/

function multiplier(father, brother, sister, mother){
    everyEveryDay = father * brother * sister * mother;
    return everyEveryDay;
}

let x = multiplier(90, 10, 5, 50), y = multiplier(70, 10, 5, 70);

console.log(x+y);