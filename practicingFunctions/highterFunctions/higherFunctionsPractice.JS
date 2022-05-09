/* 
practicing higher functions

Answer to: "higher order functions javascript" 


  Higher order functions are functions that operate on other
  functions, either by taking them as arguments or by returning
  them.
  
  In simple words, A Higher-Order function is a function that
  receives a function as an argument or returns the function as
  output.
*/



//created higher function with players 
function players(playerOne, PlayerTwo) {
    return playerOne + " " + PlayerTwo;

}

//this is the function that received the function as an argument 
//"players("x", "y")" ?????????/ verify this statement with NANA
let playersOfGame = players("x", "y")
console.log(playersOfGame)

//=============================================================================//

/* Assign a function to a variable originalFuncv
   originalFunc is the variable

*/
const originalFunc = (num) => { return num + 2 };

//Re-assign the function to a new variable newFunc
const newFunc = originalFunc;
console.log(newFunc(5))  // return 7 because 5+2

//Access the function's name property because const "newFunc = originalFunc;"
newFunc.name; //'originalFunc'

const functionNameLength = (func) => { return func.name.length };
functionNameLength(originalFunc); //12 because originalFunc = 12 letters



