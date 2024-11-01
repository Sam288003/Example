const text = document.querySelector("p");
const itemList = document.querySelector(".item-list"); 
const items = document.querySelectorAll("li");

function run() {
    console.log(itemList.className);
    text.className = "card dark";
    console.log(itemList.classList);
    itemList.classList.forEach((c) => console.log(c));
    text.classList.add("dark");
    text.classList.remove("card");
    text.classList.toggle("hidden");
    text.classList.replace("card" , "dark");
    itemList.style.lineHeight = "3";
    items.forEach( (item, index) => {
        /*item.style.color = "red";
        if (index === 2) {
            item.style.color = "green";
        } */
    item.style.color = index === 2 ? "red" : "green"
    } )
}

document.querySelector("button").onclick = run;  
// onclick is DOM built-in function
// onclick has no (), so it won't run first. onclick is embedded on button, when the
// button is clicked, the () will be added to onclick function and run
