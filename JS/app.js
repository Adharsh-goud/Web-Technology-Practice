// // // // // // //  Hoisting :  moving all the declartions to the top of the current scope
// // // // // // // var std let course const fee

// // // // // // // console.log(std); //undefined
// // // // // // // var std = "junnu"

// // // // // // // // console.lod(course);  // ref err
// // // // // // // let course = 'BE'

// // // // // // // // console.log(fees); // ref err
// // // // // // // const fees =  2000



// // // // // // // document.writeln("happy new year")
// // // // // // // console.log("bye guys....!");

// // // // // // // // declaration
// // // // // // // var a
// // // // // // // // Initialization
// // // // // // // a = 10
// // // // // // // // Re-Initialization
// // // // // // // a = 90
// // // // // // // // Re-declartion
// // // // // // // var a
// // // // // // // console.log(a)

// // // // // // // // decalaration
// // // // // // // let y
// // // // // // // // Initialization
// // // // // // // y = 90
// // // // // // // // Re-Initialization
// // // // // // // y=300
// // // // // // // // Re-declartion
// // // // // // // //!let y
// // // // // // // console.log(y)

// // // // // // // // decalaration
// // // // // // // const z = 10
// // // // // // // // Initialization
// // // // // // // //! z = 111
// // // // // // // // Re-Initialization
// // // // // // // // !z = 222
// // // // // // // // Re-declartion
// // // // // // // //! const z
// // // // // // // console.log(z)


// // // // // // //  ~ datatypes :
// // // // // // // primitive

// // // // // // // 1.string
// // // // // // let empname = "Adharsh"
// // // // // // let role =  'developer'
// // // // // // let address = `hyd`

// // // // // // // typeof - to check the data type of a variable
// // // // // // console.log(typeof empname);
// // // // // // console.log(typeof role);
// // // // // // console.log(typeof address);

// // // // // // // `` ---> template literal -- `${varname}`
// // // // // // console.log(`Hello I am ${empname} working as ${role} in ${address}`);
// // // // // // console.log("Hello I am "+empname+" working as "+role+" in "+address);

// // // // // // // 2.Number :
// // // // // // let age = 21
// // // // // // const salary = 20000.29
// // // // // // console.log(typeof age);
// // // // // // console.log(typeof salary);

// // // // // // // 3. boolean -- true/false
// // // // // // let isdev = true
// // // // // // varismarried =  false
// // // // // // console.log(typeof isdev);
// // // // // // console.log(typeof ismarried);

// // // // // // // 4. Undefined
// // // // // // let company
// // // // // // console.log(typeof company);

// // // // // // // 5. Null : creates empty obj for future use
// // // // // // let project = null
// // // // // // console.log(typeof project);

// // // // // // // 6. bigint : huge data
// // // // // // let sal = 12345n
// // // // // // console.log(typeof sal);

// // // // // // // 7. symbol: creates empty function for future use
// // // // // // let work =  Symbol
// // // // // // console.log(typeof work);



// // // // // // //  non-primitive
// // // // // // // Operators
// // // // // // // 1. Arthmatic operators  : +,-,*,/,%,++,--
// // // // // // console.log(30+90);
// // // // // // console.log(30+'90');
// // // // // // console.log(30-90);
// // // // // // console.log(30*90);
// // // // // // console.log(30/90);
// // // // // // console.log(30%90);

// // // // // // let a = 10 //11
// // // // // // // +=a and a++
// // // // // // console.log(a++);
// // // // // // console.log(++a);

// // // // // // // let a = 20
// // // // // // // // --aand --a
// // // // // // // console.log(--a);
// // // // // // // console.log(a--);

// // // // // // console.log(a++ + --a + ++a + a-- + a++ );
// // // // // // //          10  + 10   +11   +11   +10


// // // // // // 2. Assignment operator : =,-,-=,*=,/=,%=
// // // // // // let x = 100

// // // // // // x += 10 // x = x+10
// // // // // // console.log(x);

// // // // // // x -= 10 // x = x-10
// // // // // // console.log(x);

// // // // // // x *= 10 // x = *10
// // // // // // console.log(x);

// // // // // // x /= 10 // x = x/10
// // // // // // console.log(x);

// // // // // // x %= 10 // x = x%10
// // // // // // console.log(x);


// // // // // // 3. comparsion operators : >,<,<=,>=,!=,==,===
// // // // // console.log(20<100);
// // // // // console.log(20>100);
// // // // // console.log(20<=100);
// // // // // console.log(20>=100);
// // // // // console.log(20!=100);
// // // // // console.log(20!=20);

// // // // // // == : compare only values
// // // // // console.log(20 == 20);
// // // // // console.log('20' == 20);

// // // // // // === : compare datatype and values
// // // // // console.log(20 === 100);
// // // // // console.log('20' === 20);

// // // // // 4. Logical operator :  &&,||,!
// // // // // && : all are true - true
// // // // console.log(40<90 && 50<100 && 100>90);

// // // // // || : any one true - true
// // // // console.log(40>90 || 50>100 || 100<90);

// // // // // ! : true - false
// // // // console.log(!(20<10));

// // // // // 5.Ternery operator
// // // // let age = 10
// // // // let res = (age>=18) ? console.log(" You are eligible for vote"):console.log(" You are  not eligible for vote")

// // // //  ! Conditional stmts 
// // // // 1. if 

// // // let bill =  Number(prompt(`Enter bill amount: `))  // string -- "900"--900
// // // console.log(typeof bill);
// // // if(bill>=500 && bill<=5000){
// // //     let dis = 2/100*bill
// // //     alert(`Dear customer your payable amount is Rs.${bill-dis}/-`);
// // // }
// // // else if(bill>=5001 && bill<=10000){
// // //     let dis = 5/100*bill
// // //     alert(`Dear customer your payable amount is Rs.${bill-dis}/-`);
// // // }
// // // else if(bill>=10001 && bill<=50000){
// // //     let dis = 10/100*bill
// // //     alert(`Dear customer your payable amount is Rs.${bill-dis}/-`);
// // // }
// // // else if(bill>=50001){
// // //     let dis = 15/100*bill
// // //     alert(`Dear customer your payable amount is Rs.${bill-dis}/-`);
// // // }
// // // else{
// // //     alert(`Dear customer discount not applied`);
// // // }


// // //  ! switch 
// // let day = Number(prompt('Enter the day in number: '))
// // switch(day){
// //     case 1: console.log(`It's Monday`);
// //         break;
// //     case 2: console.log(`It's Tuesday`);
// //         break;
// //     case 3: console.log(`It's Wednesday`);
// //         break;
// //     case 4: console.log(`It's Thursday`);
// //         break;
// //     case 5: console.log(`It's Friday`);
// //         break;
// //     case 6: console.log(`It's Saturday`);
// //         break;
// //     case 7: console.log(`It's Sunday`);
// //         break;
// //     default:console.log('Invalid input')
// //         break;    
// // }


// //  Loops :  initialization , condition , updation


// // 1. While loop : Entry controlled loop
// let a = 1
// while(a<=10){
//     document.writeln('Hello good morning...');
//     a++;
// }

// // 2. do while loop : Exist controlled loop
// let x = 10
// do{
//     document.writeln('have a good day...')
//     a--
// }
// while(x>0)

// // 3. for loop :
// for(let i=1;i<=10;i++){
//     document.writeln('Today is a great day')
// }


