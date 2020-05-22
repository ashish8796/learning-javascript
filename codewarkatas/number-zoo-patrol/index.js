
function findNumber(array) {
  return (((array.length + 1) * (array.lenght + 2)) / 2 - array.reduce((acc, b) => {return acc = acc + b} ), 0)
}

findNumber([1, 2, 3])
