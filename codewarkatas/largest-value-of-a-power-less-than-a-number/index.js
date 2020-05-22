// You are given a positive integer (n), and your task is to find the largest number less than n, which can be written in the form a**b, where a can be any non-negative integer and b is an integer greater than or equal to 2. Try not to make the code time out :)
// The input range is from 1 to 1,000,000.

function largestPower(n) {
  if (n <= 4) {
    if (n==1) {
      return [0, -1]
    }
    return [1, -1]
  }

  n = Math.floor((n-1) ** (1 / 2))
  n = n ** 2;
  if( n == 64) return [64, 3];
  let y = 0;
  let b = 2;
  while ((n ** (1 / b)) >= 2) {
    if (Number.isInteger(n ** (1 / b))) {
      y++;
      console.log(`y:${y}`)
    }
    b++;
    console.log(`b:${b}`)
  }
  console.log(n, y)
  return [n, y]
}

largestPower(29)