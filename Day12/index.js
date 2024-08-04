//Start Learning Day12

//Activity 1 Basic Error handling with try catch
// let firstFunction = ()=>{

// }
//Task 1
// try {
//     firstFunction();
// } catch (error) {
//     console.log(error);
// }

//Task2

// let divideNumbers = (deno,nume)=>{
//     if(deno!=0){
//         return (nume/deno);
//     }else{
//         throw new Error("denominator is zero")
//     }
// }
// try{
//     let result = divideNumbers(0,3)
//     console.log(result);
// }catch(error){
//     console.log(error);
// }

//Activity 2 Finally Block
//Task 3
// try {
//     console.log("Try section");
//     throw new Error("catch Error")
// } catch (error) {
//     console.log("Catch section");
// }finally{
//     console.log("Finally section");
// }

//Activity 3 Custom Error Msg 
//Task 4 
// class customError extends Error {
//     constructor(message, errorCode) {
//         super(message);
//         this.message = message;
//         this.errorCode=errorCode;
//     }
// }

// try {
//     throw new customError("Something went wrong",400);
// } catch (error) {
//     if(error instanceof customError){
//         console.log(`Error occured ${error.message} and ${error.errorCode}`);
//     }else{
//         console.log("General Error Occured");
//     }
// }

//Task5
// function stringValidation(stringValue) {
//     try {
//         if (stringValue == "") {
//             throw new Error("String is empty");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// stringValidation("");

//Activity 4 Error handling in promises
//Task 6
// function dynamicResolveReject() {
//     return new Promise((resolve, reject) => {
//         if (Math.random() > 0.5) {
//             resolve("Promise Resolved");
//         } else {
//             resolve("Promise Reject");
//         }
//     })
// }
// dynamicResolveReject().then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// })

//Task 7
// let randomResolveReject = async () => {
//     try {
//         const respPromise = new Promise((resolve, reject) => {
//             if (Math.random() > 0.5) {
//                 resolve("Promise Resolved");
//             } else {
//                 resolve("Promise Reject");
//             }
//         })
//         const finalResponse = await respPromise;
//         console.log(finalResponse);
//     } catch (error) {
//         console.log(error);
//     }
// }

// randomResolveReject();

//Activity 5 Graceful error handling in fetch 
//Task 8
// fetch("https://testeaaaaaaaaaaaaaaaaaaaample.com")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(`There is something error ${response.statusText}`)
//         }
//         const finalResponse = response.json();
//         console.log(finalResponse);
//     }).catch((error) => {
//         console.log(error);
//     })

//Taask 9
// let getData = async () => {

//     try {
//         const response = await fetch("https://testeaaaaaaaaaaaaaaaaaaaample.com");
//         if (!response.ok) {
//             throw new Error(`Response status is ${response.status} and status text is ${response.statusText}`)
//         }
//         const finalResponse = await response.json();
//         console.log(finalResponse);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData();

