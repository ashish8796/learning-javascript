// As you may know, once women pass their teens, they should only be celebrated for their 20th or 21st birthday, forever. With some maths skills, that's totally possible - you only need to select the correct number base!

// For example, if she turns 32, that's exactly 20 - in base 16... Already 39? That's just 21, in base 19!

// Your task is to translate the given age to the much desired 20 (or 21) years, and indicate the number base, in the format specified below.

// Note: input will be always > 21

function womensAge(n) {
  console.log(Math.floor(n/2))
  return  `${n}? That's just ${Math.floor(n/2)+ n%2}, in base ${Math.floor(n/2)}!`;
}
womensAge(83)