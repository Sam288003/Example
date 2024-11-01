let output;

const parent = document.querySelector(".items");
console.log(parent);
output = parent.childNodes;
output = parent.childNodes[0];
output = parent.childNodes[0].textContent;
output = parent.childNodes[3].outerHTML = "<!-- comment -->";
output = parent.childNodes[3].innerText = "hello";
// output = parent.childNodes[3].style.color = "red"; ---> Because line 10 is css, not html
// Line 14 is not valid because 2 is an expression should be assigned to an address, but
// 1 is not an address. For example, line 9, "hello" is an example and is assigned to 
// address parent.childNodes[3].style.color, then output 
// output = 1 = 2 ;
output = parent.childNodes[3].nextSibling.nextSibling;
output = parent.childNodes[3].nextSibling.parentNode;
// To execute following lines, line 16 must be commented first
// output = parent.childNodes;
// output.forEach( (element) => { console.log(element); } );
console.log(output); 
