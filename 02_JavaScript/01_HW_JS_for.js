//01. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

for(var i = 0; i < 10; i++) {
  if(i%2===0){
    console.log(i);
  }
} 

// 02. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

9,8,7,6...0 
for(var i = 10; i > 0 ; i--) {
  //2를 나눈 나머지 값이 1(홀수)이면 console.log를 실행시켜라
  if (i%2===1){
    console.log(i);
  }
}


// 03. while문을 사용하여 0부터 10까지 정수 중에서 짝수만을 작은 수부터 출력하시오.

var i = 0; //변수 선언
while (i<10) {
  if(i%2===0) {
    console.log(i);
  }
  i++;
}

// 04. while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

var i = 10;
while (i>0) {
  if (i%2===1) {
    console.log(i);
  }
  i--;
}

/*
// 05. 삼각형출력하기

var line = ''; // 빈string 선언
//i가 5보다 작을 때까지(5번) 반복
for(var i=0; i<5; i++) {
  line+='*'; // line = line+'*'
  console.log(line); // console로 출력
}

// 06. 트리 출력하기

var line1 = '';

for(var i = 0; i < 3; i++) {
  line1 +='*';
  console.log(line1);
}
var line2 ='';
for(var i = 0; i < 5; i++) {
  line2 +='*';
  console.log(line2);
}

*/

// 삼각형 라인수
var line = 5;
// 출력용 변수
var star = '';

//삼각형 라인만큼 루프 i=0,1,2,3,4
for (var i = 0; i < line; i++) {
  // 삼각형 star의 수 (i + 1) 만큼 루프
  for (var j = 0; j < i + 1; j++) {
    star += '*';
    // 1번째 라인 i = 0, i + 1 = 1 | j = 0
    // 2번째 라인 i = 1, i + 1 = 2 | j = 0,1
    // 3번째 라인 i = 2, i + 1 = 3 | j = 0,1,2
    // 4번째 라인 i = 3, i + 1 = 4 | j = 0,1,2,3
    // 5번째 라인 i = 4, i + 1 = 5 | j = 0,1,2,3,4
  }
  //개행
  star += '\n'  
} // star = *\n**\n***\n****\n*****\n
console.log(star);




var line = 3;
//출력용 변수
var star = '';
// i = 0, 1, 2
for (var i = 0; i < line; i++) {
  for (var j =0; j < i + 1; j++) {
    star += '*'; // ''+'*' (i+1)씩 반복
  }
  star += '\n'   
}  // star = *\n**\n***\n

line = 5;

for (var i = 0; i < line; i++) {
  for (var j = 0; j < i + 1; j++) {
    star += '*'; // 위의 *\n**\n***\n + '*' (i+1)씩 반복
  }
  star += '\n';     
}  // star = *\n**\n***\n *\n**\n***\n****\n*****\n 

console.log(star);