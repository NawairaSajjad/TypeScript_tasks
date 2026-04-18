"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const askAboutday = await inquirer_1.default.prompt([{
        message: "enter a num:",
        type: "input",
        name: "day"
    }]);
//  console.log(askAboutday.values)
function namePrint(invite = 'hello', people) {
    let namesOfPuppy = ['boby', 'oreo', 'bella'];
    for (let i = 0; i <= 2; i++) {
        console.log(namesOfPuppy[i].toLowerCase(), "as rain expected today,so  you are invited in pool party ");
    }
}
// let day: string = 'rainy';
if (askAboutday.day === 'rainy' || askAboutday.day === 'pleasant' || askAboutday.day === 'beautiful') {
    console.log(namePrint('a', 'b'));
}
else if (askAboutday.day === 'sunny') {
    console.log(notPrint());
}
function notPrint() {
    let situation = "as day is sunny so no party today.";
    return situation;
}
