/*
You're now a baseball game point recorder.

Given a list of strings, each string can be one of the 4 following types:

Integer (one round's score): Directly represents the number of points you get in this round.
"+" (one round's score): Represents that the points you get in this round are the sum of the last two valid round's points.
"D" (one round's score): Represents that the points you get in this round are the doubled data of the last valid round's points.
"C" (an operation, which isn't a round's score): Represents the last valid round's points you get were invalid and should be removed.
Each round's operation is permanent and could have an impact on the round before and the round after.

You need to return the sum of the points you could get in all the rounds.
*/

var calPoints = function(ops) {
  let prevRounds = [];
  let score = 0;
  
  const cOperation = () => {
    let lastRound = prevRounds.pop();
    if (lastRound !== undefined) score -= lastRound;
  }

  const dOperation = () => {
    let lastRound = prevRounds[prevRounds.length - 1];
    if (lastRound === undefined) return;
    let double = lastRound * 2; 
    score += double;
    prevRounds.push(double);
  }
  
  const plusOperation = () => {
    let twoRoundsAgo = prevRounds[prevRounds.length - 2];
    let lastRound = prevRounds[prevRounds.length - 1];
    if (twoRoundsAgo === undefined && lastRound === undefined) return;
    if (twoRoundsAgo === undefined && lastRound !== undefined) {
      score += lastRound;
      prevRounds.push(lastRound);
    }
    let sum = lastRound + twoRoundsAgo;
    score += sum;
    prevRounds.push(sum);
  }
  
  for (let i = 0; i < ops.length; i += 1) {
    let current = ops[i];
    if (current === '+') plusOperation();
    else if (current === 'D') dOperation();
    else if (current === 'C') cOperation();
    else {
      score += Number(current);
      prevRounds.push(Number(current));
    }
  }
  return score; 
};
