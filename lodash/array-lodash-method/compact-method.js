// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

function compact(array) {
  return array.filter(el => Boolean(el))
}

res = compact([0, 1, false, 2, '', 3])
console.log(res)