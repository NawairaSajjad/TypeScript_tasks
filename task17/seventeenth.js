//  Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ["Malaysia", "Maldives", "London", "America", "Italy"];
// • Print your array in its original order.
console.log("Places I want to visit,");
//  for(let i = 0; i < places.length; i++){
//     console.log(places[i])
//  }
console.log(places);
// • Print your array in alphabetical order without modifying the actual list.
//  let countries : string[] = places;
//  countries.sort();
//  countries.forEach(visitingPoint => {
//    console.log(visitingPoint)
//  } )
var sortedArray = __spreadArray([], places, true).sort();
console.log(sortedArray);
// console.log(places.sort());
// • Show that your array is still in its original order by printing it.
places.forEach(function (originalArray) {
    console.log(originalArray);
});
// • Print your array in reverse alphabetical order without changing the order of the original list.
var reverseOrder = __spreadArray([], places, true).sort(function (a, b) { return b.localeCompare(a); });
console.log(reverseOrder);
// • Show that your array is still in its original order by printing it again.
console.log(places);
// • Reverse the order of your list. Print the array to show that its
// order has changed.
console.log(places.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(places.reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("original array sorted in asc order : ".concat(places.sort()));
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("original array sorted in dec order : ".concat(places.sort(function (a, b) { return b.localeCompare(a); })));
console.log(places);
