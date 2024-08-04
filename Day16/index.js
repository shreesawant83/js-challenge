//Start Learning Day16
//Activity 1 Recursion basics
//Task 1
function calcFactorial(number) {

    if (number == 0 || number == 1) {
        return 1;
    }
    return number * calcFactorial(number - 1);
}

console.log("Factorial is " + calcFactorial(5));

//Task 2 Print fibonacci series 01123581321
function getfibonacci(num) {
    if (num <= 1) {
        return num;
    } else {
        return getfibonacci(num - 1) + getfibonacci(num - 2)
    }
}
function printFibonacci(number, count = 0) {
    if (count < number) {
        console.log(getfibonacci(count))
        printFibonacci(number, count + 1);
    }
}
printFibonacci(9)

//Activity 2 Recursion with arrays
//Task 3
let task3Arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
function getSumAllArrayEl(arrLength) {
    if (arrLength == 0) {
        return sum += task3Arr[0];
    }
    sum += task3Arr[arrLength];
    getSumAllArrayEl(arrLength - 1)
    return sum;
}

console.log("Array elements sum is ", getSumAllArrayEl(task3Arr.length - 1));

//Task 4
let task4Arr = [-30, -1, -2299, -46, -79999999994, -999990, -888, -789];
let max = Number.NEGATIVE_INFINITY;
function getMaximum(length) {
    if (length == 0) {
        if (max < task4Arr[0]) {
            return max = task4Arr[0];
        } else {
            return max;
        }

    } else {
        if (max < task4Arr[length]) {
            max = task4Arr[length];
        }
        getMaximum(length - 1);
        return max;
    }
}
console.log("Array Elements Max is ", getMaximum(task4Arr.length - 1));

//Activity 3 String manipulation with recursion
//Task 5 Reverse String
let stringValue = "IronMan";
let stringLength = stringValue.length - 1;
let reverseStringValue = "";
function reverseString(stringLength) {
    if (stringLength == 0) {
        reverseStringValue += stringValue.charAt(stringLength);
    } else {
        reverseStringValue += stringValue.charAt(stringLength);
        reverseString(stringLength - 1);
        return reverseStringValue;
    }
}
console.log(reverseString(stringLength));

//Task 6 string palindrome or not
let givenString = "lbvbl";
function isPalindrome(stringValue) {
    let start = 0;
    let end = stringValue.length - 1;
    function checkPalindrome(start, end) {
        if (start >= end) {
            return true;
        }
        if (givenString.charAt(start) != givenString.charAt(end)) {
            return false;
        }
        return checkPalindrome(start + 1, end - 1)
    }
    return checkPalindrome(start, end)
}
console.log(isPalindrome(givenString));

//Actiivity 4 Recursive search
//Task 7
function binarySearch(arr, target, low, high) {
    if (low > high) {
        return -1;
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);
    } else {
        return binarySearch(arr, target, low, mid - 1);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = binarySearch(arr, target, 0, arr.length - 1);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found in the array");
}

//Task 8
function countOccurrences(arr, target) {
    // Base case: if the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    // Check the first element and count it if it matches the target
    const firstElementCount = arr[0] === target ? 1 : 0;

    // Recursively call the function with the rest of the array
    return firstElementCount + countOccurrences(arr.slice(1), target);
}

const exampleArray = [1, 2, 3, 4, 1, 2, 1, 1, 5];
const targetElement = 1;
console.log(`The target element ${targetElement} occurs ${countOccurrences(exampleArray, targetElement)} times in the array.`);
