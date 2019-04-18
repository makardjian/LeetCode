/*
Example:

input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }

output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }
*/


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
