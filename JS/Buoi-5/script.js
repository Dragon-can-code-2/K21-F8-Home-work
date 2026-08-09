const arr1 = [3, 7, 2, 9, 9, 5];
let max1 = []
let max2 = []


const words = ["a", "b", "a", "c", "b", "a"];

let uniqueWords = [];
let counts = [];

for (let i = 0; i < words.length; i++) {
    let index = uniqueWords.indexOf(words[i]);

    if (index === -1) {
        // Chưa có
        uniqueWords.push(words[i]);
        counts.push(1);
    } else {
        // Đã có xuất hiện
        counts[index]++;
    }
}

for (let i = 0; i < uniqueWords.length; i++) {
    console.log(uniqueWords[i] + ": " + counts[i]);
}

// bài 3


const arr3 = [1, 2, 2, 3, 4, 1, 5, 6, 7];
let currentLength = 1;
let maxLength = 1;

for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] > arr3[i - 1]) {
        currentLength++;
        if (currentLength > maxLength) {
            maxLength = currentLength
        }
    } else {
        currentLength = 1;
    }
}
console.log(maxLength)


// bài 4
const sentence = "hôm nay trời đẹp";
let splitSentence = sentence.toLowerCase().split(" ")
splitSentence.reverse()
let reverseSentence = splitSentence.join(" ")
console.log(sentence)
console.log(reverseSentence)


// bài 5
function isPalindrome(str) {
    let strFormat = str.toLowerCase().replaceAll(" ", "")
    let left = 0;
    let right = strFormat.length - 1;

    while (left < right) {
        if (strFormat[left] !== strFormat[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("Nam va van"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// bài 6
const nums = [2, 7, 11, 15];
// const target = 9;
const target = 17;

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            console.log("index", i, " và ", j)
        }
    }
}