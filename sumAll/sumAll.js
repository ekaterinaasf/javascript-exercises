const sumAll = function(start, end) {
  let sum = 0;
  if (
    start < 0 ||
    end < 0 ||
    typeof start !== "number" ||
    typeof end !== "number"
  ) {
    return "ERROR";
  }
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  for (start; start <= end; start++) {
    sum += start;
  }
  return sum;
};

module.exports = sumAll;
