//  * Returns a [parts]-length array of equal or nearly equal
//  * integers that add up to [num].

var splitInteger = function(num, parts) {
  let arr = []; 
  while(arr.length < parts) {
    arr.push(Math.floor(num/parts))
  }
  var k = num%parts, i = arr.length-1;
  while(k>0) {
    arr[i] = ++arr[i];
    i--, k--; 
  }
  return arr;
}

splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]