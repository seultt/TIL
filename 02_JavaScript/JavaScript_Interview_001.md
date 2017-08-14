 2017-08-08
# JavaScript Interview #1

문제 오답 풀이

## (X) 2. 변수란 무엇인가?
- 내 답변 : 변하는 값

- 정답 :
  변수는 위치(주소)를 기억하는 저장소이다. 위치란 메모리 상의 주소(address)를 의미한다. 즉 변수란 메모리 주소(Memory address)에 접근하기 위해 사람이 이해할 수 있는 언어로 지정한 식별자(identifier)이다.

## (X) 4. var foo = 42 / -0; console.log(foo); 의 결과를 기술하라
- 내 답변 : Nan(Not a number)
- 정답 : -Infinity

## (X) 5. 변수 선언 시 var 키워드를 생략할 수 있다. 이때 변수는 전역 변수가 되는데 그 이유는 무엇인가 
- 내 답변 : 변수 호이스팅에 의해 전역 변수가 된다. 

- 정답 :
  자바스크립트 엔진은 변수 할당문을 만나면 해당 스코프 내에서 해당 변수의 선언을 검색한다. 이때 검색에 실패하면 상위 스코프에서 해당 변수의 선언을 검색한다. 최상위 스코프인 전역에서도 해당 변수 선언의 검색에 실패한 경우, 자바스크립트 엔진은 해당 변수를 전역 변수로 간주하고 선언하기 때문이다.

## (O) 6. 변수 호이스팅이 발생하는 이유를 설명하라
- 내 답변 : 변수가 선언과 초기화를 동시에 하면서 먼저 undifined 라는 값을 할당한다.

- 호이스팅은 var 선언문이나 function 선언문을 해당 Scope의 선두로 옮기는 것을      말한다.
  즉 자바스크립트는 코드를 실행하기 전에 var 선언문과 function 선언문을 해당 스크프의 맨위로 옮긴다.
  ```Javascript
  console.log (foo); // undefined
  var foo = 123;
  console.log (foo); // 123
  { var foo = 456; }
  console.log(foo); // 456
  ```

  정답 :
  var 키워드로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어진다. 즉, **스코프에 변수가 등록**되고 변수는 메모리에 공간을 확보한 후 undefined로 초기화된다. 따라서 변수 선언문 이전에 변수에 접근하여도 Variable Object에 변수가 존재하기 때문에 에러가 발생하지 않는다. 다만 undefined를 반환한다.


## (X) 12. 문자열을 값으로 갖는 name 프로퍼티와 <u>name 프로퍼티를 출력하는 sayName 메소드</u>를 갖는 객체 obj를 생성하라. 단 *객체 리터럴 방식*을 사용한다.
- 내 답변 : var obj = {}; obj.name = sayName();

- 정답 :
```javascript
//리터럴 방식
var obj = {
  name: 'Lee',
  sayName: function() {
  console.log(this.name); // name 프로퍼티를 출력하는 sayName 메소드
  }
};

obj.sayName();
``` 
## (X) 13. 문자열을 값으로 갖는 name 프로퍼티와 <u>name 프로퍼티를 출력하는 sayName 메소드</u>를 갖는 객체 obj를 생성하라. 단, *생성자 함수 방식(함수명 Person)을 사용한다.*

- 내 답변 :  
  function Person { this.name=sayNme();};  
  var obj = new Person();

- 정답 :
```javascript
function Person() {
  this.name = 'Lee';
  this.sayName = function () { //name 프로퍼티를 출력하는 sayName 메소드
  console.log(this.name);
  };
}
var obj = new Person(); //생성자 함수인 obj 객체 생성
obj.sayName();
```
## (X) 15. pass-by-reference와 pass-by-value의 차이점에 대하여 설명하라.
- 내 답변 : pass-by-refrence는 참조 값을 넘겨준다. pass-by-value는 기본          자료형인 값을 넘겨준다.

- 정답 :  
   - pass-by-value
     기본자료형의 값은 값(value)으로 전달된다. 즉, 복사되어 전달된다. 기본자료형은   값이 한번 정해지면 변경할 수 없다.(immutable)
   
   - pass-by-reference
     참조형(object type)의 값은 실제 객체가 아닌 객체에 대한 참조값이다. 즉, 참조형을 할당하면 객체가 복사되어 전달되는 것이 아니라 참조값(reference)가 전달된다. 객체는 변경 가능한 프로퍼티들의 집합이다.
