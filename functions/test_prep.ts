import inquirer from "inquirer";

 const askAboutday = await inquirer.prompt
 ([{
    message: "enter a num:",
    type: "input",
    name: "day"

 }]);

//  console.log(askAboutday.values)

function namePrint(invite:string = 'hello',people:string){

let namesOfPuppy: string[] = ['boby','oreo','bella'];
for(let i = 0; i<=2 ; i++){
    console.log(namesOfPuppy[i].toLowerCase(),"as rain expected today,so  you are invited in pool party ");
}
}
// let day: string = 'rainy';
if(askAboutday.day === 'rainy' || askAboutday.day === 'pleasant' || askAboutday.day === 'beautiful'){
    console.log(namePrint('a','b'))
}
else
 if(askAboutday.day === 'sunny'){
    console.log(notPrint())
}

function notPrint(){
    let situation: string = "as day is sunny so no party today."
    return situation
}