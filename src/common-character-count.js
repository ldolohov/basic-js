const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount (s1, s2) {
  let result = 0;
  const s1Array = s1.split('');
  const s2Array = s2.split('');
  for(let char of s1Array) {
    if(s2Array.includes(char)) {
      const index = s2Array.indexOf(char);
      delete s2Array[index]
      result++
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
