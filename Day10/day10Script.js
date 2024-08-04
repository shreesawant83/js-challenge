//Start Learning Day10
//Activity 1
//Task 1

let paraChangeEvent = document.getElementById('para');
let button = document.getElementById('changePara');
button.addEventListener("click", () => {
    if (paraChangeEvent != undefined) {
        paraChangeEvent.innerText = "Just change para";
    }
})

//Task 2
let toggleVisibility = document.getElementById('toggleVisibility');
let task2Image = document.getElementById('imgtask2');

toggleVisibility.addEventListener("dblclick", () => {
    debugger;
    if (task2Image != undefined) {
        task2Image.style.display == "block" ? task2Image.style.display = "none" : task2Image.style.display = "block";
    }
})

//Activity 2 Mouse Event
//Task 3
let activityTwo = document.getElementById("activity-2");
activityTwo.addEventListener("mouseover", () => {
    if (activityTwo != undefined) {
        activityTwo.style.backgroundColor = "blue";
    }
});

//Task 4
activityTwo.addEventListener("mouseout", () => {
    if (activityTwo != undefined) {
        activityTwo.style.backgroundColor = "red";
    }
})

//Activity 3 Kyeboard events
//Task 5
let task5Input = document.getElementById("task5Input");
task5Input.addEventListener("keydown", (e) => {
    console.log(e.key);
})

//Task 6
task5Input.addEventListener("keyup", (e) => {
    console.log(e.key);
})

//Activity 4 Form Event
//Task7
let submitForm = document.getElementById("activityFormSubmit");
submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let Username = document.getElementById("uname").value;
    let Password = document.getElementById("password").value;
    console.log(`Username is ${Username} and Password is ${Password}`);
})

//Task8
let dropDown = document.getElementById("droptdownlist");
let paragraph = document.getElementById("change-para");
dropDown.addEventListener("change", () => {
    if (paragraph != undefined) {
        paragraph.innerText = dropDown.value;
    }
})

//Activity 5 Event Delegation
//Task 9
let delegateEx = document.getElementById("delegateEx");
delegateEx.addEventListener("click", (e) => {
    debugger;
    if (e.target.tagName == "LI") {
        console.log(e.target.textContent);
    }
})

let delegateDyanamic = document.getElementById("delegateDyanamic");
delegateDyanamic.addEventListener("click", () => {
    if (delegateDyanamic != undefined) {
        let AddLi = document.createElement("li");
        AddLi.innerText=delegateDyanamic.children.length +1;
        delegateDyanamic.appendChild(AddLi);
    }
})