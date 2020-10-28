'use strict';
const findBiggestNum = (array) => {
  let biggestNum = 0;
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    if (currentElement >= biggestNum) {
      biggestNum = currentElement;
      index = i;
    }
  }
  return index + 1;
};

// Complete this algo
const minJumps = (arr) => {
  let counter = 0;
  let i = 0;

  while (i < arr.length) {
    let currentNum = arr[i];
    if (currentNum >= arr.length - 1 - i) {
      counter++;
      return counter;
    } else {
      let choices = arr.slice(i + 1, i + currentNum + 1);
      counter++;
      let newIndex = findBiggestNum(choices);
      i += newIndex;
    }
  }

  return counter;
};

module.exports = minJumps;
