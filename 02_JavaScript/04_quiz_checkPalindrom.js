 //1. Check Palindrom

//palindrme(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 인자로 전달한 문자열이 palindrome 인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 단, 반드시 1자 이상의 문자열을 인자로 전달한다.

// <내코드>
// function checkPalindrom(str) {

//   // 문자를 배열로
//   var text = str.split('');
//   // 배열 요소의 순서를 반대로
//   var change = text.reverse();

//   var rever = ''; // 반복문을 통하여 리버스된 배열을 스트링으로 전환해준다.
//   for(var i=0; i<change.length; i++) {
//     rever += change[i];
//   }
//   return str === rever; // str 문자와 rever 문자 비교 
// }

// console.log(checkPalindrom('dad')); // true
// console.log(checkPalindrom('mom')); // true
// console.log(checkPalindrom('palindrom')); // false
// console.log(checkPalindrom('s')); // false
// console.log(checkPalindrom('')); // false


// <강사님 코드>
function checkPalindrom(str) {
  return str === str.split('').reverse().join('');
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // true