// 2) 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)

// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.   
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하;는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// hint)  
// 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]


//1~1000까지 숫자 
function loop () {
  var eight = '';
  for(var i = 0; i<10000+1; i++) {
    //  console.log(i);
    var str = i.toString();
    //8이 들어간 숫자 더해서 length값 구하기
    for(var j = 0; j < str.length; j++) {
      if(str[j] === '8') {
        eight += str[j]
      }
    } 
  }
  return console.log(eight.length);
 }


loop();


