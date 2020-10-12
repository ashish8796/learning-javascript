// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year) {
  let century = Math.ceil(year / 100);
  return century + (century < 20 ? "th" : ["th", "st", "nd", "rd"][century % 10] || "th")
}


whatCentury("1999");