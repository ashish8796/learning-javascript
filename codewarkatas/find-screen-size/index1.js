function findMiddle(str) {
  if(typeof(str)!='string') {
    return -1;
  }
  let numArr = str.split('').filter(el => {
    if (parseInt(el)) {
      return parseInt(el);
    }
    if (parseInt(el) === 0) {
      console.log(parseInt(el))
      return parseInt(el);
    }
  })
  if(numArr.length == 0) {
    return -1;
  }
  let finalVal = numArr.reduce((acc, s) => {
    return acc = acc * Number(s);
  }, 1)
  newStr = String(finalVal);
  len = String(finalVal).length
  
  console.log(numArr);
  console.log(finalVal);
  return len%2==0 ? Number(newStr.slice(len/2-1, len/2+1)) : Number(newStr.split('')[Math.floor(len/2)])
}

let result = findMiddle('5d8jd9fgh/fgh6s.,sdf8sdf9sdf98 3  0');
console.log(result)