// 2016년 1월 1일은 금요일이다. 

//2016년 a월 b일은 무슨 요일 일까? 두 수 a,b를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하라.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다.

// 예를 들어 a=5, b=24 일 때 5월 24일은 화요일이므로 TUE를 출력한다.

  //두 수 a, b를 입력받아 2016년 a월, b일 만들기
function getDayName(a, b) {
  var today = new Date(2016, a-1, b); //Date() 생성자 함수 생성으로 지정된 날짜와 시간을 가지는 인스턴스를 반환
  var dayNames = ['(SUN)', '(MON)', '(TUE)', '(WED)', '(THU)', '(FRI)', '(SAT)' ];
  // getDay무슨 요일인지 출력
  // var day = dayNames[today.getDay()];
  // return day;
  // 수정
  retrun dayNames[today.getDay()];
}

console.log(getDayName(5, 24)); //TUE


