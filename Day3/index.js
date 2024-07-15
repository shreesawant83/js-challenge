//Start learning Day 3

//Activity 1 If-else statements

let currentTempreture = 10;
if (currentTempreture == 0) {
    console.log("Tempreture is zero");
} else if (currentTempreture > 0) {
    console.log("Tempreture is Positive");
} else if (currentTempreture < 0) {
    console.log("Tempreture is Negative");
}

let personAge = 18;
if (personAge >= 18) {
    console.log("Person is eligible for vote");
} else {
    console.log("Person is not eligible for vote");
}

//Activity 2 Nested if-else statements

//Find largest 3 numbers

let numOne = 9;
let numTwo = 10;
let numThree = 10;

if (numOne > numTwo) {
    if (numOne > numThree) {
        console.log("numOne is greater ", numOne);
    } else {
        console.log("numThree is greater ", numThree);
    }
} else if (numTwo > numThree) {
    console.log("numTwo is greater ", numTwo);
} else {
    console.log("numThree is greater ", numThree);
}

//Activity 3 Switch case
//For WeekDays
let Day = 2;
switch (Day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        break;
}


//For Grade
let Grade = "B";
switch (Grade) {
    case "A":
        console.log("Above 90");
        break;
    case "B":
        console.log("Above 80");
        break;
    case "C":
        console.log("Above 70");
        break;
    case "D":
        console.log("Above 60");
        break;
    case "F":
        console.log("Above 50");
        break;
    default:
        break
}


//Activity 4 Conditional (Ternary) Operator

let evenOddNum = 2;
evenOddNum % 2 == 0 ? console.log("The number is even") : console.log("The number is odd");


//Activity 5 Combining conditions
//leap year 

let userYear = 2000;
if (userYear % 4 == 0) {
    if (userYear % 100 == 0) {
        if (userYear % 400 == 0) {
            console.log("This is a leap Year");
        } else {
            console.log("This is not a leap Year");
        }
    } else {
        console.log("This is a leap Year");
    }
} else {
    console.log("This is not a leap Year");
}
