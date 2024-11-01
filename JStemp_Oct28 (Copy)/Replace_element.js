function replaceFirstItem() {
    const firstItem = document.querySelector("li:first-child");
    // Below is to replace element, note that button and icon are also replaced
    const li = document.createElement('li');
    li.textContent = "Replace first LI";

    // Below is to replace context, button and icon will be kept
    // const li = document.createElement('p');
    // li.textContent = "Replace first P";

    firstItem.replaceWith(li);
}
replaceFirstItem();

function replaceAllItems() {
    const lis = document.querySelectorAll("li");
    // node list
    lis.forEach( (item, index) => {
    /*    if (index === 1) {
            item.innerHTML = "First replaced item";
                        }
        else {
            item.innerHTML = "Replaced all";
        }   */
 
    // Following one line can replace line 19 to 24 with the same function
    // Must use innerHTML because text node & HTML can include space, comment ... etc
    item.innerHTML = index === 1 ? "First replaced item" : "Replaced all"
        } );
    }
replaceAllItems();


function replaceChildHeading() {
    const header = document.querySelector("header");
    const h1 = document.querySelector("header h1");
    const h2 = document.createElement("h2");
    h2.id = "app-title";
    h2.textContent = "Shopping Cart";
    header.replaceChild(h2, h1);
}
replaceChildHeading();


