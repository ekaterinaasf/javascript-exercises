const repeatString = function(str, t) {
  let rez = "";
  if (t < 0) {
    return "ERROR";
  } else {
    for (let i = 0; i < t; i++) {
      rez += str;
    }
  }
  return rez;
};

module.exports = repeatString;

/*
function repeatString(str, t) {
  let rez = "";
  if (t<0){return "ERROR";} else {
  for(let i=0;i<t;i++){
      rez+=str;
    }
  }
  return rez;
};

repeatString('hey', 3);
repeatString('hey', 0);
repeatString('hey', -1);
*/
