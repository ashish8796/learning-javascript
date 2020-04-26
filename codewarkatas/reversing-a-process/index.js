// A string s has been coded to a string r by the above process (A). Write a function r -> decode(r) to get back s whenever it is possible.

// Indeed it can happen that the decoding is impossible when positive integer num has not been correctly chosen. In that case return "Impossible to decode".

function decode(r) {
  let num = parseInt(r)
  testArr = []
  for (let i = 0; i < 26; i++) {
    testArr.push(String.fromCharCode(i * num % 26 + 97))
  }
  if (Array.from(new Set(testArr)).length !== 26) return "Impossible to decode"
  let index = String(num).length;
  let s = "";
  let strArr = r.slice(index).split('')
  for (let i of strArr) {
    let count = 0;
    while (!(count * num % 26 == i.charCodeAt(0) - 97)) {
      count++;
    }
    s = s + String.fromCharCode(count + 97)
  }
  return s;
}

decode("1273409kuqhkoynvvknsdwljantzkpnmfgf")
