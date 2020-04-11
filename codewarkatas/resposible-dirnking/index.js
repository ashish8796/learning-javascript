// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.


function hydrate(s) {
  sum = 0;
  // for(let i of s.split('')) {
  //   if(Number(i)) {
  //     sum =+ Number(i);
  //   }
  // }

  s.split('').forEach(element => {
    if (Number(element)) {
      sum += Number(element);
    }
  });

  return sum > 1 ? `${sum} glasses of water` : `${sum} glass of water`;
}

hydrate("1 beer")