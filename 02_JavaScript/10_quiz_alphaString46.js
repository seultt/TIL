// 4.) 문자열 다루기

// alphaString46 함수는 문자열 s를 매개변수로 입력받는다.
// s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
// 예를들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다

function alphaString46(s) {
  if( 4<=s.length && s.length<=6 ) {
    // if(Number.isInteger(s*1)) {
    //   return true;
    // } else {
    //   return false;
    // }
    s=Number.isInteger(s*1)?'true':'false'
    console.log(s);
  }
  else {
    return false;
  }
}

console.log(alphaString46('a234f'));
console.log(alphaString46('1234567'));