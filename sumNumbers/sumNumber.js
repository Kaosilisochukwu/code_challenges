// function sumNumbers(str) {
//   // your code goes here...
//   let arr = [];
//   for (let i = 0; i < str.length; i += 1) {
//     if (!isNaN(str[i])) {
//       arr.push(str[i])
//     } else if (isNaN(str[i])) {
//       arr.push('j');
//     }
//   }
//   let ans = [];
//   for (let j = 0; j < arr.length; j += 1) {
//     if (!isNaN(arr[j])) {
//       ans.push(parseInt(arr[j]))
//     }
//   }
// ans.reduce((acc, ind) => {
//   return  acc + ind;
//   }, 0)
// }
function sumNumbers(str) {
  // your code goes here...
let arr = str.split('')

  if (str == '') {
    return 0;
  }

  let temp = [];
  let perm = [];
  debugger
  for (let i = 0; i < arr.length; i += 1) {
    if (!isNaN(arr[i]) && !isNaN(arr[i + 1])) {
      temp.push(arr[i]);
    } else if (!isNaN(arr[i]) && isNaN(arr[i + 1])) {
      temp.push(arr[i]);
      let u = temp.join('');
      let m = parseInt(u);
      perm.push(m);
      temp = [];
    }
  }
  let result = perm.reduce((acc, index) => {
    return acc + index;
  }, 0)
  return result;

}

module.exports = sumNumbers