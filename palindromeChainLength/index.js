const palindromeChainLength = (n) => {
    let count = 0;
    while (true) {
        const str = n.toString().split("");
        let check = true;
        for (let i = 0; i < str.length / 2; i++) {
          if (str[i] !== str[str.length - 1 - i]) {
            check = false;
            break;
          }
        }
        if (check) return count;
        else {
          const reverse = n.toString().split("").reverse().join("");
          reverseNum = parseInt(reverse);
          n += reverseNum;
          count++;
        }
    }
};

function checkPalid(n, count) {
    
    const str = n.toString().split('');
    let check = true
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            check = false;
            break;
        }
    }
    if (check) return count;
    else {
        const reverse = n.toString().split("").reverse().join("");
        reverseNum = parseInt(reverse);
        n += reverseNum;
        count++;
    }
    return n;
}

console.log(palindromeChainLength(87))