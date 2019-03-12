
const validParentheses = (s) => {
  let curly = '{';
  let paren = '(';
  let bracket = '[';
  let stack = [];
  let next;

  for (let i = 0; i < s.length; i += 1) {
    let char = s[i];
    if (char === curly) {
      stack.push('}')
      continue;
    } else if (char === paren) {
      stack.push(')');
      continue;
    } else if (char === bracket) {
      stack.push(']');
      continue;
    }
    next = stack.pop();
    if (next === undefined || char !== next) return false;
  }
  if (stack.length) return false;
  else return true;
}


/*
Example 4:
  Input: "([)]"
  Output: false

Example 5:
  Input: "{[]}"
  Output: true
*/ 