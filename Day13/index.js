//Start Learning Day13
//Activity 1 Creating and exporting modules
//Task 1
// import printCharacterName,{ multiplyTwoNumbers,AddTwoNumbers,marvelCharacters } from "./modules.js";

// const num1=10,num2=20;
// console.log(AddTwoNumbers(num1,num2));

// //Task 2
// console.log(marvelCharacters)

// //Activity 2 Named and Default Exports
// //Task 3
// console.log(multiplyTwoNumbers(40,5));

// //Task 4
// console.log(printCharacterName("Super Man"));

//Activity 3 Importing intire modules
//atsk 5
// import * as entireModule from "./modules.js"
// console.log(entireModule);
// console.log(entireModule.UserFirstName);
// console.log(entireModule.multiplyTwoNumbers(3,4));

//Activity 4 Using third party modules
//Task 6
// import _ from "lodash";
// const arr= [0,1,2,3,4,5,6,7,8,9];
// //chunk given array
// console.log(_.chunk(arr,3));

//Task 7
//Axios api call
// import axios from "axios";
// axios.get("https://api.github.com/users/shreesawant83")
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

//Activity 5 Module bundling
//Task 8 
