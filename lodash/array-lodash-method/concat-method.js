// Creates a new array concatenating array with any additional arrays and/or values.

function concat(array, ...arguments) {
  let newArray = [...array];
  for(let i=0; i<arguments.length; i++) {
    if(Array.isArray(arguments[i])) {
      newArray = newArray.concat([...arguments[i]])
    }
    else {
      newArray.push(arguments[i])
    }
  }
  console.log(newArray)
  return newArray;
}

var array = [1];
concat(array, 2, [3], [[4]])