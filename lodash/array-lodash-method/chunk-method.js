// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

function chunk(array, size) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    res.push(array.splice(0,size))

    if(array.length < size) {
      res.push(array);
      console.log(res)
      return res;
    }
  }
  console.log(res)
  return res;
}


chunk([1,2,3,4,5,6,7], 2)