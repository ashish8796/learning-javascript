function generateIntegers(m, n) {
  result = Array.from({length: n - m + 1}, (_,i) => m++);
  console.log(result)
  return Array.from({length: n - m + 1}, (_,i) => m++)
  // let a = []
  // for(let i = m; i <= n; i++) {
  //   a.push(i);
  // }
  // return a;
}

generateIntegers(2, 5)
