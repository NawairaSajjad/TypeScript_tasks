// let makePizza
// makePizza = " your pizza is being processed "
// console.log(makePizza)
// function makeBiryaani(){
//     return "biryani"
// }
// javascript run everything in call  stack contain an additional member to read  code 
// global execution context is an employee ,read variable and function,have some on things
// hoisting : 
// let dish = makeBiryaani()

// console.log(dish)
// on one call you will call the next one ,this process i  known as call back .
// call back is useful when concurrency (non blocking)==> asyncronous

// synchronous fuction step by step execution,timeout function 
// stutas==>   promise is a keyword hold resolve or fulfil  ,reject ,pending,
// promise has 2 method catch and .then
 let sirZiaPromise = new Promise(
    (resolve,reject) => {
return reject("Failed")
    }  );
    sirZiaPromise.then((status)=> {
        console.log(status)
    }).catch((err)=> {
        console.log(err)
    })

    // async function   
    async function checkSirZiaPromise(){

        let promiseVal = await  sirZiaPromise
        console.log(promiseVal)
    }
// //  new keyword generat the photocopy 

// function makePizza(){
// return "your pizza is being preparred "
    
// }
// let makeFrise = () => {
//     return "your pizza is being preparred "
// }
// console.log(makeFrise(),"table 1")
// let myOrder = makePizza()
// console.log(myOrder,"table 2")

// const helloPromise = new Promise((resolve) => {
//     setTimeout(()=> {
//         resolve("hello world ")
//     }, 2000)   //2 second delay
// })
// helloPromise.then((message)=>
//     console.log(message))


// let valueee = 8;
// const conditionalPromise = new Promise((resolve,reject)=> {
//     const success = Math.random() > 0.5;
//     if(success ){
//         resolve("success !");
//     }else{ 
//         reject(new Error("Failure"))
//     }
// })