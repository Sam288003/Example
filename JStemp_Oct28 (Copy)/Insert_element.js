function insertElement() {
    const filter = document.querySelector(".filter");
    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjustElement";
    filter.insertAdjacentElement("beforebegin" , h1);
    // insertElement can only apply once to the same element, either line 5 or line 8 can
    // execute but not both
    // filter.insertAdjacentElement("afterend" , h1);
    filter.insertAdjacentElement("afterbegin" , h1);
    filter.insertAdjacentElement("beforeend" , h1);

    // Above issue can be solved by cloneNode
    const h1clone = h1.cloneNode(true);
    filter.insertAdjacentElement("afterend" , h1clone);
}
insertElement();


function insertText() {
    const item = document.querySelector("li:first-child");
    item.insertAdjacentText("beforebegin" , "insertAdjustText");
    item.insertAdjacentText("afterend" , "insertAdjustText");
    item.insertAdjacentText("afterbegin" , "insertAdjustText");
    item.insertAdjacentText("beforeend" , "insertAdjustText");
}
insertText();


function insertHtml() {
    const cleanBtn =
    document.querySelector("#clear");  // # is the id in HTML
    cleanBtn.insertAdjacentHTML("beforebegin" , "<h2>insertAdjustHTML</h2>");
    cleanBtn.insertAdjacentHTML("afterend" , "<h2>insertAdjustHTML</h2>");
    cleanBtn.insertAdjacentHTML("afterbegin" , "<h2>insertAdjustHTML</h2>");
    cleanBtn.insertAdjacentHTML("beforeend" , "<h2>insertAdjustHTML</h2>");
}
insertHtml();


function insertBeforeItem () {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.textContent = "insertBefore";
    const thirdItem = document.querySelector("li:nth-child(3)");
    ul.insertBefore(li, thirdItem);
}
insertBeforeItem();

function insertAfter(newE, existingE) {
    existingE.parentElement.insertBefore(newE, existingE.nextSibling);                                                          
}

const li = document.createElement("li");
li.textContent = "insertAfter";
const firstItem = document.querySelector("li:nth-child(4)");
insertAfter(li , firstItem);

