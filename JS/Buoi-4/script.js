/* bài 1 */
function countVowels(str) {
  text = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      text[i] === "a" ||
      text[i] === "e" ||
      text[i] === "i" ||
      text[i] === "o" ||
      text[i] === "u"
    ) {
      count++;
    }
  }
  console.log(str + " số nguyên âm gồm " + count + " ký tự");
}
countVowels("Xin CHAO cac ban");

function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(" ", "");
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      console.log("không đối xứng")
      return false;
    }
  }
  console.log("đối xứng")
  return true;
}

isPalindrome("madam") // → true
isPalindrome("Toi yeu Viet Nam"); // → false


function reverseEachWord(str) {
  let currentWord = "";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    // nếu kí tự str có dấu cách hoặc tới cuối dòng
    if (str[i] === " " || i === str.length - 1) {

      if (i === str.length - 1 && str[i] !== " ") {
        currentWord += str[i];
      }

      for (let j = currentWord.length - 1; j >= 0; j--) {
        result += currentWord[j]
      }

      if (str[i] === " ") {
        result += " "
      }

      currentWord = "";
    } else {
      currentWord += str[i]
    }
  }
  console.log(result)
}
reverseEachWord("Chac ai do se ve"); // → "cahC ia od es ev"


function compressString(str) {
  let result = "";
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  // Thêm nhóm cuối cùng
  result += str[str.length - 1] + count;

  // Nếu chuỗi nén không ngắn hơn chuỗi gốc
  if (result.length >= str.length) {
    console.log(str)
    return;
  }

  console.log(result);
  return;
}

compressString("aaabbbccd"); // → "a3b3c2d1"
compressString("abc");       // → "abc" (vì nén ra "a1b1c1" dài hơn)

/* bài 5 */

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replaceAll(" ", "");
  str2 = str2.toLowerCase().replaceAll(" ", "");

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    let count1 = 0;
    let count2 = 0;

    for (let j = 0; j < str1.length; j++) {
      if (str1[i] === str1[j]) {
        count1++;
      }
    }

    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        count2++;
      }
    }

    if (count1 !== count2) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("nghe si", "sinh e"))   // → true (nếu cùng tập ký tự) 
console.log(isAnagram("nhe si", "sinh e"))   // → true (nếu cùng tập ký tự) 
console.log(isAnagram("hello", "world"));      // → false
