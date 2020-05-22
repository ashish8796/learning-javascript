// A list of integers is sorted in “Wave” order if alternate items are not less than their immediate neighbors (thus the other alternate items are not greater than their immediate neighbors).
// Thus, the array [4, 1, 7, 5, 6, 2, 3] is in Wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.
// The wave-sorted lists has to begin with an element not less than the next, so [1, 4, 5, 3] is not sorted in Wave because 1 < 4
// Your task is to implement a function that takes a list of integers and sorts it into wave order in place; your function shouldn't return anything.

// waveSort([1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4])
function waveSort(arr) {
  if (arr[0] < arr[1]) [arr[0], arr[1]] = [arr[1], arr[0]];
  for (let i = 1; i < arr.length; i = i + 2) {
    console.log(i)
    if (arr[i - 1] > arr[i]) {
      // console.log("Ist step")
      if (arr[i] > arr[i + 1]) {
        // console.log("2nd step")
        arr.slice(i + 2, arr.length).forEach((element, index) => {
          if (arr[i] < element) {
            // console.log(element)
            [arr[i + 1], arr[index + 3]] = [arr[index + 3], arr[i + 1]]
          }
        });
      }
    }
    
    else if (arr[i - 1] <= arr[i]) {
      let stamp = true;
      arr.slice(i + 1, arr.length-1).forEach((element, index) => {
        if (stamp) {
          if (arr[i] < element) {
            // console.log(element, index, i)
            let temp = arr[i];
            arr[i] = element;
            arr[i + index + 1] = temp;
            console.log(arr)
            stamp = !stamp;
          }
        }
      })
    }
  }
  console.log(arr)
}
waveSort([1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4])