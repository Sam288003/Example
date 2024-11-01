// const listItems = document.querySelectorAll("li");
// listItems.forEach((item) => {
//     item.addEventListener("click" , (e) => {
//         e.target.remove();
//     });
// });

const list = document.querySelector("ul");
list.addEventListener("click" , (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }

    // icon's father is button, button's father is li
    if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
    }

    // Following is no need as button won't seen
    // if (e.target.tagName === "BUTTON") {
    //     e.target.parentElement.remove();
    // }
});

// Node name and Tag name must use capital letter, while local name use small capital letter