// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
const binaryArrayToNumber = arr => {
  return parseInt(arr.join('').split(' ').toString(),2)
};