//Start Learning Day6

//Activity 1 : Array creation and Access
//Task 1
// let taskOneArray = [1,2,3,4,5];
// console.log(taskOneArray[0]);
// console.log(taskOneArray[1]);
// console.log(taskOneArray[2]);
// console.log(taskOneArray[3]);
// console.log(taskOneArray[4]);


// //Task2
// let taskTwoArray=[5,6,7,8,9,10]
// console.log(taskTwoArray[0],taskTwoArray[taskTwoArray.length - 1]);

// Activity 2 Array Methods (Basic)
//Task 3
// let actviityTwoArray= [1,2,3,4,5,6];
// // actviityTwoArray.push(7)
// console.log(actviityTwoArray);

//Task 4
// actviityTwoArray.pop(6);
// console.log(actviityTwoArray);

//Task 5
// actviityTwoArray.shift();
// console.log(actviityTwoArray);

//Task 6
// actviityTwoArray.unshift(8,7)
// console.log(actviityTwoArray);

//Activity 3  
//Task 7
// let arrNumbers= [2,3,4,5,6,7];
// let newarrNumbers = arrNumbers.map((number)=>{
// return number + number;
// })
// console.log(newarrNumbers);

//Task 8
// let allNumbers= [1,2,3,4,5,6,7,8,9,10];
// let evenNumber = allNumbers.filter((number)=>{
//     if(number%2 == 0){
//         return number;
//     }
// })
// console.log(evenNumber);

//Task 9 
// let numbers=[1,2,3,4,5,6,7,8,9,10];
// let total = numbers.reduce((total , number)=>{
//     return total + number
// })
// console.log(total);

//Activity 4 Array Iteration
//Task 10
// let taskTenArray = [1,2,3,4,5];
// for (let runFor = 0; runFor < taskTenArray.length; runFor++) {
//     console.log(taskTenArray[runFor]);
// }

//Task 11
// let taskElevenArray= [1,2,3,4,5,6]
// taskElevenArray.forEach((number,index)=>{
// console.log("number is "+ number + " and index is "+index);
// })

//Activity 5 Multidimensional array
//Task 12
// let multiDimArray = [{
//     name: "Tom",
//     age: 20
// }, {
//     name: "Smith",
//     age: 22
// }]
// console.log(multiDimArray);

// //Task 13
// for (let runfor = 0; runfor < multiDimArray.length; runfor++) {
//     let name = multiDimArray[runfor].name;
//     let age = multiDimArray[runfor].age;
//     console.log("name is "+ name +" and age is "+age);
// }