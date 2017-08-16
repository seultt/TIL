// Q 문자열 내 p와 y의 개수

// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 대소문자를 구별하지 않으며 s에 'p'의 개수와 'y'의 개수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 'p','y' 모두 하나도 없는 경우는 항상 true를 리턴한다. 예를들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.


// .length를 써도 오류가 안나는 이유? 
//  기본자료형의 값에 대해 Standard Built-in Object의 메소드를 호출할 때, 기본자료형의 값은 연관된 객체(Wrapper 객체)로 일시 변환 되기 때문에 가능
function numPY(s) {
  var s = s.toLowerCase(); // 소문자로 변환
  // 문자의 length만큼 반복
  var p = ''; var y = '';
  for (var i = 0; i < s.length ; i++) {
    // p를 찾아서 개수를 저장 
    if (s[i]==='p') {
      p+=s[i]
    } else if (s[i]==='y')  {
      y+=s[i]
    }
  } return p.length===y.length // 'p'의 개수와 'y'의 개수를 비교
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true


// for 문과 정규 표현식 두개를 사용하여 제출하기