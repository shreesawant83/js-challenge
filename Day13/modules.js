function AddTwoNumbers(num1, num2) {
    return num1 + num2;
}

function multiplyTwoNumbers(num1, num2) {
    return num1 * num2;
}

const UserFirstName="Tony";
const UserLastName="Stark";


let marvelCharacters = {
    name: "Iron Man",
    age: 30,
    city: "NYC",
    characterInfo() {
        return "Info Reveal"
    }
}
export {marvelCharacters,multiplyTwoNumbers,AddTwoNumbers,UserFirstName,UserLastName}
// export { AddTwoNumbers,multiplyTwoNumbers, marvelCharacters };



/* export default function printCharacterName(name) {
    return `The character name is ${name}`
} */