// # 6. 이상한 문자만들기

// toWeirdCase함수는 문자열 s를 매개변수로 입력받는다.
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로
// 바꾼 문자열을 리턴하도록 함수를 완성하라.
// 예를 들어 s가 ‘try hello world’라면 첫 번째 단어는 ‘TrY’, 두 번째 단어는 ‘HeLlO’, 세 번째 단어는 ‘WoRlD’로 바꿔 ‘TrY HeLlO WoRlD’를 리턴한다.

// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

function toWeirdCase(s) {
  // 문자를 스페이스를 기준으로 변수에 담기
  var word = s.split(' ');
  var letters = '';
 
  for (var i = 0; i < word.length; i++) {
    var element = word[i];
    letters += ' '; // 단어별 띄어쓰기 !! 앞의 스페이스를 어떻게 해줘야할지 모르겠음;;;
    
    for (var j = 0; j < element.length; j++) {
      var toStrange = element[j];

      // 각 단어의 짝수번째 인덱스 요소 문자를 대문자, 홀수번째 인덱스 요소는 소문자
      letters += j%2===0? toStrange.toLocaleUpperCase() : toStrange;
      // ===
      // if (j%2==0) {
      // letters += toStrange.toLocaleUpperCase(); } 
      // else { letters += toStrange; }
      // ===
    } 
  }
  return letters;
}

console.log(toWeirdCase('try hello world')); // 'TrY HeLlO WoRlD'
console.log(toWeirdCase('lee hello so world')); // 'TrY HeLlO WoRlD'