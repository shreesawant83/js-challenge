debugger;
//Start Learning Day18
//Activity 1 Sorting Algoritms
//Task 1
// let arr = [78, 79, 46, 23, 45, 76, 12];
// function recusiveBubbleSort(arr, count) {
//     if (count == 1) {
//         return;
//     }
//     for (let runFor = 0; runFor < count - 1; runFor++) {
//         if (arr[runFor] > arr[runFor + 1]) {
//             let tempVar = arr[runFor];
//             arr[runFor] = arr[runFor + 1];
//             arr[runFor + 1] = tempVar;
//         }
//     }
//     recusiveBubbleSort(arr, count - 1)
// }
// recusiveBubbleSort(arr, arr.length)
// console.log(arr);

//Task 2
// let arr = [20, 12, 53, 3];
// function selectionSort(arr) {
//     let minID;
//     for (let i = 0; i < arr.length; i++) {
//         minID = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minID]) {
//                 minID = j;
//             }

//         }
//         let tempVar = arr[i];
//         arr[i] = arr[minID];
//         arr[minID] = tempVar;
//     }
// }
// selectionSort(arr);
// console.log(arr);

//Task 3
// let arr = [6, 2, 5, 9, 4, 3, 1];


// function partition(arr, s, e) {
//     let pivot = arr[s];

//     let count = 0;
//     for (let i = s + 1; i <= e; i++) {
//         if (arr[i] <= pivot) {
//             count++;
//         }
//     }
//     //place pivot index at position
//     let pivotIndex = s + count;
//     let tempVar = arr[pivotIndex];
//     arr[pivotIndex] = arr[s];
//     arr[s] = tempVar;

//     //left and right part
//     let i = s, j = e;
//     while (i < pivotIndex && j > pivotIndex) {
//         while (arr[i] < pivot) {
//             i++;
//         }
//         while (arr[j] > pivot) {
//             j--;
//         }
//         if (i < pivotIndex && j > pivotIndex) {
//             let tempVar = arr[i];
//             arr[i] = arr[j];
//             arr[j] = tempVar;
//             i++;
//             j--;


//         }
//     }
//     return pivotIndex;
// }

// function quickSort(arr, s, e) {

//     if (s >= e) {
//         return;
//     }
//     //partition
//     let p = partition(arr, s, e);

//     //left part sort 
//     quickSort(arr, s, p - 1)

//     //right part sort 
//     quickSort(arr, p + 1, e)

// }

// quickSort(arr, 0, arr.length - 1)
// console.log(arr);


//Activity 2 Searching algorithms
//Task 4
// let arr = [6, 2, 8, 4, 9, 1];
// let targetValue = 4;

// for (let runFor = 0; runFor < arr.length; runFor++) {
//     if (arr[runFor] == targetValue) {
//         console.log(runFor);
//         break;
//     }
// }

//Task 5
// let arr = [5, 9, 13, 17];
// let start = 0;
// let end = arr.length - 1;
// let find = 13;
// let pos = undefined;
// while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] == find) {
//         pos = mid;
//         break;
//     } else if (arr[mid] < find) {
//         start = mid + 1;
//     } else if (arr[mid] > find) {
//         end = mid - 1;
//     }
// }
// console.log(pos);



// //Activity 3 String Algorithms
// //Task 6
// let stringValue = "Mat Hanry";
// function countOccurence(stringValue) {
//     let occurenceCount = {};

//     for (const strValue of stringValue) {
//         if (occurenceCount[strValue]) {
//             occurenceCount[strValue]++;
//         } else {
//             occurenceCount[strValue] = 1;
//         }
//     }

//     return occurenceCount;
// }

// let occurenceCount = countOccurence(stringValue);
// console.log(occurenceCount);


//Task 7
// let stringValue = "aaaaaaaaaaaaaabbbbbbcbbbbbbbbbb";
// function lengthOfLongestSubstring(stringValue) {
//     let num = stringValue.length;
//     let maxLength = 0;
//     let start = 0;
//     let charIndexMap = {};

//     for (let end = 0; end < num; end++) {
//         let currentChar = stringValue[end];

//         if (charIndexMap[currentChar] != undefined && charIndexMap[currentChar] >= start) {
//             start = charIndexMap[currentChar] + 1;
//         }
//         charIndexMap[currentChar] = end;
//         maxLength = Math.max(maxLength, end - start + 1)
//     }
//     console.log(maxLength);


// }

// lengthOfLongestSubstring(stringValue)


//Activity 4 Array Algorithm
//Task 8

// function rotateArray(arr,k){
// const num = arr.length;
// k = k % num;
// const rotateArr = arr.slice(-k).concat(arr.slice(0,-k));
// console.log(rotateArr);
// }

// const arr = [1,2,3,4,5,6,7,8,9];
// const k = 3;
// rotateArray(arr,k)

//Task 9 
// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];
// function margeSortedArray(arr1, arr2) {
//     let mergeSortedArr = [];
//     let i = 0; j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergeSortedArr.push(arr1[i]);
//             i++;
//         } else {
//             mergeSortedArr.push(arr2[j]);
//             j++;
//         }
//     }
//     return mergeSortedArr;
// }

// let mergeSortedArray = margeSortedArray(arr1, arr2);
// console.log(mergeSortedArray);
