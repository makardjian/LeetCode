/*
Given a number, n representing the number of rock paper sciscors games, return an array
of all possible combinations that someone could accross n games.
*/

const rps = (n) => {
  let plays = ['r', 'p', 's'];
  let result = [];

  const traverse = (combo = '') => {
    if (combo.length === n) {
      result.push(combo);
      return;
    }
    for (let i = 0; i < plays.length; i += 1) {
      let currentPlay = plays[i];
      traverse(combo + currentPlay);
    }
  }
  traverse();
  return result;
}
