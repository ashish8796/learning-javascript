// Creates a slice of array with n elements dropped from the end.

function dropRight(array, n) {
  if (n === undefined) {
    array.splice(-1,1)
    console.log(array)
    return array
  }
  else {
    array.splice(-n, n)
    console.log(array)
    return array
  }
}

dropRight([1, 2, 3])
dropRight([1, 2, 3], 2)
dropRight([1, 2, 3], 5)
dropRight([1, 2, 3], 0)