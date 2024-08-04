//Start Learning Day19
//Activity 1 Basic Regular expression
//Task 1
// let givenValue = "Javascript 2002 and story 2024";
// let regex = /Javascript/gi
// let matches = givenValue.match(regex);
// console.log(matches);


//Task 2
// let regex = /\d+/g;
// let matches = givenValue.match(regex);
// console.log(matches);


//Activity 2 character classes and quantifiers
//Task 3 
// const text = "Javascript is most Famous Language";
// const regex = /\b[A-Z][a-z]*\b/g;
// const matches = text.match(regex);
// console.log(matches);

//Task 4
// const text = "There are 123 Bananas, 4567 Grapes, and 89 Oranges.";
// const regex = /\d+/g;
// const matches = text.match(regex);
// console.log(matches);

//Activity 3 Grouping and Capturing
//Task 5
// const text = "(123) 456-7890";
// const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
// const matches = text.match(regex);

// if (matches) {
//   const areaCode = matches[1];
//   const centralOfficeCode = matches[2];
//   const lineNumber = matches[3];
//   console.log("Area Code:", areaCode);
//   console.log("Central Office Code:", centralOfficeCode);
//   console.log("Line Number:", lineNumber);
// } else {
//   console.log("No match found.");
// }

//Task 6
// const email = "example.user@domain.com";
// const regex = /^([^@]+)@(.+)$/;
// const matches = email.match(regex);

// if (matches) {
//   const username = matches[1];
//   const domain = matches[2];
//   console.log("Username:", username);
//   console.log("Domain:", domain);
// } else {
//   console.log("No match found.");
// }


//Activity 4 Assertions and boudaries
//Task 7
// const text = "Hello world! This is a test.";
// const regex = /^\w+/;
// const matches = text.match(regex);

// if (matches) {
//     console.log("Matched word at the beginning:", matches[0]);
// } else {
//     console.log("No match found.");
// }

//Task 8 
// const text = "This is a test sentence with a word at the end";
// const regex = /\b\w+\b$/;
// const matches = text.match(regex);

// if (matches) {
//   console.log("Matched word at the end:", matches[0]);
// } else {
//   console.log("No match found.");
// }

//Activity Practical Application
//Task 9
// const password = "Passw0rd!";
// const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

// const isValid = regex.test(password);

// if (isValid) {
//   console.log("The password is valid.");
// } else {
//   console.log("The password is not valid.");
// }

//Task 10
const url = "https://www.test.com";
const regex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;

const isValid = regex.test(url);

if (isValid) {
  console.log("The URL is valid.");
} else {
  console.log("The URL is not valid.");
}