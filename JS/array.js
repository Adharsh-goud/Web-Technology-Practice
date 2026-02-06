// // // ! Array : Collection of multiple elemnts

// // // declartion : 2 ways
// // // 1. Array literal
// // // syntax : var/let/const array_name = [val1,vval2,val3,......]
// // const arr = [10,20,30,40,50,60,70]
// // console.log(arr);
// // console.log(arr.length);

// // let std = [143,'Adharsh','hyd',456.90,true]
// // console.log(std);

// // // !access
// // console.log(arr[2]);

// // // !update
// // arr[1] = 2000
// // console.log(arr);

// // // !add
// // arr[7] = 500
// // console.log(arr);

// // // !delete
// // delete arr[0]
// // console.log(arr);

// // // 2. Array constructor
// // //let nums = new Array(1,2,3,4,5,6,7,8,9)
// // let nums = new Array(3)
// // nums[0] = 1
// // nums[1] = 2
// // nums[2] = 3
// // nums[3] = 4
// // nums[4] = 5
// // nums[5] = 6
// // console.log(nums);


// // ! Array Methods
// let flipkart = ['mobiles','books','laptop','shoes','cloths']
// console.log(flipkart);

// // !push(val1,val2,val3,....) : to add multiple elements at the end of the array
// flipkart.push('crocks','shirts','table','bottle')
// console.log(flipkart);

// // !unshift(val1,val2,val3,....) : to add multiple elements from the starting of the array
// flipkart.unshift('ring','belt','watch')
// console.log(flipkart);

// // ! pop() : delete the last element
// flipkart.pop()
// flipkart.pop()
// console.log(flipkart);

// // ! Shift() : delete the first element
// flipkart.shift()
// console.log(flipkart);

// // ! splice(start_index,delete_count,replacement_elements) : add and delete the array element at the mid of the array
// // ['belt', 'watch', 'mobiles', 'books', 'laptop', 'shoes', 'cloths', 'crocks', 'shirts']

// //  adding and deleting
// // flipkart.splice(2,3,'bag','kurtha')
// // ! deleting
// // flipkart.splice(4,2)
// // adding
// flipkart.splice(2,0,'saree','jenas')
// console.log(flipkart);

// // !slice(start_index,end_index) : extract the part of the array
// // ['belt', 'watch', 'saree', 'jenas', 'mobiles', 'books', 'laptop', 'shoes', 'cloths', 'crocks', 'shirts']
// // let slicearr = flipkart.slice(3,8)
// let sliceArr = flipkart.slice(8)
// console.log(sliceArr);
// console.log(flipkart);

// // ! indexOf(element) : returns the indesx position of the specified element
// console.log(flipkart.indexOf('book'));
// console.log(flipkart.indexOf('laptop'));

// // ! includes(element) : check the specified element is present in the array or not
// console.log(flipkart.includes('laptop'));
// console.log(flipkart.includes('book'));

// // !at(index) : return the element present in the specified index
// console.log(flipkart.at(6));
// console.log(flipkart.at(60));

// // ! join() : It is used to join all the elements of an array into  string.
// console.log(flipkart.join());
// console.log(flipkart.join(''));
// console.log(flipkart.join('-'));
// console.log(flipkart.join('❤️'));

// // ! toString() : It is used to join all elments of an array into a string without separators
// console.log(flipkart.toString());
// console.log(flipkart.toString(''));
// console.log(flipkart.toString('-'));
// console.log(flipkart.toString('💕'));

// // !concat() : merge multiple array
// let amazon = ['kitchen app','washing machine','mats']
// console.log(flipkart.concat(amazon));
// console.log(flipkart);
// console.log(amazon);


// // ! Array.form()
// let str1 = "hello good morning"
// console.log(Array.from(str1));


// let std = [123,'manu','bng','manu@gmail.com','9908876765']
// // manu6765
// let name = std[3].split('').slice(0,4);
// console.log(name)
// let number = std[4].split('').slice(6);
// console.log(number)
// let password = name.concat(number).join('')
// console.log(password);

//  ! filter(), map() and reduce()
let nums = [1,2,3,4,5,6,7,8,9]

//  ! filter() : to filter the array based upon the condtion
let even_nums = nums.filter(function(element,ind){
    if(element%2 == 0){
        return element
    }
})
console.log(even_nums);

//  ! map() : map each array element
let mappedArr = nums.map((value,i)=>{
    return value*19
})
console.log(mappedArr);

//  ! reduce() : to reduce entire array into single value
let res = nums.reduce((res,value)=>{
    return res+value
},0)
console.log(res);
