const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkboxInput = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
    heading.textContent = e.target.value;
}

itemInput.addEventListener("input" , onInput);

// checkbox is a boolean
function onChecked(e) {
    const isChecked = e.target.checked;
    // just using header to show checkbox is a boolean value
    heading.textContent = isChecked ? "checked" : "unchecked";
}

checkboxInput.addEventListener("input" , onChecked);


function onfocus(e) {
    console.log("Input is focused");
    itemInput.style.outlineStyle = "solid";
    itemInput.style.outlineColor = "red";
    itemInput.style.outlineWidth = "3px";
}
itemInput.addEventListener("focus" , onfocus);
function onblur(e) {
    console.log("input is not focused");
    itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("blur" , onblur);

priorityInput.addEventListener("change" , onInput);

