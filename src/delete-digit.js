const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(num) {
  const arr = String(num).split('')
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    const copyArr = String(num).split('')
    copyArr.splice(i, 1);
    const sum = copyArr.join('');
    if(+sum > result) {
      result = +sum;
    }
  }
  return result;;
}

module.exports = {
  deleteDigit
};
