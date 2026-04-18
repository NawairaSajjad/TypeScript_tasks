"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// console.log(dish)
// on one call you will call the next one ,this process i  known as call back .
// call back is useful when concurrency (non blocking)==> asyncronous
// synchronous fuction step by step execution,timeout function 
// stutas==>   promise is a keyword hold resolve or fulfil  ,reject ,pending,
// promise has 2 method catch and .then
let sirZiaPromise = new Promise((resolve, reject) => {
    return reject("Failed");
});
sirZiaPromise.then((status) => {
    console.log(status);
}).catch((err) => {
    console.log(err);
});
// async function   
function checkSirZiaPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        let promiseVal = yield sirZiaPromise;
        console.log(promiseVal);
    });
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
