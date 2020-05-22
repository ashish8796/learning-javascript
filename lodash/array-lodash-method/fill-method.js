// Fills elements of array with value from start up to, but not including, end.

function fill(array, value, start = 0, end = array.length) {
  console.log("start: " + start, "end: " + end)
  // console.log(array.fill(value, start, end))
  // return array.fill(value, start, end)
  let newArray = array.map((el, index) => {
    console.log(el, index)
    if ((start <= index && index < end)) {
      return el === undefined ? value : value;
    }
    else {
      return el
    }
  })

  console.log(newArray)
  return newArray
}

var array = [1, 2, 3];

fill(array, 'a')
fill(Array(3), 2)
fill([4, 6, 8, 10], '*', 1, 3)