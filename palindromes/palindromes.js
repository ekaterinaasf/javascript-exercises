const palindromes = function(str) {
  str = str.replace(/[\s\!\,\.]+/gi, "").toLowerCase();
  let back = str
    .split("")
    .reverse()
    .join("");
  if (str.localeCompare(back) == 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = palindromes;

/*
function palindromes(str) {
  str = str.replace(/[\s\!\,\.]+/gi, "").toLowerCase();
  let back = str.split('').reverse().join('');
  if (str.localeCompare(back) == 0) {
    return true;
  } else {
    return false;
  }
};
//palindromes('racecar'); //true
palindromes('Racecar!');//true
palindromes('A car, a man, a maraca.'); //true
palindromes('Animal loots foliated detail of stool lamina.');//true
palindromes('ZZZZ car, a man, a maraca.'); //false
*/
