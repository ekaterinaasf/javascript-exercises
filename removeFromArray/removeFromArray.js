const removeFromArray = function(arr, ...n) {
  for (let i in n) {
    let ind = arr.indexOf(n[i]);
    arr.splice(ind, 1);
  }
  return arr;
};

/* //For testing
function removeFromArray(arr, ...n) {
  for (let i in n) {
    let ind = arr.indexOf(n[i]);
    arr.splice(ind, 1);
  }
  return arr;
}

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log(removeFromArray([1, 2, 3, 4], 7, 2));
*/

module.exports = removeFromArray;
