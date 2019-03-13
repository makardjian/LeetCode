// Naive solution O(n) * k time complexity
const mostLivingPeople = (arr) => {
  let yearsObj = {};
  for (let i = 1900; i <= 2000; i += 1) {
    yearsObj[i] = 0;
  }
  // itterate through list and for each person, add a count to yearsObj
  arr.forEach(person => {
    for (let j = person[0]; j <= person[1]; j += 1) {
      yearsObj[j] += 1;
    }
  });
  let max = 0;
  let result;
  for (let key in yearsObj) {
    //this method returns the foremost year with the max number of people alive
    if (yearsObj[key] > max) {
      max = yearsObj[key];
      result = key;
    }
  }
  return result;
}

let result = mostLivingPeople([[1900, 1910], [1910, 1930], [1950, 1990]]) // ==> should return 1910

const optomizedLivingPeople = (arr, start, end) => {
  let births = arr.map(person => {
    return person[0];
  });

  let deaths = arr.map(person => {
    return person[1];
  });

  births.sort((a, b) => {
    return a - b;
  });
  
  deaths.sort((a, b) => {
    return a - b;
  }); 

  let birthPointer = 0;
  let deathPointer = 0;  
  let result = [];
  let count = 0;
  for (let i = start; i <= end; i += 1) {
    if (i === births[birthPointer]) {
      count += 1;
      birthPointer += 1;
      if (count > result[0] || !result[0]) result = [count, i];
    }

    if (i === deaths[deathPointer]) {
      count -= 1;
      deathPointer += 1;
    }
  }
  return result[1];
}

optomizedLivingPeople([[1900, 1910], [1910, 1930], [1950, 2000], [1995, 1999], [1989, 1995]])
// should return 1995
