// Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

function difference(array1, array2) {
  let res = [];
  for (let i of array1)  {
    if(array2.every(el => el !== i)) {
      res.push(i)
    }
  }
  console.log(res)
  return res;
}

difference([2, 1], [2, 3])