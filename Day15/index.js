//Start Learning Day15
//Activity 1 Understanding closures
//Task 1
// function outerFunction() {
//     const outerFunctionVariable = 4;
//     function innerFunction() {
//         const innerFunctionVariable = 8;
//         console.log(innerFunctionVariable);
//         console.log(outerFunctionVariable);
//     }
//     return innerFunction;
// }
// const closureResult = outerFunction();
// closureResult();

//Task 2
// function getCounterValue() {
//     let counter = 2;
//     function privateCounter() {
//         function incrementValue() {
//             counter++;
//         }
//         function getValue() {
//             console.log(counter);
//         }
//         incrementValue();
//         getValue();
//     }
//     return privateCounter;
// }
// const closureCounter = getCounterValue();
// closureCounter();

//Activity 2 Practical Closures
//Task 3
// function UniqueID() {
//     let Id = 1;
//     function newID() {
//         Id++;
//         console.log(Id);
//     }
//     return newID;
// }
// const generateUniqueID = UniqueID();
// generateUniqueID();
// generateUniqueID();

//Task 4
// function getUserName(name) {
//     function greetUsername() {
//         console.log(`Hello ${name}`);
//     }
//     return greetUsername;
// }

// const closureUserName = getUserName("Mat");
// closureUserName();

//Activity 3 Closure in loops
//Task 5 

// let funcArray = [];

// for (let runFor = 0; runFor < 5; runFor++) {
//   funcArray.push(() => {
//     console.log(runFor);
//   })
// }
// console.log(funcArray);
// funcArray[0]();
// funcArray[1]();
// funcArray[2]();
// funcArray[3]();
// funcArray[4]();

//Activity 4 Module pattern
//Task 6
// function simpleModule() {
//   let items = [];
//   return {
//     addItem: function (item) {
//       items.push(item);
//     },
//     removeItem: function (item) {
//       let newItem = items.filter((itm) => itm != item)
//       items = newItem;
//     },
//     listItems: function () {
//       return items;
//     }
//   }
// }

// const closureModule = simpleModule();
// closureModule.addItem("Mat")
// closureModule.addItem("John")
// closureModule.addItem("Tom")
// closureModule.removeItem("Mat")
// console.log(closureModule.listItems());

//Activity 5 Memoization
// Task 7
// function sumNumbers(num) {
//   let sum = 0;
//   for (let runFor = 0; runFor < num; runFor++) {
//     sum += runFor;
//   }
//   return sum;
// }

// function memoization(func) {
//   let cache = {};
//   return function (...arg) {
//     let n = arg[0];
//     if (n in cache) {
//       return cache[n];
//     }else{
//       let result = func(n);
//       cache[n]=result;
//       return result;
//     }
//   }
// }
// debugger;
// console.time()
// const memo = memoization(sumNumbers)
// console.log(memo(6));
// console.timeEnd()

// console.time()
// console.log(memo(7));
// console.timeEnd()

//Task 8

// function calcFactorial(number) {
//   let fact = 1;
//   for (let runFor = 0; runFor < number; runFor++) {
//     fact *= runFor;
//   }
//   return fact;
// }

// function Memoization(func) {
//   let cache = {};
//   return function (...arg) {
//     let num = arg[0];
//     if (num in cache) {
//       return cache[num];
//     } else {
//       let result = func(num);
//       cache[num] = result;
//       return result;
//     }
//   }
// }

// let memo = Memoization(calcFactorial)
// console.time()
// console.log(memo(7));
// console.timeEnd()

// console.time()
// console.log(memo(9));
// console.timeEnd()