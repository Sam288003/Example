let output;
// get child element from a parent
const parent = document.getElementById("item-form");
console.log(parent);
const child = parent.children;
// OR written in const children = parent.children;
console.log(child);
// child[1].innerText = "hello";
// child[1]
console.log(child[1].className);
console.log(child[1].nodeName);
console.log(child[1].localName);

console.log(parent.firstElementChild.innerText);
console.log(parent.lastElementChild.innerText);
// console.log(parent.children[0].nextElementSibling.innerText);
// console.log(parent.children[0].previousElementSibling.innerText);
// null
// test interchange btn parent.children[] and child[]
// console.log(child[0].nextElementSibling.innerText);
// console.log(child[0].previousElementSibling.innerText);

console.log(parent.parentElement);
// parentElement is father form, it's father is parent and is a container
parent.parentElement.style.backgroundColor = "lightblue";

const secondItem = document.querySelector(".item:nth-child(2)");
console.log(secondItem);
secondItem.nextElementSibling.style.color = "red";
secondItem.previousElementSibling.style.color = "blue";
