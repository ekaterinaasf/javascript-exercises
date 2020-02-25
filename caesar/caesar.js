function coder(code, m, a) {
  //code - ASCII index
  //m - shift
  //a - is the lower end of an interval where resulting ASCII code should be located
  let out;
  if (m >= 0) {
    out = ((code + m - a) % 26) + a;
  } else {
    out = ((code + m - a + 26) % 26) + a;
  }
  return out;
}

function caesar(str, n) {
  let rez = "";
  for (let i in str) {
    let code = str[i].charCodeAt();
    if (code >= 65 && code < 91) {
      code = coder(code, n, 65);
      rez += String.fromCharCode(code);
    } else if (code >= 97 && code < 123) {
      code = coder(code, n, 97);
      rez += String.fromCharCode(code);
    } else {
      rez += str[i];
    }
  }
  console.log("Input: ", str);
  console.log("Shift: ", n);
  console.log("Encrypted output: ", rez);
  return rez;
}
caesar("A", 1);
caesar("Aaa", 1);
caesar("Hello, World!", 5);
caesar("Mjqqt, Btwqi!", -5);

//module.exports = caesar;
