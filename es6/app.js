// ! Rest parameter (...identifier) : improved way to handle the function parameters and it can store idenfinite number of args in the form of array

// function demo(a,b,...r){
//     console.log(a);
//     console.log(b);
//     console.log(...r);
// }

// demo(1,2,3,4,5,6,7,8,9,10)

//! spread operator(..iterable)
// let arr = [10,20,30,40,50,60,70,80,90,100]

// function nums(a,b,c,d,...rest){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(rest);
// }

//! Array destructuring

// let colors = ['white','black','red','blue','green','orange','pink','yellow']

// // ! destructure -- blue,orange,pink
// let[ , , ,s1, ,s2,s3] = colors
// console.log(s1,s2,s3);

// // !destructure -- white,red,green,yellow
// let[a1, ,a2, ,a3, , ,a4] = colors
// console.log(a1,a2,a3,a4);

// let[c1,c2,c3,c4,c5,c6,c7,c8] = colors
// console.log(c1);
// console.log(c2);
// console.log(c3);
// console.log(c4);
// console.log(c5);
// console.log(c6);
// console.log(c7);
// console.log(c8);

//! object destructing
let emp = {
    ename : 'manu',
    eid : 11,
    salary : 2345,
    address : {
        city : 'Hyd',
        state : 'TS'
    },
    skills : ['html','css','js','django','sql','python'],
    role : 'fullstack developer'
}

let {salary,role,ename,skills:[s1,s2,s3,s4],address:{city,state}} = emp
console.log(ename);
console.log(salary);
console.log(role);
console.log(s1,s2,s3,s4);
console.log(city,state);


let {city:empcity,state:empstate} = emp.address
console.log(empcity);
console.log(empstate);