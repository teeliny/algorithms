function decode (roman) {
  const romanNumeral = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  }
  const romanSplit = roman.split('');
  let sum = 0;
    for (let index = 0; index < romanSplit.length; index++) {
        const presentValue = romanNumeral[romanSplit[index]];
        const nextValue = romanNumeral[romanSplit[index + 1]];
        if (presentValue < nextValue) sum -= presentValue
        else sum += presentValue;
    }
    return sum;
}
console.log(decode("IV"));