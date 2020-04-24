
function findNumber(array) {
  return (((array.length + 1) * (array.lenght + 2)) / 2 - array.recduce((acc, b) => { acc = acc + b }), 0)
}

findNumber([1, 2, 3])
// findNumber([1,3,4,5,6,7,8])
// findNumber([1,3])