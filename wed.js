/**
 * CSV Parser.  Takes a string as input and returns
 * an array of arrays (for each row).
 *
 * @param input String, CSV input
 * @param separator String, single character used to separate fields.
 *        Defaults to ","
 * @param quote String, single character used to quote non-simple fields.
 *        Defaults to "\"".
 */
// function parseCSV(input, separator, quote) {
//   separator = separator || ",";
//   quote = quote || '"';

// //   let reg = /[a-z]/i;
// //   for (let i = 0; i < input.length; i++) {
// //       if (input[i] === "\n" && reg.exec(input[i - 1]) && reg.exec(input[i + 1])) {
// //           let ans = input.split('').splice(i, 1).join('');
// //           input = ans
// //     }
// //   }
//     const arr = input.split('\n')
// //     return input
//   // let arr = input.split(separator);
 
//   for (let index = 0; index < arr.length; index++) {
//       const length = arr[index].length;
//       if (arr[index][0] === '"' && arr[index][length - 1] === '"') {
//           const val = arr[index].split("");
//           val.splice(val.length - 1);
//           val.splice(0, 1);
//           arr[index] = val.join("");
//       }
//   }
//   console.log(arr);
//   let array = []
//   for (let index = 0; index < arr.length; index++) {
//       let check = []
//       for (element of arr[index]) {
//           let reg = /[a-z0-9 ]/i;
//           if (reg.exec(element)) {
//               check.push(element)
//           }
//       }
//       array.push(check.join(''))
//   }

//   return array

//   let arr = input.split("\n");
//   let array = [];
//   for (const element of arr) {
//     const splitElement = element.split(separator);
//     array.push(splitElement);
//   }
//   for (const element of array) {
//     for (let index = 0; index < element.length; index++) {
//       const length = element[index].length;
//       if (element[index][0] === '"' && element[index][length - 1] === '"') {
//         const val = element[index].split("");
//         val.splice(val.length - 1);
//         val.splice(0, 1);
//         element[index] = val.join("");
//       }
//       if (element[index][0] === " " && element[index][length - 1] === '"') {
//         element[index - 1] += element[index];
//         element.splice(index, 1);
//       }
//     }
//   }
//   return array;
// }

function parseCSV(input, separator, quote) {
  console.log(input, separator, quote);
  separator = separator || ",";
  quote = quote || '"';

  // Create your implementation here
  let arr = input.split("\n");
  let array = [];
  for (const element of arr) {
    const splitElement = element.split(separator);
    array.push(splitElement);
  }
  for (const element of array) {
    for (let index = 0; index < element.length; index++) {
      const length = element[index].length;
      if (element[index][0] === '"' && element[index][length - 1] === '"') {
        const val = element[index].split("");
        val.splice(val.length - 1);
        val.splice(0, 1);
        element[index] = val.join("");
      }
    if (element[index][0] === "'" && element[index][length - 1] === "'") {
        const val = element[index].split("");
        val.splice(val.length - 1);
        val.splice(0, 1);
        element[index] = val.join("");
    }
      if (element[index][0] === " " && element[index][length - 1] === '"') {
        element[index - 1] += element[index];
        element.splice(index, 1);
      }
    }
  }
  return arr;
}
var input = '1,"two was\nup there",3\n4,5,6';
// var input = "$a $$string$$";
// var separator = "$";
console.log(parseCSV(input));