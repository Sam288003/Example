// locate an element
console.log(document.getElementById("app-title"));
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
console.log(document.getElementById("app-title").getAttribute("id"));
// update element's attribute
document.getElementById("app-title").title = "Shopping List";
// (attribute name, value)
appClass = document.getElementById("app-title").getAttribute("class");
appClass += " shopping";
document.getElementById("app-title").setAttribute("class", appClass);

const h1 = document.getElementById("app-title");
console.log(h1.textContent);
h1.textContent = "hello";
h1.innerText = "hello again";
// h1.innerHTML = "<strong>Ski shop</strong>";
h1.innerHTML = "<p>Ski shop</p>";
h1.style.color = "blue";
// backgroundColor is called Camel case, middle is in Capital letter
h1.style.backgroundColor = "green";
h1.style.padding = "10px";
h1.style.borderRadius = "5px";
// use css selector which is single element, return the first h1 is found
console.log(document.querySelector("h1"));
console.log(document.querySelector("#app-title"));
// select by class name
console.log(document.querySelector(".container"));
// select by attribute
console.log(document.querySelector("input[type='text']"));
// select by pseudo class
console.log(document.querySelector("li:nth-child(2)").innerText);

const secondItem = document.querySelector("li:nth-child(2)");
secondItem.innerText = "Apple Juice";
secondItem.style.color = "red";

const list = document.querySelector("ul");
console.log(list);
const firstItem = list.querySelector("li");
firstItem.style.color = "blue";
