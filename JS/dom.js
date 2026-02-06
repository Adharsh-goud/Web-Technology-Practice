let heading = document.getElementById("heading")
// console.log(heading);

// // ! innerHTML : change the innerhtml of an element
// heading.innerHTML = '<i>have a good day..</i>'

// // !innerText : chane the content of an element
// heading.innerText = '<u>Toady is the great day</u>'

// // ! textContent : to add content
// heading.textContent = 'hiiii'

// // ! change the value of an attribute
// heading.id = 'demo'

// // ! setAttribute("attr_name,attr_val") : adding new attributes
// heading.setAttribute('title','greetings....')

// // ! style : change tthe style of an element
// heading.style.backgroundColor = 'yellow'
// document.body.style.backgroundColor = 'blue'

// // ! createElement(element) : to create new element
// let box = document.createElement('div')
// box.textContent = 'Iam div'
// console.log(box);

// // ! append() ,appendChild(element) : to add newly created element to the document
// document.body.appendChild(box)

// // ! remove() , removeChild() deleting the element 
// // heading.remove()

// document.body.removeChild(heading)

// 1 addEventListener(event,function) : 
heading.addEventListener('click',()=>{
    heading.innerHTML = 'have a good day'
    heading.style.color = 'red'
    document.body.style.backgroundColor = 'blue'
})