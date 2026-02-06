// console.log(window);
// console.log(window.location);
// console.log(location);
// console.log(navigator);
// console.log(screen);
// console.log(history);
// console.log(document);


// ! direct access
// console.log(document.body);
// console.log(document.head);
// console.log(document.title);
// console.log(document.scripts);
// console.log(document.images);
// console.log(document.links);
// console.log(document.forms);

// ! DOM TARGETING METHODS

// ! getElementById("id") : to target the single element with unique id
console.log(document.getElementById("demo"));

// ! getElementByClassName("classname") : to target multiple elements with specified classname
let btns = document.getElementsByClassName('btn')

console.log(btns);
//  returns html collection : array like object 
let arr = Array.from(btns)
console.log(arr);

// !getElementByTagName('tagname') :  to target multiple elements with specified tagname 
let boxes = document.getElementsByTagName('section')
console.log(boxes);

// ! querySelector('selector') : target single element with  specified css selector
console.log(document.querySelector('#demo'));
console.log(document.querySelector('.btn'));

// ! querySelectorAll('selector') : target multiple element with  specified css selector
let buttons = document.querySelectorAll('#container')
console.log(buttons);

//  nodelist : Array like object