
//adding to git!
//arr.[i]  will give the array in order  - adding the loop check consoleLog

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

for (let i = 0; i < arr.length; i++) {
    console.log(arr.reverse()[i])

}

//reverse   console.log(arr.reverse()[i]

let arryOne = [43, "what", 9, true, "cannot", false, "be", 3, true];

for (let i = 0; i < arryOne.length; i++) {
    console.log("this arry is an reverse = ", arryOne.reverse()[i]);

}




//converted array to a number - remember item is just the name of the param (for the elements in the array)
let arryTwo = [43, "what", 9, true, "cannot", false, "be", 3, true];
console.log(arryTwo.filter(item => typeof item === 'number'));


//MAY returns wheather the CONDITION is tru or false
//if you console this you will see true or false in an array
let arryThree = [43, "what", 9, true, "cannot", false, "be", 3, true];
console.log(arryThree.map(item => typeof item === 'number'));



//
//GET BELOW TO WORK
// //   push to empty array

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// let newMapArray = arr.map((element) => {element === Number? console.log(Number(arr))  : console.log("Not a number")});
// console.log(newMapArray);   
