// ! 1. Named export : we can export multiple data
// inline export
export let emp1 = 'junnu'
let emp2 = 'Adharsh'

let user = {
    uname : 'jasmin',
    uid : 111,
    address : 'pune'
}

function demo(){
    console.log("Hello I am function");
}

// together export
export {user,demo,emp2}

// ! 2.Default export : we can support one data

let std = 'yashika'

export default std