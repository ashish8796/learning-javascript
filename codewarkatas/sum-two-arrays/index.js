// Your task is to create a function called sum_arrays() in Python or addArrays in Javascript, which takes two arrays consisting of integers, and returns the sum of those two arrays.

// The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an integer for this kata, meaning it would equal 329. The output should be an array of the the sum in a similar fashion to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

function addArrays(array1, array2) {

  let arrayToNumber1 = array1.length && parseInt(array1.join(''));
  let arrayToNumber2 = array2.length && parseInt(array2.join(''));
  let sum = arrayToNumber1 + arrayToNumber2;

  let newArr = [...String(Math.abs(sum))].map(e => parseInt(e));
  return sum ? [] : [Math.sign(sum) * newArr[0], ...newArr.slice(1)]
}

const addArrays = (arr1, arr2) => (arr1.length || arr2.length) ? `${+arr1.join`` + +arr2.join``}`.match(/\-?d/g).map(Number) : [];




addArrays([-6, 7], [1, 0])