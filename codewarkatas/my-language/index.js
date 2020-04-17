// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.


function myLanguages(results) {
  let testSores = []
  for(key in results) {
    if(results[key] >= 60 ) {
      testSores.push(results[key])
    }
  }
  testSores.sort((a,b) => { return b-a})
  for (let i = 0; i<testSores.length; i++) {
    for(key in results) {
      if(results[key] == testSores[i] ) {
        testSores[i] = key;
      }
    }
  }
  return testSores;
}

myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93});