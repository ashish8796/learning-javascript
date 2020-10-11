// You have an arr of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.


function sortArray(arr) {
  let indexArr = arr.map((v, i) => {
    if (v % 2 !== 0) return { v, i }
  }).filter(v => v !== undefined)

  let oddNumArr = indexArr.map(obj => obj.v).sort((a, b) => a - b)
  indexArr.forEach((obj, i) => {
    arr[obj.i] = oddNumArr[i]
  })
  return arr
}





sortArray([5, 3, 2, 8, 1, 4])