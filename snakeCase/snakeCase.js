const snakeCase = function(str) {
  let rez = "";
  rez = str.split(" ").join("_");
  /* let value = ",";
  rez = rez
    .split(" ")
    .filter(item => item !== value)
    .join(" ");*/
  return rez;
};

module.exports = snakeCase;
