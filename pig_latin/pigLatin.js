function translate(str) {
  str = str.split(" ");
  let rez = "";
  // let a = str[i](0) == (/[aeiouy]/gi, "");
  for (let i in str) {
    let ch = str[i];
    if (
      ch[0] == "a" ||
      ch[0] == "e" ||
      ch[0] == "i" ||
      ch[0] == "o" ||
      ch[0] == "u" ||
      ch == "y"
    ) {
      rez = rez + " " + str[i] + "ay";
    } else {
      rez = rez + " " + ch.slice(1, ch.length) + ch[0] + "ay";
    }
  }
  return rez.trim();
}
//works for one consonant at the beginning, not for two or more
console.log(translate("apple"));
translate("banana");
translate("eat pie");
console.log(translate("the quick brown fox"));

module.exports = {
  translate
};
