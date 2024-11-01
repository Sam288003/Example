// use element to create a text
const div = document.createElement("div");
div.className = "my-element";
div.id = "my-element";
div.setAttribute("title" , "My Element");
div.textContent = "My Element";

// use node to create a text

const text = document.createTextNode("Hello world");
div.appendChild(text);
document.querySelector("ul").appendChild(div);
console.log(document.querySelector("ul"));

