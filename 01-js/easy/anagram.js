/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const map1 = new Map();
  const map2 = new Map();
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (map1.get(str1[i])) {
      map1.set(str1[i], map1.get(str1[i]) + 1);
    } else {
      map1.set(str1[i], 1);
    }
    if (map2.get(str2[i])) {
      map2.set(str2[i], map2.get(str2[i]) + 1);
    } else {
      map2.set(str2[i], 1);
    }
  }
  for (let val of str2) {
    if (!(map1.get(val) === map2.get(val))) {
      return false;
    }
  }
  return true;
  // return true;
}

module.exports = isAnagram;
