const snakeCase = function(str) {
  rez = "";
  rez = str.split(" ").join("_");
  return rez;
};

module.exports = snakeCase;
