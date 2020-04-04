// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"


function correctPolishLetters (string) {
  // let matchArr = [{'ą':'a'},{'ć':'c'},{'ę':'e'},{'ł':'l'},{'ń':'n'},{'ó':'o'},{'ś':'s'},{'ź':'z'},{'ż':'z'}]
  newStrArr = string.split("");
  let polishAlphaArr = ['ą','ć','ę','ł','ń','ó','ś','ź','ż'];
  let englishAlphaArr = ['a','c','e','l','n','o','s','z','z']
  
  return newStrArr.reduce((acc, v, i) => {
    let polishAphaIndex = polishAlphaArr.indexOf(v);
    let newV = v;

    if (polishAphaIndex !== -1) {
      newV = englishAlphaArr[polishAphaIndex];
    }

    acc += newV;
    return acc;
  }, '')

  // for(let i of newStrArr) {
  //   for (let j of matchArr) {
  //     if(i == Object.keys(j)[0]) {
  //       newStrArr[newStrArr.indexOf(i)] = Object.values(j)[0];
  //     }
  //   }
  // }
  // return newStrArr.join('');
}


result = correctPolishLetters("Jędrzej Błądziński");
console.log(result);