//Start Learning Day14
//Activity 1 class definitions
//Task 1
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         return `Hello ${this.name}`;
//     }
//     updatePersonAge(newAge) {
//         this.age = newAge;
//         return `New age is ${this.age}`;
//     }
//     static genericGreetMethod() {
//         return `Hello my name is ${this.name}`;
//     }
// }
// const greetPerson = new Person("Mat",30)
// console.log(greetPerson.greet());

//Task 2 update person age
// const greetPerson = new Person("Mat",30)
// console.log(greetPerson);
// console.log(greetPerson.updatePersonAge(25));

//Activity 2 Class Inheritance
//Task 3
// class Student extends Person {
//     static studentCreatedCount = 0;
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//         Student.studentCreatedCount++;
//     }
//     getStudentId() {
//         return `Student Id is ${this.studentId}`
//     }
//     greet() {
//         return `Hello ${this.name} and Student ID is ${this.studentId}`;
//     }
//     static getStudentCreatedId(){
//         return `Student Id Count is ${Student.studentCreatedCount}`;
//     }
// }
// const studentId = new Student("Hartly",22,234);
// console.log(studentId.getStudentId());

// //Task 4
// console.log(studentId.greet());

//Activity 3 Static methods and properties
//Task 5 
// const studentInfo = new Student("John",33,456);
// console.log(studentInfo.genericGreetMethod());

//Task 6
// const student1= new Student("Chris",22,1);
// const student2= new Student("John",23,2);
// console.log(student1);
// console.log(student2);
// console.log(Student.studentCreatedCount);
// console.log(Student.getStudentCreatedId());

//Activity 4 Getters and Setters
//Task 7 
// class Person {
//     constructor(firstName, lastName) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }
//     get fullName() {
//         return `${this._firstName} ${this._lastName}`
//     }
//     set fullName(value) {
//         const newFullName = value.split(" ");
//         const firstName = newFullName[0];
//         const lastName = newFullName[1];
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }
// }

// const personInfo = new Person("Mat","Hanry")
// console.log(personInfo);
// console.log(personInfo.fullName);
// personInfo.fullName="John Cena";
// console.log(personInfo);


//Activity 5 Private fields
