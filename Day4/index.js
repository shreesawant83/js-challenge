//Start Learning Day4

//Activity 1 For Loop

//Task 1
for (let runFor = 1; runFor <= 10; runFor++) {
    console.log(runFor, " ");
}

//Task2

let tablePrint = 5;
for (let runFor = 1; runFor <= 10; runFor++) {
    console.log(tablePrint * runFor);
}

//Activity 2 While loop
//Task 3
let sum = 0;
let count = 1
while (count <= 10) {
    sum = sum + count;
    count++;
}
console.log(sum);

//Task 4

let currentNumber = 10;

while (currentNumber > 0) {
    console.log(currentNumber);
    currentNumber--;
}

// Activity 3 Do while loop 

//Task 5

let doWhileLoopNum = 1;
do {
    console.log(doWhileLoopNum);
    doWhileLoopNum++;
} while (doWhileLoopNum <= 5);

//Task 6 

let factorial = 1;
let factRunCount = 1;

do {
    factorial = factorial * factRunCount;
    factRunCount++;
} while (factRunCount <= 5)

console.log(factorial);

//Activity 4 nested loop 

// *
// **
// ***
// ****
// *****

//Task 7
let printLine = "";
for (let runFirstFor = 1; runFirstFor <= 5; runFirstFor++) {
    printLine = "";
    for (let runSecondFor = 1; runSecondFor <= runFirstFor; runSecondFor++) {
        printLine += "*";
    }
    console.log(printLine);
}


//Activity 5 Loop Control Statements

//Task 8

for (let runFor = 1; runFor <= 10; runFor++) {
    if (runFor == 5) {
        continue;
    }
    console.log(runFor);
}

//Task 9 

for (let runFor = 1; runFor <= 10; runFor++) {
    if (runFor == 7) {
        break;
    }
    console.log(runFor);
}
