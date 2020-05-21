function workOnStrings(a, b) {
  let result = "";
  function swapCasing(a, b) {
    // console.log("a: " + a, "b: "+b)
    for (let char of a) {
      let charCount = 0;
      let isLower = char === char.toLowerCase();
      console.log("isLower: "+isLower)
      b.toLowerCase().split("").forEach(el => {
        console.log("char: " + char , "el: "+ el)
        charCount += el === char.toLowerCase() ? 1 : 0;
      });
      console.log(charCount)
      result += charCount % 2 ? isLower ? char.toUpperCase() : char.toLowerCase() : char;
    }
  }
  swapCasing(a, b)
  swapCasing(b, a)
  console.log(result);
  return result
  
}
res =  "abcDeFGtrzWDEFGgGFhjkWqE";
myRes = 'abcDeFGtrzWDEFGGGFhjkWqE';

workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe")