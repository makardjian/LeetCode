const flattenDictionary = (dic) => {
  let result = {};

  const traverseInput = (obj, root = '') => {
      if (root.length && root[0] === '.') root = root.substring(1);
      for (let key in obj) {
          let newKey;
          if (typeof obj[key] !== 'object') {
              if (!root.length) newKey = key;
              else newKey = `${root}.${key}`;
              result[newKey] = obj[key];
          } else {
              traverseInput(obj[key], `${root}.${key}`);
          }
      }
  }
  traverseInput(dic);
  return result; 
}
