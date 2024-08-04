//Start Learning Day11
//https://api.github.com/users/shreesawant83

//Activity 1 Unserstanding promises
//Task1

// const firstResponse = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved")
//     }, 2000)
// })
// firstResponse
//     .then((response) => {
//         console.log(response);
//     })
// // Task2

// const secondResponse = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("rejected");
//     }, 2000)
// })
// secondResponse
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//Activity 2 Chaining promises
//Task 3
// let thirdResponse = new Promise((resolve, reject) => {
//     resolve("First Response")
// })

// thirdResponse
//     .then((response) => {
//         console.log(response);
//         return new Promise((resolve, reject) => {
//             resolve("Second Response")
//         })
//     })
//     .then((response) => {
//         console.log(response);
//     }).catch((err) => {
//         console.log(err);
//     })

//Activity 3 Async Await

//Task 4
// let asyncAwaitTask = async ()=>{
//     const marvelCharacter = await getMarvelCharacter();
//     console.log(marvelCharacter);
// }

// let getMarvelCharacter = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Iron Man");
//         },2000)
//     })
// }
// asyncAwaitTask();

//Task 5

// let asyncAwaitTask = async () => {

//     try {
//         const marvelCharacter = await getMarvelCharacter();
//         console.log(marvelCharacter);
//     } catch (err) {
//         console.log("err", err);
//     }

// }

// let getMarvelCharacter = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Error while retriving data");
//         }, 2000)
//     })
// }
// asyncAwaitTask();


//Activity 4 Fetching data from an api
//Task 6 

//Retrive github info using api
// let githubAPIResponse = new Promise((resolve, reject) => {
//     let response = fetch("https://api.github.com/users/shreesawant83");
//     resolve(response);
// })

// githubAPIResponse.then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data);
// })
//     .catch((err) => {
//         console.log(err);
//     })

//Task 7

// let gihubProfileResponse = async ()=>{
//     let apiResponse = await fetch("https://api.github.com/users/shreesawant83");
//     let responseData = await apiResponse.json();
//     console.log(responseData);
// }
// gihubProfileResponse();

//Activity 5 
//Task 8
//Promise.all
// let firstPromise = Promise.resolve("first Promise resolved");
// let secondPromise = "second Resolved";
// let thirdPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Third Promise resolved");
//     },5000)
// })

// Promise.all([firstPromise,secondPromise,thirdPromise]).then((values)=>{
// console.log(values);
// })

// Task 9
//promise.race
//  let firstPromise = Promise.resolve("first Promise resolved");
 let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First Promise resolved");
    },4000)
})
let secondPromise = "second Resolved";
let thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Third Promise resolved");
    },5000)
})

Promise.race([firstPromise,secondPromise,thirdPromise]).then((values)=>{
console.log(values);
})