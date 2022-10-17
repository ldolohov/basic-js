const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform (arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const result = [];

  function doubleNext(m) {
    const temp = arr[m + 1];
    if(temp !== undefined) {
     result.push(temp);
    }
  }
  function discardNext() {
    m+=1;
  }
  function doublePrev(m) {
    const temp = result[m - 1];
    if(temp != undefined) {
      result.push(temp)
    }
  }
  function discardPrev() {
    result.pop();
  }

  const transformFunc = {
    '--double-next': doubleNext,
    '--double-prev': doublePrev,
    '--discard-next': discardNext,
    '--discard-prev': discardPrev,
  }

  for(var m = 0; m < arr.length; m++) {
    if(typeof arr[m] == "string") {
      transformFunc[arr[m]](m);
    }
    else {
      result.push(arr[m]);
    }
  }
  return result;
}

module.exports = {
  transform
};
