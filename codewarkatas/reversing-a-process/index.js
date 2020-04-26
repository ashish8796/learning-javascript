// A string s has been coded to a string r by the above process (A). Write a function r -> decode(r) to get back s whenever it is possible.

// Indeed it can happen that the decoding is impossible when positive integer num has not been correctly chosen. In that case return "Impossible to decode".

function decode(r) {
  let num = parseInt(r)
  let index = String(num).length;
  let s = "";
  let strArr = r.slice(index).split('')
  for(let i of strArr) {
    let count = 0;
    while (!(count*num %26 == i.charCodeAt(0)-97)) {
      console.log(`count:${count}, i:${i.charCodeAt(0)-97}`)
      count++;
    }
    s = s + String.fromCharCode(count+97)
    // if (count == i.charCodeAt(0)-97 && count != 0 && i.charCodeAt(0)-97 != 0) return "Impossible to decode"
  }
  console.log(s)
  return s;
}
// uogbucwnddunktsjfanzlurnyxmx
// kuqhkoynvvknsdwljantzkpnmfgf
decode("105860ymmgegeeiwaigsqkcaeguicc")
// console.log(result==decode("1273409kuqhkoynvvknsdwljantzkpnmfgf"))