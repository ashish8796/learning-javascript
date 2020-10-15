function validParentheses(parens) {
  let countOpen = 0;
  let countClose = 0;

  for (let i of parens) {
    i === "(" ? countOpen++ : countClose++;
    if (countClose > countOpen) return false
  }

  return parens && countOpen == countClose;
}

validParentheses(")()()()(")