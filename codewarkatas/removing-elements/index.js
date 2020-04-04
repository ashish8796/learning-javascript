// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.
// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];

function removeEveryOther(arr){

  return arr.filter(function (elem, index) {
    console.log(elem, index);
    return index%2 == 0;
  })

  // let newArr = [];
  // let i = 0;
  // for (let j of arr) {
  //   if (i % 2 == 0) {
  //     newArr.push(j);
  //     i++;
  //   }
  // }
}




removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])