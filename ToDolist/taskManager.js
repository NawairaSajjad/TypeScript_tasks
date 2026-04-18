"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let task = [];
let condition = true;
/*    while(condition){
        let todos = await inquirer.prompt([{
            name: "askTask",
            type: "input",
            message: "What do you want to add in your ToDo list ?"
        },
        {
            name: "addTask",
            type: "confirm",
            message: "do you want to add more task ?",
            default: "false"
        },
    ])
  
task.push(todos.askTask)
condition=todos.addTask
console.log(task)

}*/
while (condition) {
    let todos = await inquirer_1.default.prompt([{
            name: "askTask",
            type: "input",
            message: "What do you want to add in your ToDo list ?"
        },
        {
            name: "addTask",
            type: "confirm",
            message: "do you want to add more task ?",
            default: "false"
        },
        {
            name: "deleteTask",
            type: "list",
            message: "You want to delete an item from list",
            choices: ["deletion", "addtask"]
        },
        {
            name: "choice",
            type: "list",
            message: "what do you want to do :",
            choices: ["askTask", "addTask,deleteTask"]
        }
    ]);
    if (todos.choice === "asktask") {
        task.push(todos.askTask);
        condition = todos.addTask;
        console.log(task);
    }
    else if (todos.deleteTask === "addtask") {
        task.push(todos.askTask);
        condition = todos.addTask;
        console.log(task);
    }
    else if (todos.choice === "deleteTask") {
        task.pop();
        condition = todos.addTask;
        console.log(task);
    }
    else
        console.log("done");
    // {
    //     name: "deleteTask",
    //     type: "list",
    //     message: "You want to delete an item from list",
    //     list: ["deletion","addtask"]
    // }
}
