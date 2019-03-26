/*
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people 
is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person 
labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  
Otherwise, return -1.
*/

// NON-OPTOMIZED TOWN JUDGE
var findJudge = function(N, trust) {
  if (N === 1) return 1; //edge case for one person.
  
  let individuals = {};
  let cannotBeJudge = {};
  
  for (let i = 1; i <= N; i +=1) {
      individuals[i] = [];
  }
  
  for (let relationship of trust) {
      let truster = relationship[0];
      let trusted = relationship[1];
      cannotBeJudge[truster] = true;
      individuals[truster].push(trusted);
  }

  let possibleJudges;
  for (let key in individuals) {
      if (individuals[key].length > 0) {
          possibleJudges = individuals[key];
          break;
      }
  }

  for (let key in individuals) {
      let trustedPeople = individuals[key];
      possibleJudges = possibleJudges.filter(ele => {
          return (trustedPeople.includes(ele) || ele === Number(key))
      });
  }
  
  if (possibleJudges.length === 1 && !cannotBeJudge[possibleJudges[0]]) {
      return possibleJudges[0];
  } else {
      return -1;
  }  
};
