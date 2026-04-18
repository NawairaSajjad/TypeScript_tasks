// Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.

let unableToAttend:string = "wood";
console.log(`${unableToAttend}   cant make it to dinner . `);
let Guest_List:string[] = ["harry","robert","wood","tom","john"]
let replacement:string =  "Albert"
Guest_List[Guest_List.indexOf(unableToAttend)] = replacement;
Guest_List.forEach(guest => {
    console.log(`Dear '${guest}',would you like to join me for dinner ?`)
})
// Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
 
let guestInvited: string[] = ["daniel","philips","henry","finch"]
guestInvited.forEach(invitedPeople => {
    console.log(`Dear ${invitedPeople}, would you like to join me for a dinner`)
}) 
let unableToReach: string = "philips";
console.log(`${unableToReach} cant make it to dinner .`)

// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
 let newGuest: string = "buttler"
 guestInvited[guestInvited.indexOf(unableToReach)] = newGuest;

// • Print a second set of invitation messages, one for each person who is still
// in your list.
guestInvited.forEach(newlisT=>{
    console.log(`${newlisT} would you like to join me for a dinner `)
 })