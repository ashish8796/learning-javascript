// Task:
// Given strng a string of digits representing a decimal number the function code(strng) should return the coding of strng as explained above.
// Given a string strng resulting from the previous coding, decode it to get the corresponding decimal string.

let map = new Map();

for (let i = 0; i <= 9; i++) {
  let n = Number(i).toString(2);
  let k = n.length;
  let val = "0".repeat(k-1)+"1" + n;

  map.set(i + '', val)
}

function code(strng) {
  resStr = "";
  strng.split('').forEach(element => {
    resStr += map.get(element)
  });
  return resStr;
}

function decode(result) {
  let ans = "";

  while (result.length != 0) {
    for (let key of map.keys()) {
      if (RegExp("^" + map.get(key)).test(result)) {
        ans += key;
        result = result.replace(map.get(key), "")
      }
    }
  }
  return ans;
}

result = "001101001101011101110011110011111010";
code("55337700")
decode(result);
console.log(code("55337700")===decode(result))