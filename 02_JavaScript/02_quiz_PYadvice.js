// Q 문자열 내 p와 y의 개수

// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 대소문자를 구별하지 않으며 s에 'p'의 개수와 'y'의 개수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 'p','y' 모두 하나도 없는 경우는 항상 true를 리턴한다. 예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.

//s 는 문자열 , 대소문자는 구분하지 않는다.

//for 사용 방법
// function numPY(s) {
//   var cntP = 0, cntY = 0;

//  s = s ? s : '';

//  var lowerCaseStr = s.toLowerCase();

//  for (var i = 0; i < lowerCaseStr.length; i++) {
//     if (lowerCaseStr[i] === 'p') {
//       cntP++;
//     } else if(lowerCaseStr[i] === 'y') {
//       cntY++;
//     }
//   }

//  return cntP === cntY;
// }

// console.log(numPY('pPoooyY')); // true
// console.log(numPY('Pyy'));     // false
// console.log(numPY('ab'));      // true
// console.log(numPY(' '));
// console.log(numPY(''));        // true
// console.log(numPY());          // true


// 정규 표현식

function numPY(s) {
  s= s ? s : '';
  // return s.match(/p/gi).length === s.match(/y/gi).length; = TypeError: str.reverse is not a function
  return (s.match(/p/gi) ? s.match(/p/gi).length : 0 ) === (s.match(/y/gi) ? s.match(/y/gi).length : 0 ) ;
}

// string 함수  match(regextp[매개 변수]: string or 정규표현식)된 결과를  return type array 배열을 반환한다.

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(' '));
console.log(numPY(''));        // true
console.log(numPY());          // true