//Given an array of numbers
//Given a number
//This program uses the binary search algorithm to check if the number is in the array
// it returns true if the number is in the array and false if otherwise

function binarySearch(array, number) {
  //Type your solutions here
  let answer = {};
  if (array[0] == undefined) {
    return answer = {
      'index': -1,
      'count': 0
    }
  }
  answer.index = array.indexOf(number);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= number) {
      answer.count = i+1;
      break;
      i = array.length;
    }
  }
return answer;
}

module.exports = binarySearch;