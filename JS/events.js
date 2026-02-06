// ! click

// let btn = document.querySelector("button")
// console.log(btn);

// btn.addEventListener('click',()=>{
//     let inputelement = document.querySelector('input')
//     console.log(inputelement.value);
//     document.body.style.backgroundColor = inputelement.value
//     inputelement.value = ''
// })


// ! mouseover

// let themebtn = document.querySelector('button')
// console.log(themebtn);

// themebtn.addEventListener('mouseover',()=>{
//     document.body.style.backgroundColor = 'black'
//     document.body.style.Color = 'white'
//     themebtn.innerHTML = 'LIGHT'
//     document.getElementById('demo').innerHTML = 'Remove the cursor from the button to get the light theme'
// })

// // ! mouseout
// themebtn.addEventListener('mouseout',()=>{
//     document.body.style.backgroundColor = 'white'
//     document.body.style.Color = 'black'
//     themebtn.innerHTML = 'DARK'
//     document.getElementById('demo').innerHTML = 'Move the cursor from the button to get the dark theme'
// })

// ! mousedown
// let heart = document.getElementById("heart")
// console.log(heart);
// heart.addEventListener('mousedown',()=>{
//     heart.innerHTML = '💕'
// })

// // ! mouseup
// heart.addEventListener('mouseup',()=>{
//     heart.innerHTML = '❤️'
// })

// ! contextmenu
// let q =document.getElementById('qsp')
// q.addEventListener('contextmenu',(e)=>{
//     e.preventDefault()
//     console.log(e);
//     q.innerText += 'The best institute'
// })

//  preventDefault() : prevent the default action

// event object : It is only parameter passed to the event handler and it holdsinfo of an event


// ! dblclick
// let btn = document.querySelector('button')
// btn.addEventListener('dblclick',()=>{
//     alert('you clicked a button')
// })

// ! submit
// let f = document.forms[0]
// console.log(f);
// f.addEventListener('submit',(e)=>{
//     console.log(e);
//     e.preventDefault()
//     document.body.style.backgroundColor = 'green'
// })

// ! key events
// keypress
// addEventListener('keypress',(e)=>{
//     console.log(e);
//     console.log('key logn pressed '+e.key);
// })

// //  key down
// addEventListener('keydown',(e)=>{
//     console.log('key long pressed' +e.key);
// })

// //  key up
// addEventListener('keyup',(e)=>{
//     console.log('key released' +e.key);
// })

// ! Event propagation 
let gp = document.getElementById('gp')
let parent = document.getElementById('parent')
let child = document.getElementById('child')

child.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('child clicked');
    child.style.backgroundColor = 'red'
},false)

parent.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('parent clicked');
    parent.style.backgroundColor = 'blue'
},false)

gp.addEventListener('click',(e)=>{
    e.stopPropagation()
    console.log('Grand parentclicked');
    gp.style.backgroundColor = 'yellow'
},false)