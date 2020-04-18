function divisors(integer) {
  divisionArr = [];
  for (let i = 2; i <= Math.floor(integer / 2); i++) {
    if (!(integer % i)) {
      divisionArr.push(i);
    }
  }
  return divisionArr.length ? divisionArr : `${integer} is prime`;
};





divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"