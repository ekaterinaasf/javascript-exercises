const ftoc = function(t) {
  //Deduct 32, then multiply by 5, then divide by 9
  const temp = ((t - 32) * 5) / 9;
  return temp.toFixed(1);
};

const ctof = function(t) {
  //Multiply by 9, then divide by 5, then add 32
  const temp = (t * 9) / 5 + 32;
  return temp.toFixed(1);
};

module.exports = {
  ftoc,
  ctof
};
