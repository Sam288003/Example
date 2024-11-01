const listItems = document.querySelectorAll(".item");
console.log(listItems[0].innerText);
listItems[1].style.color = "red";

listItems.forEach( (item , index) => { 

/*    console.log(item.innerText);
 if (index === 0) {
    item.remove();
});
*/

switch (index) {
    case 0: item.remove();
    break;
    case 1: item.remove();
    break;
    case 2: 
        item.innerHTML = `Orange
        <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
        </button>`;
                }
                                    });

// return : HTMLCollections, this not an array data type
const listItem2 = document.getElementsByClassName("item");
console.log(listItem2);
console.log(listItem2[1].innerText);

// getElementsByClassName and ONLY querySelectorAll are two different
// ways to search element, but getElement data type is element, while 
// querySelector is the node type, i.e. array

const listItemsArray = Array.from(listItem2);
console.log(listItemsArray);

const listItem3 = document.getElementsByTagName("li");
console.log(listItem3);
console.log(listItem3[1].innerText);


