// // ! function : block of code used to perform particular task

// let a = 100
// console.log('functions')
// // ! parameter : variable declared at the time of function declartion
// // function demo(x,y){
// //     console.log(x+y);
// // }
// // demo(6,4)
// // demo(5,5)

// function demo(x,y){
//     return x+y;
// }
// console.log(demo(8,12))
// // ! arfuments : values passed at the time of function calling to the function parameters

// 1. Named function/function declaration/mormal function  : function with namw
// function task(){
//     console.log('hello iam function');
// }
// task()

// 2. Anonymous function : Function without name
// 3. Function with expression : Passing whole anonymous function as a value to a variable is 
//  know as function with Expression
// ! first-class function/first-citizen function : function which is passed as a
// value to a variable

// let res = function(){
//     console.log('hello good mrng')
// }
// res()

// 4. Immediate invoking function (IIF) : The function which should be called /invoked immediately after the declaration
// (function(user){
//     console.log(`hello ${user}`);
// })('Adharsh')

// 5. Arrow function : reduce the syntax
// (parameters) => {code}

// let add = (a,b) => a+b
// console.log(add(2,4));

// let task =() => {
//     let x = 1
//     let y = 2
//     let res = x+y
//     return res
// }

// console.log(task());

// let adharsh = (m,n) => m-n
// console.log(adharsh(5,4));

// ! Nwsted function : function which is declared inside one more function
// function parent(){
//     let pland = 20
//     let phouse = 5
//     console.log(`Parent properties : ${pland} acers land and ${phouse} houses`);
//     function child(){
//         let cland = 10
//         let chouse = 2
//         console.log(`Child properties : ${cland+pland} acres land and ${chouse} houses`);
//         // lexical scoping /scope chaining
//         // closures : memory : stores required data from outer function
//     }
//     return child;
// }
// parent()()     // javascript currying


// ! Higher order function (HOF) : Function which axccpets one more function as a value or returns new function
// we can do multiple tasks
// ! Callback functions : The function which is passed as an argument to one more function

// function sample(a,b,task){
//     let res = task(a,b)
//     return res;
// }
// let add = sample(4,6,function(x,y){return x+y})
// console.log(add);

// let mul = sample(3,6,(p,q)=> p*q)
// console.log(mul);


//  Yeild function :
// yiels : yield the vlaues
// function* demo(){
//     yield 123
//     yield "Adharsh"
//     yield true
//     yield "hyd"
//     yield 600.9
//     yield "hello"
// }

// let res = demo()
// console.log(res.next().value)
// console.log(res.next().value)
// console.log(res.next().value)
// console.log(res.next().value)
// console.log(res.next().value)
// console.log(res.next().value)

// for(let i=1;i<=6;i++){
//     console.log(res.next().value)
// }

function para(user, address) {
    console.log(`Hello I am ${user} from ${address}`);
}


let username = prompt("Enter username:");
let address = prompt("Enter  address");


para(username, address);