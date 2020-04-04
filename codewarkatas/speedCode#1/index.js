// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function arrayMadness(a, b) {
  let sumA = a.reduce((acc, x)=>  acc+x**2 ,0);
  let sumB = a.reduce((acc, y) => acc+y**3,0);
  if (sumA > sumB) {
    return true;
  }
  return false;
}

arrayMadness([4,5,6],[1,2,3])