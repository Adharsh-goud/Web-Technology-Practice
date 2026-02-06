// // // ! forEach(callback) ; HOF -- by excuye the callback function for each element of the array
// // let stds = ['adharsh','junnu','kalyani','srikanth']
// // stds.forEach((Element,ind)=>{
// //     console.log(`hello ${Element}`);
// // })

// // // ! for of : to iterate over the array
// // let nums = [10,20,30,40,50,60,7,8,9]
// // for (let n of nums){
// //     console.log(n);
// // }

// // // ! for in : to iterate over key of an object
// // let user = {
// //     uname : 'kutty',
// //     agee : 21,
// //     address : 'hyd'
// // }

// // for( let k in user){
// //     // console.log(k);
// //     console.log(user[k]);
// // }

// // ! Date object 
// // let d = new Date()
// // console.log(d);

// // console.log(d.getFullYear());
// // console.log(d.getMonth());
// // console.log(d.getDate());
// // console.log(d.getDay());
// // console.log(d.getHours());
// // console.log(d.getMinutes());
// // console.log(d.getSeconds());

// // ! 10 april 2003
// // d.setFullYear(2003)
// // d.setMonth(3)
// // d.setDate(10)
// // console.log(d)


// //  Math object 

// // ! pow(base,exp)
// console.log(Math.pow(3,2));

// // ! sqrt(num)
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(10));

// // ! cbrt(num)
// console.log(Math.cbrt(8));
// console.log(Math.cbrt(80));

// // ! round(num) : round up the number to the nearest integer
// console.log(Math.round(9.3));
// console.log(Math.round(59.6));
// console.log(Math.round(11.2));
// console.log(Math.round(22.98));

// // ! ceil(num) : round up the number to the nearest highest integer 
// console.log(Math.ceil(46.67));
// console.log(Math.ceil(46.1));
// console.log(Math.ceil(46.99));

// // ! floor(num) : round up the number to the nearest lower integer
// console.log(Math.floor(45.67));
// console.log(Math.floor(45.1));
// console.log(Math.floor(45.99));
// console.log(Math.floor(-45.67));

// // ! trunc(num) : return only integer part
// console.log(Math.trunc(40.67));
// console.log(Math.trunc(3.7));
// console.log(Math.trunc(-1.47));
// console.log(Math.trunc(4.67));

// // ! max(num1,num2,num3,.....) : returns maximum num
// console.log(Math.max(10,200,300,4567,-9000,));

// // ! min(num1,num2,num3,.....) : returns maximum num
// console.log(Math.min(10,200,300,4567,-9000,));

// // ! random() : generate random number between 0-1
// console.log(Math.random());



// otp generation 
// function generateOtp(){
//     let text = '1234567890'
//     let otp =''

//     for(let i=1;i<=4;i++){
//         otp += text[Math.floor(Math.random()*text.length)];
//     }
//     alert(`The OTP is ${otp}`)
// }

// generateOtp()

// Math.random() /0.234
// Math.random()*text.length /2.34
// Math.floor(Math.random()*text.length)  /2
//  text[Math.floor(Math.random()*text.length)]  /3

// ! string methods
let str = "hello good morning"
console.log(str.length);

//  ! slice(start_index,end_index) : extract the part of the string
console.log(str.slice(2,6));
console.log(str.slice(2,9));
console.log(str.slice(6));
console.log(str.slice(-4));


// ! substring(start_index,end_index) : it won't accepts nrgtive ondex
console.log(str.slice(2,6));
console.log(str.slice(2,9));
console.log(str.slice(6));
console.log(str.slice(-4));

// ! substring(start_index,len_of_str) :
console.log(str.substr(4,10));

// ! replace(old_str,new_str) : replace the part of the string
console.log(str.replace('morning','evening'));
console.log(str.replace('0','❤️'));

// ! replaceAll(old_str,nrw_str) : replace the part of the string
console.log(str.replaceAll('0','❤️'));

// ! trim() : remove the start and end space
// trimstart() and trimend()
let text = "      have a good day         "
console.log(text.trim());
console.log(text);

// ! padstart(len_of_res_str,char) : xxxxxxxx35
let phone = '35'
console.log(phone.padStart(10,'x'));


// !PadEnd(len_of_res_str,char) : 2345 XXXX XXXX
let a = '2345'
console.log(a.padEnd(12,'x'))



