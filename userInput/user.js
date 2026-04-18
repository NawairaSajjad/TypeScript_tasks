"use strict";
/*import * as promptSync from 'prompt-sync';
const prompt = promptSync();
const identification: string = prompt('whats your name');
console.log(identification)*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const identification = prompt('Whats your name? ');
console.log(identification);
// const age: string = prompt('enter your age:  ');
// console.log(age);
