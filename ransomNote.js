// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// /**
//  * @param {string} ransomNote
//  * @param {string} magazine
//  * @return {boolean}
//  */
var canConstruct = function (ransomNote, magazine) {
  //iterator
  let i = 0;
  //split magazine into array to compare each letter
  let magazineArr = magazine.split("");
  //loop over ransom length
  while (i < ransomNote.length) {
    //if letter from ransom is in magazine array,
    //then splice that letter out of magazine array so that it can't be used twice
    if (magazineArr.includes(ransomNote[i])) {
      magazineArr.splice(magazineArr.indexOf(ransomNote[i]), 1);
      i++;
      //if one letter doesn't return an index, then failed
    } else {
      return false;
    }
  }
  return true;
};

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.
