"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let myname = "nawaira";
console.log("Uppercase : ", myname.toUpperCase());
console.log("Lowercase : ", myname.toLowerCase());
console.log("Titlecase:", myname.charAt(0).toUpperCase() + myname.slice(1).toLowerCase());
