const leapYears = function(year) {
  if (year % 400 == 0) {
    return true;
  } else if (year % 4 == 0 && !(year % 100 == 0)) {
    return true;
  } else {
    return false;
  }
};

module.exports = leapYears;
/*
function leapYears(year) {
    if (year%400==0) {return true;}
    else if ((year%4==0) && !(year%100==0)) {return true;}
    else {return false;}
};
leapYears(1600); //true
leapYears(700); //false
leapYears(34992); //true
*/
