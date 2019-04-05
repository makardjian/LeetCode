const groupAnagrams = (arr) => {
  let result = [];
  let idxObj = {};
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i += 1) {
      newArr[i] = newArr[i].split('').sort().join('');
      let word = newArr[i];
      if (idxObj[word] === undefined) idxObj[word] = [i];
      else idxObj[word].push(i);
  }
  newArr.sort();
  for (let anagram of newArr) {
      all = all.concat(idxObj[anagram]);
  }
  result = result.concat(idxObj[newArr[0]]);
  for (let i = 1; i < newArr.length; i += 1) {
      if (newArr[i] === newArr[i - 1]) continue;
      result = result.concat(idxObj[newArr[i]]);
  }
  return result.map(index => {
      return arr[index];
  });
}
