const checkPalindrome = (x) => {
  let rev = x.toString().split("").reverse().join("");

  return x == rev;
};

console.log(checkPalindrome(123));
