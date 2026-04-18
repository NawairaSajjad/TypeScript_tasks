"use strict";
// . More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
let guestInvited = ["daniel", "philips", "henry", "finch"];
guestInvited.forEach(invitedPeople => {
    console.log(`Dear ${invitedPeople}, would you like to join me for a dinner`);
});
console.log("yeah !!! we have  got a big table so we can invite 3 more guests :) ");
// • Add one new guest to the beginning of your array.
guestInvited.unshift("robert");
// • Add one new guest to the middle of your array.
guestInvited.splice(guestInvited.length / 2, 0, "Charle");
// • Use append() to add one new guest to the end of your list.
guestInvited.push("liza");
// • Print a new set of invitation messages, one for each person in your list.
guestInvited.forEach(invitedPeople => {
    console.log(`Dear ${invitedPeople}, would you like to join me for a dinner`);
});
