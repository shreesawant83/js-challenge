//Start Learning Day5

//Activity 1 Funcation declaration
//Task 1
// let givenNum = 10;
// function checkNumEvenOdd(givenNum) {
//     if (givenNum % 2 == 0) {
//         console.log("The number is even ", givenNum);
//     } else {
//         console.log("The number is odd ", givenNum);
//     }
// }
// checkNumEvenOdd(givenNum);

//Task 2

// let squareNum=9;

// function calculateSquare(squareNum){
//     squareNum= squareNum*squareNum;
//     console.log("The square is ",squareNum);
// }
// calculateSquare(squareNum);

//Activity 2 function expression
//Task 3
// function findMaximumTwoNum(num1,num2){
//     if(num1 > num2){
//         return num1;
//     }else{
//         return num2;
//     }
// }
// console.log("Maximum number is ", findMaximumTwoNum(3,2));


//Task 4
// function printFullname(fName,lName){
// return fName+" "+lName;
// }
// console.log("Fullname is ",printFullname("Roman","Reigns"));

//Activity 3

//Task 5 

// let calcSum = (num1,num2)=>{
// return num1+num2;
// }

// console.log("The sum is ",calcSum(3,6));

//Task 6 

// let checkContainsSpecificChar = (passwordString, character) => {

//     let stringLength = passwordString.length;

//     for (let runFor = 0; runFor < stringLength; runFor++) {
//         if (passwordString.charAt(runFor) == character) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log("String contains ", checkContainsSpecificChar("Adm!n@123","/") );

//Activity 4 Funation parameters and default value
//Task 7 

// let numberProduct=(num1,num2=4)=>{
// return num1*num2
// }

// console.log("Product is ", numberProduct(4,5));

//Task8

// let greetingMsg = (personsName, age = 20) => {
//     return "Hello " + personsName + " and age is " + age;
// }

// console.log(greetingMsg("Roman"));

//Activity 5 Higher Order functions
//Task 9
// let parameterFunction = () => {
//     console.log("parameterFunction running");
// }

// let functionRun = (count, callback) => {
//     let countTemp = 0;
//     while (countTemp < count) {
//         callback();
//         countTemp++;
//     }
// }
// functionRun(2, parameterFunction)

//Task 10
let applyValue = (num1, num2) => {
    return num1 + num2;
}

let resultValue = (result) => {
    console.log(result);
}

let printingResult = (num1, num2, callbackapplyValue, callbackresultValue) => {
    let tempApplyvalue = callbackapplyValue(num1, num2);
    callbackresultValue(tempApplyvalue)
}

printingResult(7, 5, applyValue, resultValue)