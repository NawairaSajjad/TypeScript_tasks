// Changing Guest List: You just heard that one of your guests can’t make the
//dinner, so you need to send out a new set of invitations. You’ll have to think of
//someone else to invite.
var unableToAttend = "wood";
console.log("".concat(unableToAttend, "   cant make it to dinner . "));
var Guest_List = ["harry", "robert", "wood", "tom", "john"];
var replacement = "Albert";
Guest_List[Guest_List.indexOf(unableToAttend)] = replacement;
Guest_List.forEach(function (guest) {
    console.log("Dear '".concat(guest, "',would you like to join me for dinner ?"));
});
// Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
var guestInvited = ["daniel", "philips", "henry", "finch"];
guestInvited.forEach(function (invitedPeople) {
    console.log("Dear ".concat(invitedPeople, ", would you like to join me for a dinner"));
});
var unableToReach = "philips";
console.log("".concat(unableToReach, " cant make it to dinner ."));
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
var newGuest = "buttler";
guestInvited[guestInvited.indexOf(unableToReach)] = newGuest;
// • Print a second set of invitation messages, one for each person who is still
// in your list.
guestInvited.forEach(function (newlisT) {
    console.log("".concat(newlisT, " would you like to join me for a dinner "));
});
