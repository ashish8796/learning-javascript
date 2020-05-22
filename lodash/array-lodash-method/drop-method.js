// Creates a slice of array with n elements dropped from the beginning.


function drop(array, n) {
  if(n===undefined) {
    array.splice(0,1)
    console.log(array)
    return array
  }
  else {
    array.splice(0,n)
    console.log(array)
    return array
  }
}

drop([1, 2, 3]) 
drop([1, 2, 3], 2)
drop([1, 2, 3], 5)
drop([1, 2, 3], 0)