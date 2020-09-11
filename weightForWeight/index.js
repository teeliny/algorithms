function orderWeight(strng) {
  const strngSplit = strng.split(" ");
  let i = 0;
  let j = 1;
  let result = [];
  while (i < strngSplit.length) {
    let first = parseInt(strngSplit[i]);
    let second = parseInt(strngSplit[j]);
    if (first < second && strngSplit[i] < strngSplit[j]) {
      result.push(strngSplit[i]);
    }
  }
  return result.join(" ");
}
console.log(orderWeight("10377 123 4444 99 2000"));
