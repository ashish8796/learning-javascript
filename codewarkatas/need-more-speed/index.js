// Write a function that will take in any array and reverse it.
// Sounds simple doesn't it?

// NOTES:
// Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

// let i = 0;
function reverse(arr) {
  for (let i = 0; e = arr.length; i < e) {
    let temp = arr[i];
    arr[i] = arr[e];
    arr[e] = tamp;
    e = e-1;
    i = i+1;
  }
  //Another Solution
  // [arr[arr.length-1-i],arr[i]] = [arr[i],arr[arr.length-1-i]]
  // i++;
  // console.log(arr)
  // if(i<Math.floor(arr.length/2)) return reverse(arr)
  // else return arr

  //First solution
  // if (arr.length == 0) {
  //   return res
  // }
  // else {
  //   res.push(arr.pop())
  //   return reverse(arr)
  // }

  //Second solution
  // for(let i=0; i<Math.floor(arr.length/2); i++) {
  //   [arr[arr.length-1-i],arr[i]] = [arr[i],arr[arr.length-1-i]]
  // }


  result = reverse(['hello', 'world', 'how', 'are', 'you', '?'])
