/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, max = 0) {
  if (i === words.length) return max;
  max = Math.max(words[i].length, max);
  return longest(words, i + 1, max);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = "") {
  if (i >= str.length) return newStr;
  newStr += str[i];
  return everyOther(str, i + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let start = idx;
  let reducing = str.length - idx - 1;
  if (start >= reducing) return true;
  if (str[start] !== str[reducing]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (arr[idx] === val) return idx;
  if (idx >= arr.length) return -1;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1, newStr = "") {
  if (idx < 0) return newStr;
  newStr += str[idx];
  return revString(str, idx - 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") arr.push(obj[key]);
    if (typeof obj[key] === "object") arr.push(...gatherStrings(obj[key]));
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  for (let key in arr) {
    if (typeof arr[key] === "array") {
      return binarySearch(arr[key + 1], val);
    }
    if (arr[key] === val) {
      return +key;
    }
  }
  return -1;
}

// function binarySearch(arr, val, left = 0, right = arr.length) {
//   if (left > right) {
//     return -1;
//   }
//   let middle = Math.floor((right + left) / 2);
//   if (arr[middle] === val) {
//     return middle;
//   }
//   if (arr[middle] > val) {
//     return binarySearch(arr, val, left, middle - 1);
//   }
//   return binarySearch(arr, val, middle + 1, right);
// }

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
