// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like toinvite to dinner.
//  Then use your list to print a message to each person, inviting them to dinner.

 let Guest_List:string[] = ["harry","robert","wood","tom","john"]
 //for(let i = 0; i < Guest_List.length ; i++)
 Guest_List.forEach(guest => {
console.log("Mr " + guest.toUpperCase() + " !  you are cordially invited for the annual dinner ")
 } );