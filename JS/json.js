// ! JSON : javascript object notation

// let user = {
//     uname : 'junnu',
//     uid : 2521,
//     age : 21,
//     address : 'Hyd'
// }
// console.log(user);

// // ! JSON.stringify() : js object into JSON object
// let jsonObj = JSON.stringify(user)
// console.log(jsonObj);

// // ! JSON.parse() : JSON obj into js object
// let newUser = JSON.parse(jsonObj)
// console.log(newUser);

// ! Time delays
// console.log('Hello Guys');

// // ! setTimeOut(function,delay)
// setTimeout(function(){
//     console.log(' byeee');
// },2000)
// console.log('Good Morning');

// console.log('Hello guys');
// // ! setInterval(function,delay)
// setInterval(() => {
//     console.log('Bye....');
// },2000)
// console.log('Good Morning');


// ! clearTimeOut()
// let wish = setTimeout(()=>{
//     document.getElementById('text').innerHTML = 'Happy Birthday...'
// },3000)

// let stopbtn = document.querySelector('button')
// stopbtn.addEventListener('click',()=>{
//     clearTimeout(wish)
// })

// ! clearInterval()
// let displaytime = setInterval(()=>{
//     let d = new Date()
//     document.getElementById('text').innerHTML = d.toLocaleTimeString()
// },1000)

// let stopbtn = document.querySelector('button')
// stopbtn.addEventListener('click',()=>{
//     clearInterval(displaytime)
// })

// ! promise : It is an object in JS and it is a powerful way to work with asynchronous op
// pending
// mock = take -- fulfilled
// mock = didnot -- rejected

// let myPromise = new Promise((res,rej)=>{
//     let mock = false

//     if (mock === true){
//         res('Thank you for attending')
//     }
//     else{
//         rej('Do attend the mock')
//     }
// })

// console.log(myPromise);

// // then() : resloved
// myPromise.then((data)=>{console.log(data);})

// // catch()  : rejected
// myPromise.catch((err)=>{console.log(err);})

// // finally() : resloved or rejected
// myPromise.finally(()=>{console.log('All the Best...');})

// ! async and await 

// ! async : makes a function to return a promise
// async function demo() {
//     return "hello"
// }
// console.log(demo());

// ! await : makes a function to wait for promise settlement
// async function  getData() {
//     let res = await fetch("https://fakestoreapi.com/products")
//     console.log(res);
//     let data = await res.json()
//     console.log(data);
//     console.log(data[0].title);
//     console.log(data[0].price);
    

//     for(let obj of data){
//         console.log(obj.title);
//         let h2 = document.createElement('h2')
//         h2.innerText = obj.title

//         let pic  = document.createElement('img')
//         pic.src = obj.image

//         let price = document.createElement('price')
//         price.innerText = obj.price

//         document.body.append(h2,pic)
//         document.body.append(h2,price)
        
//     }
// }
// getData()


// ! web storage
// ? local storage

// ! setItem(key,val) : add the data
// localStorage.setItem('sname','Adi')
// localStorage.setItem('sid','231')

// ! getItem(keyname) ; delete the data
// document.writeln(localStorage.getItem('sname'))

// ! removeItem('keyname') : delete the data
// localStorage.removeItem('sid')

// ! clear() : delete all the data 
// localStorage.clear()

// ? sessionstorage

// ! setItem(key,val) : add the data
sessionStorage.setItem('sname','Adi')
sessionStorage.setItem('sid','231')

// ! getItem(keyname) ; delete the data
document.writeln(sessionStorage.getItem('sname'))

// ! removeItem('keyname') : delete the data
sessionStorage.removeItem('sid')

// ! clear() : delete all the data 
sessionStorage.clear()
