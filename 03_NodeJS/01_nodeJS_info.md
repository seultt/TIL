# Node.js란?

- REST API 실습 (githup에서 제공하는..)
- Node.js
- Asynchronous JavaScript


## REST API 실습
비밀번호 없이 가능한 API
비밀번호 있어야 가능한 API

postman을 실행
github에서만이 아니라 http의 프로토콜의 기본 방식 요즘은 잘 안 쓰인다.

REST API

http는 프로토콜이다 정보를 교류하는 방식!
http를 까보면 메모장의 텍스트 파일을 보내는 것
GET/user/repsc


Authorization이라는 header가  붙음 
- Basic Auth
- Digest Auth
- Bearer**

LTS 안정적, 실무에서 믿고 쓸 수 있다.
여러가지 버전을 사용할 수 있게 까는 것이 nvm 이다. 


$ node -v 

v8 JavaScript engine
특징
웹이 풍부한 사용자 경험을 가질 수 있는 플랫폼이 됨
최적화를 거처서 실행시킨다.
크롬과 같은 엔진을 쓰고 있다.


Event-driven Programming 
미리 약속된 방식으로 이벤트 핸들러를 작성함으로써 외부 이벤트가 일어났을 대 사용된다.

nodejs는 이벤트 핸들러를 미리 직접 지정할 필요 없이 짜여져 있는 것을 쓴다.

## Non-blocking I/O
blocking I/O동기 방식과 Non-blocking I/O비동기 방식
스레드? 프로그램이다. 라고 일단 알고있자!
Non-blocking는 I/O 성능 향상 & 복잡한 코드

복잡함을 해결해주는 것이 promis 등 다양하게 있다.


## Node.js Module

module.exports 
window나 document 처럼 접근할 수 있고 빈 객체가 형성되어 있다.
exports.-- = module을 생략 가능하나
exports ={} 사용해선 안된다.

nodeJS는 모듈(파일)마다 scope가 따로 존재한다.
다른 모듈에서 쓰려면 exports가 필요하다...

## NPM


## Concurrency**
동시성 모델

프로그램이 생애 주기가 겹치는 여러 실행 과정을 통해 실행된다 하더라도 프로그램의 결과에는 영향을 미치지 않는 성질

생애 주기가 겹치는 여러 실행 과정이 자원을 공유할 때 어떻게 충돌이 생기지 않도록 할 것인가?


Resources
- CPU
- 메모리
- 네트워크
- ...

### Thread

자바스크립트의 동시성
Single-Threaded Event Loop
자바스크립트를 실행시키는 스레드가 하나 뿐임
실행 과정(보통 콜백 연쇄)의 생애 주기가 겹칠 수는 있지만 어떤 경우에도 두 자바스크립트 실행과정이 동시에 실행되는 경우는 없음
내부적으로 메시지 큐를 활용하고 있으나, 모든 처리가 자동으로 이루어짐


- 단점
CPU를 많이 쓰는 작업에 부적절
오래 걸리는 자바스크립트 코드가 실행되면 전체 프로그램에 영향을 미침 (back에서 동시 접속자 수가 현저히 떨어진다.)

이러한 단점 때문에 자바스크립트는 동시성이떨어지므로 오래 걸리는 일은 외부에 위임하고 나중에 결과를 받아 처리해야하며 여러개의 함수로 쪼개서 한번의 함수실행이 금방 끝날 수 있도록 한다.


## Asynchronous JavaScript

나중에 하는 성질을 비동기 
nonblocking(실행순서)과 asynchronous(코드 작성법)는 비슷한 성질이다.

Asynchronous Callback
함수를 호출할 때, 콜백까지 같이 인자에 넣어서 호출하는 비동기 프로그래밍 양식
콜백에서 에러 인자를 받는 방식으로 에러 처리를 함
Node.js 내장 모듈 전체가 이 방식을 사용하도록 만들어져 있음
주의! 모든 콜백이 비동기인 것은 아님

> [1,2,3].map(x => x*x)
[ 1, 4, 9 ] map 이계산이 끝날때까지 기다렸다가 사용


## readFile


try {} catch{} 는 동기식 에러 처리






Path - 운영체제에 상관 없이 node모듈을 사용할 수 있게 해준다.
모르는 부분은 nodejs.org에서 찾아보도록 하자




request.get(`${apiUrl}/user`, option, function (error, response, body) - body에 github API를 담고 있는 객체를 담고 있다. 


## callbackhell을 대응하여 promise를 사용한다.

처음에는 라이브러리 형태로 만들어 졌었고 아직도 많이 쓰인다. npmjs.com에 bluebird가 그 중에 하나이다.

비동기 작업의 결과를 담는 객체
정확히 언제가 될지 모르지만, 결국 성공 또는 실패의 상태를 갖게 됨

```
// tenSec.js
module.exports = function tenSec(value) {
  return new Promise((resolve, reject) => { // new Promise (인자 2개를 받는 콜백을 갖는)객체를 만들어서 반환한다.
    setTimeout(() => {
      resolve(value)
    }, 10000) // resolve()비동기 작업으로 10초 뒤에 value 인자값으로 넘어오는 것을 실행하라 
  })
}
```

```
// REPL
> const tenSec = require('./tenSec')  // require 함수가 저장
> const p = tenSec(1) 
> p // 만든지 10초가 지나기 전
Promise {
  [pending], // 아직 비동기 연산이 끝나지 않았다는 상태값이 보여짐
  ...
> p // 만든지 10초가 지난 후
Promise {
  1,
  ...
```



## .than 
new Promise().then(value) promise의 비동기 처리의 결과값 받고 끝이 아니라 than안의 return 값이 
callback과 달리 들여쓰기 중첩이 적어진다.

than은 promise를 벗기는 역할을 한다.


promis의 가장 큰 장점은 가독성이다!!


.catch(err={
  
}) // error가 나면 안에 있는 error 무군구가 실행?? 
try cach 밑에 코드 실행이 안되고 에러 구문이 실행되는 것과 비슷하다.

## Promise의 특징!!
이미 resolve 된 Promise에도 콜백을 실행할 수 있음
`.then`에 넘겨진 콜백은 무조건 다음 루프에 실행됨 동기식처럼 보이도록 실행

```
> (function() {
... Promise.resolve(1).then(v => console.log(v))
... console.log('done!')
... })()
/* 출력:
done!
1
*/ // 동기식이라면 1이 먼저 출력되어야함
```

ES6 디스트럭쳐링 다시 복습!!


## Async/Await

promis는 라이브러리 Async/Await c샵에서 출발해서 JS에 편하게 추가한 것

Async/Await도 Promis를 사용한다. 
이것을 사용하려면 node.js 8 버전을 이용해야할 수 잇다.

```
const tenSec = require('./tenSec')

async function resolveAfterTenSec() {
  await tenSec() // await는 then을 쓴것과 비슷한 결과값을 나타낸다.
  return 1  // async function은 promis를 반환
}

resolveAfterTenSec().then(value => {
  console.log(value)
})
```

promis는 callback을 넘기는 반면, async/await는 좀더 간결하게 사용할 수 있다. 완전 동기식 코드를 짜는 것처럼 비동기가 된다.

ES2017에서 도입되어, 비동기식 코드를 동기식 코드처럼 쓸 수 있는 문법 제공
Chrome 55, Node.js 8.0.0 부터 사용가능
async function 안에서 반환된 값은 최종적으로 Promise 객체로 변환되어 반환된다.
async function 안에서 쓸 수 있는 await 키워드는 현재 함수를 중단시키고 Promise 객체가 충족될 때까지 기다리지만, 스레드를 block 하지 않는다.(promis than과 비슷)
에러 처리는 동기식 코드처럼 try, catch 블록을 통해서 한다.

아직 async/await를 실무에 도입되지 않는다.
현 강의에서는 promis를 중점으로 다룰것이다.

