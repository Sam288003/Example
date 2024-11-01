const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(1)");
const form = document.querySelector("form");

// button's father is div
button.addEventListener("click" , () => {
    alert("button clicked");
    // following is to stop the click propagation extending to div, form and body
    e.stopPropagation();
});

// div's father is form
div.addEventListener("click" , () => {
    alert("div clicked");
});

// form's father is body
form.addEventListener("click" , () => {
    alert("form clicked");
});

// body is grand-grand-father
document.body.addEventListener("click" , () => {
    alert("body clicked");
});

