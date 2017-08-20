// # 10. 정수제곱근 판별하기

// nextSqaure함수는 정수 n을 매개변수로 받는다.
// n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 ‘no’을 리턴하는 함수를 작성하라.
// 예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 ‘no’을 리턴한다.


function nextSqaure(n){
  var what = Math.sqrt(n);
  if (Number.isSafeInteger(what)) { 
    return Math.pow(what+1, 2);
  } else{
    return 'no';
  }
}

console.log(nextSqaure(3));   // no
console.log(nextSqaure(121)); // 144