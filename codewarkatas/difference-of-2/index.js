function twosDifference(input) {
  let result = [];
  let i = null;
  input.sort(((a, b) => { return a - b }))
  const pushFirst = (i) => {
    result.push([input[i], input[i + 1]])
  }

  const pushSecond = (i) => {
    result.push([input[i], input[i + 2]])
  }
  for (let i = 0; i <= input.length - 2; i++) {
    console.log(i)
    oddEvencheck(i);
  }
  //function for odd-odd value
  function oddEvencheck(i) {
    if (input[i] % 2) {
      console.log(input[i])
      if (input[i + 1] % 2) {
        if (input[i] + 2 == input[i + 1]) {
          pushFirst(i)
          console.log(`result: ${result}`)
        }
      }
      if (input[i + 2] % 2) {
        if (input[i] + 2 == input[i + 2]) {
          pushSecond(i)
          console.log(`result: ${result}`)
        }
      }
    }
    else {
      if (input[i + 1] % 2 == 0) {
        if (input[i] + 2 == input[i + 1]) {
          pushFirst(i)
          console.log(`result: ${result}`)
        }
      }
      if (input[i + 2] % 2 == 0) {
        if (input[i] + 2 == input[i + 2]) {
          pushSecond(i)
          console.log(`result: ${result}`)
        }
      }
    }
  }
  console.log(result)
  return result;
}



twosDifference([1, 3, 4, 6])