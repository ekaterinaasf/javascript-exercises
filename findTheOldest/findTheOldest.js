var thisYear = new Date().getFullYear();

let findTheOldest = function(obj) {
  let arr = []; //to store ages
  for (let i in obj) {
    if (obj[i].hasOwnProperty("yearOfDeath")) {
      arr.push(obj[i].yearOfDeath - obj[i].yearOfBirth);
    } else {
      arr.push(thisYear - obj[i].yearOfBirth);
    }
  }
  return obj[arr.indexOf(Math.max(...arr))];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941
  }
];

findTheOldest(people).name;

module.exports = findTheOldest;
