function parseCSV(input, separator, quote) {
  separator = separator || ",";
  quote = quote || '"';
    let res = [[]];
    let openQuote = false;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === quote) {
            if (quote === `"`) {
                res[res.length - 1].push(`'`);
            }
            else {
                res[res.length - 1].push(`"`);
            }
            openQuote = !openQuote;
        }
        else if (!openQuote && input[i] === "\n") {
          res.push([]);
          const aa = res.length;
        } else if (openQuote && input[i] === "\n") {
          res[res.length - 1].push(`\n`);
          const aa = res.length;
        } else {
          if (/[a-zA-Z0-9 ,]/.exec(input[i]))
            res[res.length - 1].push(input[i]);
        }
    }
    let result =[]
    for (let i = 0; i < res.length; i++) {
        const line = res[i].join('');
        const aa = line
          .replace(/\'\'/g, " ")
          .replace(/\'/g, " ")
          .replace(/,,/g, ",");
        result.push(aa.split(','))
    }
    return result;
}
var input = "1\t2\t3\n4\t5\t6";
var input = `one,"two wraps\nonto ""two"" lines",three\n4,,6`;
console.log(parseCSV(input))