let mes: string = "Hello world "
console.log(mes.toUpperCase());
console.log(mes.toLowerCase());
//number
let userId: number = 345666.5
console.log(userId.toFixed())
//boolean 
let isloggedin: boolean = true 
console.log(isloggedin)
//variable 
//let myname: string
//functions in type script
function addTwo(num: number)
{
    return num  + 2
    
}

function getUpper(val: string){
    return val.toUpperCase()

}
function signup(name:string,email:string ,password:string){}   

getUpper("nawaira")
addTwo(4)
signup("nawairaa","nawairasajjad00@gmail.com","abc123")
export{}