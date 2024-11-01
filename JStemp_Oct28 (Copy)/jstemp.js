let output;
output = document.all;
output = document.all[11];
output = document.all.length;

output = document.documentElement;
output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;
output = document.images;
output = document.images[0].src;
output = document.forms;
// line 22, 23 because forms is not an array, so we need to change
// forms data type into array first before using forEach to process it
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));
output = document.links[0].href;
output = document.links[0].id;
output = document.links[0].className;
output = document.links[0].classList;
output.forEach((list) => console.log(list));

//console.log(output);

