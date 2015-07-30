module.exports = palindromeChainLength;

function palindromeChainLength (n) {
  var counter = 0;
  var nReverse = parseInt(("" + n).split('').reverse().join(''));
  checkPalindrome(n);

  function checkPalindrome(n){
      if (n !== nReverse) {
        counter++;
        n += nReverse;
        nReverse = parseInt(("" + n).split('').reverse().join(''));
        return checkPalindrome(n);
      }
  }
  return counter;
};