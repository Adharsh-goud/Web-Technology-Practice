// ! This is main js -- import the code
// always import stmt should be at the top
// 2 ways to import and 

// ! 1.Named import  : we can import multiple data
//  syntax : import {varname1,varname2,varname3,.....} from "path_of_external_file.js"

import {emp1, emp2, user, demo} from "./app1.js";
import {arr , greet} from "./app2.js";

console.log(emp1);
console.log(emp2);
console.log(user);
demo()

console.log(arr);
greet("srikanth")

// ! 2.Default import : we can import only one data
//  syntax : import varname from "path_of_external_file.js"

import student from "./app1.js";
console.log(student);
