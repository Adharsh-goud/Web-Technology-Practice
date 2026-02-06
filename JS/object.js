// // //  ! object : It is used to store the data in the form of key val pair

// // // > object literal
// // // syntax : var/let/const object_name ={
// // // key1 : val1,
// // // key2 : val2,
// // // key3 : val3,
// // // .....
// // // }

// // const person ={
// //     pname : "junnu",
// //     age : 20,
// //     place : "Hyd",
// //     phone : 8897762462
// // }
// // console.log(person);

// // // dot(.) notation / bracket([]) notation
// // // ! access : objectname.keyname / objectname["keyname"]
// // console.log(person.pname);
// // console.log(person['place']);

// // // ! update : objectname.keyname = newVal / objectname["keyname"] = newVal
// // person.age = 30
// // person['place'] = 'mumbai'

// // // ! add : objectname.keyname = val / objectname["keyname"] = val
// // person.mailid = 'junnu@gmail.com'
// // person['salary'] = 40000
// // console.log(person);

// // // ! delete : delete objectname.keyname /  delete objectname["keyname"]
// // delete person.age
// // delete person.address
// // console.log(person);


// // // > object constructor
// // let laptop = new Object()
// // laptop.brand = 'Hp'
// // laptop.color = 'black'
// // laptop.cost = 50000
// // console.log(laptop);

// // //  > constructor function 
// // function student(sid,sname,course){
// //     this.sid = sid
// //     this.sname = sname
// //     this.course = course
// // }

// // let std1 = new student(123,"aman","BCA")
// // console.log(std1);

// // let std2 = new student(12,"manu","BE")
// // console.log(std2);


// // > Object methods
// let user = {
//     uname : 'Ram',
//     uid : 111,
//     salary : 25000
// }

// // ! keys(objectname) : returns Array of keys
// console.log(Object.keys(user));

// // ! values(objectname) : returns array of values
// console.log(Object.values(user));

// // ! entries(objectname) : return nested array -- each has key value pair
// console.log(Object.entries(user));

// // ! hasOne(objectname,"keyname")  : check wheather the specifief keyname is present in the obj or not
// console.log(Object.hasOwn(user,"uname"))
// console.log(Object.hasOwn(user,"age"))

// // ! assign(targetobj,obj1,obj2....) : merge multiple objects
// let work = {
//     comp : 'CNX',
//     role : 'software developer',
//     dept : 'IT'
// }

// // Object.assign(user,work)
// // console.log(user);

// let newObj = Object.assign({},user,work)
// console.log(newObj);
// console.log(user);
// console.log(work);

// // ! freeze(obj) : to freeze the obj -- cnnot add,delete and update
// Object.freeze(user)

// // ! isFrozen(obj) : 
// console.log(Object.isFrozen(user));

// // ! ADD
// user.age = 28

// // ! delet
// delete user.uid

// //  > update
// user.salary = 80000

// //  > access
// console.log(user.uid);
// console.log(user);

// // ! seal(obj) : used seal the obj -- cannot add,delete
// Object.seal(user)

// // ! isSealed(obj):
// console.log(Object.isSealed(user));

// // ! add
// user.add = 28

// // ! delete 
// delete user.salary

// let emp = {
//     eid : "TYP123",
//     ename : "Adharsh",
//     salary : 56789.09,
//     age : 22,
//     isDev :  true,
//     skills : ['html','css','js','python','sql'],
//     address : {
//         stste : 'Telangana',
//         city : 'Hyd',
//         pincode : 508116
//     },
//     greet : function(){
//         console.log(`Hello I am ${this.ename} `);
//     }
// }
// console.log(emp.ename);
// console.log(emp.salary);
// console.log(emp.skills);
// console.log(emp.skills[4]);
// console.log(emp.address);
// console.log(emp.address.city);
// emp.greet()

// ! call(),apply(), and bind() : to execute the particular function for multiple objects

let fullname = function(address,salary){
    console.log(`Hello ${this.fname} ${this.lname} working in ${address} and earning around
    ${salary}`);
}

let emp1 = {
    fname : 'Gracy',
    lname : 'M'
}

let emp2 = {
    fname : "junnu",
    lname : 'v'
}

let emp3 = {
    fname : 'Adharsh',
    lname : 'G'
}


// ! call(object,function,args) : to call the function for multiple objects

// fullname.call(emp2,'hyd',85000)
// fullname.call(emp3,'bng',22000)
// fullname.call(emp1,'delhi',55020)



// ! apply() : very similar to call -- function args should be passed in the form of array
// fullname.apply(emp1,['bng',50000])
// fullname.apply(emp2,['chennai',234000])


// ! bind(obj,function_args) : very similar to call and apply ,returns new function
let res1 = fullname.bind(emp1,'hyd',60000)
res1()

let res2 = fullname.bind(emp2,'pune',50000)
res2()