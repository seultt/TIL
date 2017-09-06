# Ajex
Ajax / CORS / JWT / Fetch API 
___

## Ajax
비동기적인 웹 어플리케이션의 제작을 위한 
클라이언트 측 웹 개발 기법

...을 뜻하나 요즈음은 의미가 변형되어 
웹 브라우저에서 XMLHttpRequest 혹은 fetch를 이용해서 보내는 HTTP 요청을 통칭하기도 함

### Ajax model

http://javascript-coder.com/wp-content/uploads/2014/11/ajax-block-diagram1.jpg


### Ajax의 장점
화면 전체를 다시 로드하지 않고도 내용을 갱신할 수 있어 더 나은 사용자 경험 제공
서버의 응답을 기다리는 동안에도 여전히 웹 어플리케이션을 사용 가능
필요한 자원만 서버에서 받아오게 되므로 트래픽이 줄어듬

### Ajax의 단점
클라이언트 구현이 굉장히 복잡해짐

### Ajax Library Comparison
promise이전에 superagent가 사용되었으나 callback 기반이어서 callback-hell에서 벗어날 수 없었다.

isomorphic-fetch가 react에 많이 쓰임- 기능상 단점이 있음 도중에 취소가 안됨!
axios -우리기수에서는 axios를 사용
superagent 이렇게 세개가 많이 쓰인다.
[http://i.imgur.com/ANJ9h3o.png][http://andrewhfarmer.com/ajax-libraries/]

### Axios
Promise based HTTP client
브라우저와 Node.js에서 모두 사용 가능
XMLHttpRequest, fetch에 비해 사용하기 편하고 기능이 더 많음
참고글: 내가 fetch API를 쓰지 못했던 이유

### HTTP method 복습
GET, POST  
두개만 있었을 때는 post가 전송 전달, 삭제, 수정으로 쓰였다.

GET - 자료 읽기
POST - 자료 생성
PUT(치환) - 통째로 다 바꿈
PATCH(갱신) - 요청한 부분만 갱신
DELETE - 삭제 
그 외에 HEAD / OPTION / TRACE / CONNECT 직접적으로 사용할 일이 거의 없음 (브라우저가...)

### Axios + json-server 예제
glitch에서 db.dfalt.json 복제하여 .data/db.json 이름 변경
- show 라이브 실행
 
 GET /api/todos
 ```js
 // GET
  axios.get('/api/todos')
    // promise... 다시 복습!!
    .then(res => {
    prettyPrint(res.data)  // json서버의 데이타를 가져옴...
    })
 ```

 POST /api/todos
 ```js
 // POST
  axios.post('/api/todos', {title: "ajax 공부"})
    .then(res => {
      prettyPrint(res.data)
    })
 ```
 > content-type:application/json; charset=utf-8

 PATCH /api/todos/3
 ```js
 // PATCH
axios.patch('/api/todos/3', {title: "axios 공부"})
  .then(res => {
    prettyPrint(res.data)
  })
 ```
___
#### GET /api/todos/?title=react

axios 요청 메소드의 두 번째 인자로 config 객체를 넘길 수 있습니다. config 객체를 통해 요청의 쿼리 스트링, 요청 헤더, 쿠키 포함 여부 등 많은 것들을 설정할 수 있습니다.
```js
// config 객체
axios.get('/api/todos', {
  params: { // query string
    title: 'react 공부'
  },
  headers: { // 요청 헤더
    'X-Api-Key': 'my-api-key'
  },
  timeout: 1000 // 1초 이내에 응답이 오지 않으면 에러로 간주
}).then(res => {
    prettyPrint(res.data)
  })
```

#### 응답 객체

응답 객체를 통해 응답의 여러 정보에 접근할 수 있습니다.
```js
// config.params
axios.get('/api/todos/1')
  .then(res => {
    console.log(`status code: ${res.status}`)
    console.log('headers:')
    prettyPrint(res.headers)
    console.log('data:')
    prettyPrint(res.data)
  })
```
___

### 쿠키를 통한 인증 예제
Ajex도 쿠키를 사용할 수 있다!!

> 쿠키
  브라우저가 있고  서버가 있으면 개별적인 요청 마다 어떤 상태를 유지하고 싶을 때 쓰는 것
  브라우저가 저장하는 것이 아닌 서버가 header에 set-cookie에 응답을 보고 쿠기 저장소에 저장 요청이 올때마다 담아서 보낸다.

오늘 예제에서는 Ajex를 이용하여 쿠키를 사용할 것이다.


현재 authMiddleware로 인해 /api 경로로 요청을 해도 401 응답이 오는 상태입니다. /auth 경로로 인증 요청을 보낸 후, 쿠키의 변경사항을 확인하시고 /api 경로로 요청을 보내보세요. 모든 요청을 보낸 후에 로그아웃 요청을 보낸 후, 로그아웃이 잘 되었는지 확인해보세요.

저번 강의 시간에는 form을 이용했지만
이번 시간에는 ajex를 통해 시도

로그인
```js
// 로그인
axios.post('/auth', {
  username: 'fast',
  password: 'campus'
}).then(res => {
  prettyPrint(res.data)
})
```

로그아웃
```js
// 로그아웃
axios.delete('/auth')
  .then(res => {
    prettyPrint(res.data)
  })
```


```js
const jsonServer = require('json-server')
const fs = require('fs')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

// json-server의 구성요소들을 생성합니다.
const server = jsonServer.create()
const router = jsonServer.router('.data/db.json')
const middlewares = jsonServer.defaults()

// 쿠키를 glitch에서 사용하기 위해 필요한 설정입니다.
server.set('trust proxy', 1)

// cookie-session 미들웨어를 주입합니다.
server.use(cookieSession({
  name: 'session',
  secret: 'secret'
}))

// json-server가 제공하는 미들웨어를 주입합니다.
server.use(middlewares)

// 사용자 데이터를 관리할 데이터베이스가 필요한데
// json-server로 관리되는 데이터에 접근하기 어렵기 때문에
// 사용자 데이터만 아래와 같이 따로 배열로 관리합니다.
const users = [
  {username: 'fast', password: 'campus'},
  {username: 'node', password: 'js'},
  {username: 'react', password: 'facebook'}
]

// 인증을 위한 라우트 핸들러입니다.
server.post('/auth', bodyParser.json(), (req, res) => {
  const {username, password} = req.body
  // distruncturing으로 아래 두줄을 위에 한줄로 만들어 줄 수있다.
  //const username = req.body.username
  //const password = req.body.password
  const matched = users.find(user => user.username === username && user.password === password)
  if (matched) {
    req.session.username = username
    res.end() // 아무 바디도 없이 응답을 보내겠다.
    //res.send({ok: true, data: {....}})
    //res.send({ok: true})
  } else {
    res.status(400)
    res.end()
    //res.send({ok: false, error: '400 Bad Request'})
    // res.send({ok: false, messege: '400 Bad Request'})
    // 요청을 하면 응답을 기다리기 때문에 꼭 응답을 보내야한다. render ,reirect, end , send
    // 성공과 실패를 어떻게 보여질 것인가 프론트와 백엔드랑 논의하자
  }
})

// 로그아웃을 위한 라우트 핸들러입니다.
server.delete('/auth', (req, res) => {
  req.session = null
  res.end()
})

// `/api` 경로의 인증을 담당하는 미들웨어입니다. 데이터 통신
function authMiddleware(req, res, next) {
  if (!req.session.username) {
    res.status(401)
    res.send('401 Unauthorized')
  } else {
    next()
  }
}

server.use('/api', authMiddleware, router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})

```
___
## CORS
### Same-origin Policy(동일 출처 정책)
- 웹페이지에서 리소스를 불러올 때, 리소스의 출처가 웹페이지의 출처와 같으면 안전하다고 보고, 출처가 다르면 해당 리소스는 안전하지 않다고 보는 원칙
- 여기서 '출처'란 '프로토콜 + 도메인 + 포트번호'의 결합을 가리킴. 즉, 세 개가 다 같아야 동일 출처라고 할 수 있고, 셋 중에 하나라도 다르면 동일 출처로 간주되지 않음
- 웹 보안의 기본 원칙으로, 웹 브라우저의 많은 요소에 적용됨
### Same-origin Policy 실습
```js
> const child = window.open('http://www.fastcampus.co.kr')
// 새로 열린 웹 페이지의 콘솔에서
> window.foo = 'bar'
// 이전 웹 페이지의 콘솔에서
> child.foo
// 출처가 같다면 접근 가능, 아니면 불가
```
동일 출처가 아닌 통신을 cross orign 통신

### Content-Security-Policy
Content-Security-Policy 응답 헤더를 이용하면, 동일하지 않은 출처에 대한 리소스를 불러올지 말지 결정할 수 있음

### CORS : Cross-Origin Resource Sharing
- 클라이언트 측 cross-origin 요청을 
  안전하게 보낼 수 있는 방법을 정한 표준
- 쉽게 말하면, 스크립트가 전혀 다른 출처를 갖는 API 서버를 사용하려고 하는 상황에서는 뭔가 추가적인 처리를 해주어야 한다는 것!

### Cross-origin 요청의 위험성
아래 상황을 가정해봅시다.

mywebsite.com에서 서비스 중인 웹 사이트는 mywebsite.com/api 에서 REST API를 통해 필요한 정보를 얻습니다. mywebsite.com/api 경로에 대한 인증은 쿠키로 이루어지고 있습니다.

그런데 만약 evil.com 웹 사이트의 스크립트에서 mywebsite.com API에 요청을 마음대로 보낼 수 있다면, 이미 my-website.com 도메인에 대해 브라우저에 저장된 쿠키를 이용해서 API를 마음대로 호출할 수 있을 것입니다.

### Cross-origin 요청 예제
- IE8 이상의 모던 웹 브라우저는 cross-origin 요청에 대해 여러가지 제한을 두고 있음
- cross-origin 요청을 허용하려면, 서버가 특별한 형태의 응답을 전송해야 함
- 만약 서버가 cross-origin 요청을 허용하지 않으면, 웹 브라우저는 에러를 발생시킴

### CORS에 관여하는 응답 헤더
*CORS는 cross-orign 요청에 기본적으로 쿠키가 포함되지 않는다.
- Access-Control-Allow-Origin 허용 여부
- Access-Control-Expose-Headers
- Access-Control-Max-Age
- Access-Control-Allow-Credentials  / 쿠키 헤더 정보
- Access-Control-Allow-Methods / 어떤 특정 http 메소드만 허용
- Access-Control-Allow-Headers / cors cross-origin요청에 허용시킬

### CORS에 관여하는 요청 헤더
- Origin
- Access-Control-Request-Method (preflighted 전용)
- Access-Control-Request-Headers (preflighted 전용)

### CORS - Safe, Unsafe
- GET, HEAD 요청은 safe(읽기 전용)이기 때문에 서버에 요청이 도달한다고 해서 서버의 상태에 영향을 미칠 일은 없으므로, 웹 브라우저는 일단 해당 요청을 보내본다. 만약 서버가 cross-origin 요청을 허용한다고 응답하면 응답을 그대로 사용하고, 그렇지 않으면 에러를 낸다.
- POST, PUT, PATCH, DELETE 등의 메소드는 요청이 서버에 전송되는 것 자체가 위험하므로, 실제 요청을 보내기 전에 서버가 cross-origin 요청을 허용하는지를 알아보기 위해 시험적으로 요청을 한 번 보내본다. 이 요청을 preflighted request라고 한다.
(단, 기존 HTML form의 동작방식인 application/x-www-form-urlencoded 혹은 
multipart/form-data 형태의 POST 요청은 preflighted request가 발생하지 않음)

safe, unsafe 말고도 다른 원인에 의해 preflighted request가 발생하는 경우가 있는데, 
자세한 사항은 MDN 문서를 참고해주세요.

### 복잡하면 그냥...
1. 프론트엔드와 API 서버를 같은 도메인으로 제공한다.
2. 불가피하게 둘을 다른 도메인으로 제공해야 한다면
  - CORS를 허용한다 (cors 미들웨어를 사용하면 간단함)
  - CORS를 허용했으므로 쿠키를 쓰지 않는다.

___
## Access Token & JWT

### 쿠키의 단점
- 쿠키를 지원하는 클라이언트에서밖에 사용할 수 없음
- 적절히 관리되지 않은 쿠키는 보안에 취약하며, 관리를 하려고 해도 CORS 대응이 복잡함

### Token Based Auth
- 토큰이란, 사용자의 자격증명(아이디, 패스워드 등)을 통해 인증이 이루어진 후, 특정 자원에 대한 자격증명으로서 대신 사용되는 인증 수단
- 서버에 요청을 할 때마다 토큰을 요청에 직접 포함시켜서 전송 (주로 Authorization 헤더에 넣어서 전송)
https://i.stack.imgur.com/3NkXs.png

### Cookie vs Token
https://cdn.auth0.com/blog/cookies-vs-tokens/cookie-token-auth.png

Cookie는 브라우저가 자동으로 저장, 요청 한다.

모바일앱과 연동이 되는 서비스가 많아지면서 Token을 이용한 방식이 더 많아 지고 있다.

Token => client javascript가 토큰을 기억하고 저장했다가 인증이 필요할 때 포함시켜 요청을 보낸다. JS 추가적인 작업이 필요 !!

### 토큰 사용의 장점
- 다양한 인증 수단(전화번호, 공인인증서, 생체정보 등)의 인증 결과를 토큰이라는 하나의 수단으로 통일할 수 있음
- 쿠키를 사용하지 않음으로써 CORS 관련 문제를 회피할 수 있음

### 토큰 사용의 단점
- 매 요청에 토큰이 포함되게 되므로 적당히 짧은 길이를 유지해야 함
- 토큰 유출에 대한 대비책이 필요 (토큰에 유효기간을 두거나, 유출된 토큰을 강제로 무효화하는 등의 방법을 사용)
- 쿠키와는 다르게, 클라이언트에서 직접 토큰을 저장하고 관리해야 함

### Web Storage
- 브라우저에서 키-값 쌍을 저장할 수 있는 저장소
- 쿠키에 비해 사용하기 편리하고 저장 가능한 용량도 큼(10MB 가량)
- 브라우저 탭이 닫히면 내용이 삭제되는 sessionStorage, 브라우저 탭이 닫혀도 내용이 유지되는 localStrage가 있음

### Web Storage 실습
- localStorage 전역 객체
>Storage {/wp-admin/admin-ajax.php-wc_cart_hash: "", length: 1}
localStorage.setItem('foo','bar')
undefined
localStorage
Storage {/wp-admin/admin-ajax.php-wc_cart_hash: "", foo: "bar", length: 2}

localStorage.getItem('foo')

- sessionStorage.setItem('fast','bar') 쿠키와 같이 내용이 삭제됨
객체에 매소드 호출하여 값 저장

### 보안 상 주의사항
토큰을 localStorage에 저장하게 되면 자바스크립트로 토큰을 탈취할 수 있게 되므로, 웹사이트에 악성 스크립트를 삽입하는 공격(XSS)에 노출되지 않도록 신경써야 함
직접 DOM API를 사용하는 대신 EJS, React, pug 같은 템플릿 언어를 사용하기만 해도 XSS에 대한 방어는 충분함

**DOM API에 innerHTML 직접 사용을 금지!!**

### JSON Web Token
최근 널리 사용되고 있는 토큰 형식의 표준
토큰 안에 JSON 형식으로 정보를 저장함
보안을 위해 서명( {usernme:'fast}.서명 ) 또는 암호화(CPU를 많이 잡아 먹음)를 사용할 수 있음, 성능을 위해 서명을 쓰는 경우가 많다.

### JWT 실습

Postman 이용

/auth 경로에 username, password를 포함시킨 POST 요청을 보내면 토큰이 반환됩니다. 반환된 토큰을 이용해 /auth 경로에 GET 요청을 보내보세요. 토큰은 Authorization 헤더에 "Bearer [토큰]" 형식으로 포함시키면 됩니다.

Axios 이용

개발자 도구의 콘솔을 여시고, Axios를 이용해 Postman으로 했던 작업을 그대로 다시 해 보세요. 현재 페이지에는 axios라는 이름으로 로딩되어 있습니다.

```js
// header에 정보 넘겨주기
// 토큰 받아오기
let token;
axios.post('/auth', {
  username: 'fast',
  password: 'campus'
}).then(res => {
  token = res.data.token
  console.log(`token: ${token}`)
})
// 토큰으로 요청하기 1
axios.get('/auth', {
  headers: {   // config 객체
    'Authorization': `Bearer ${token}`
  }
}).then(res => {
  prettyPrint(res.data)
})

// 토큰으로 요청하기 2
axios.get('/some-api', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(res => {
  prettyPrint(res.data)
})
// 토큰으로 요청하기 3
axios.post('/count', null, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}).then(res => {
  prettyPrint(res.data)
})
// post put pacht는 정보가 변경되기 때문에 인자로 (경로 , 전송할 정보, config 객체)
// 두번째 인자에 config 객체가 들어가면 안된다!!!
```
Axios Instance

위의 예제에서는 토큰이 포함된 요청을 보낼 때마다 매번 config 객체(axios.get의 두 번째 인자, axios.post의 세 번째 인자)를 통해 헤더를 설정해주고 있습니다. 모든 요청에 똑같은 식으로 헤더를 넣어주는 일은 번거롭고, 또 에러를 일으키기 쉽겠죠? (Don't Repeat Yourself!)

Axios는 이렇게 **중복된 설정을 하지 않도록 해주는 편의도구**를 제공하고 있습니다. 그것을 Axios instance라고 부르는데, 한 번 config 객체를 넘겨서 Axios instance를 생성하면 해당 instance를 통해 보내는 요청에는 config 객체가 자동으로 설정됩니다.


```js
// Axios.create
const authedAxios = axios.create({
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
// 위에 토큰 요청 1,2,3, 과 똑같은 과정이다.
authedAxios.get('/auth').then(res => {
  prettyPrint(res.data)
})
authedAxios.get('/some-api').then(res => {
  prettyPrint(res.data)
})
authedAxios.post('/count').then(res => {
  prettyPrint(res.data)
})
```
## Fetch API

- 웹 브라우저의 XMLHttpRequest를 대체하기 위해 만들어진 새로운 HTTP client 표준
- 비교적 최근에 도입되어 IE 및 구형 안드로이드 브라우저(4.x)는 지원하지 않음
- Fetch Polyfill
- isomorphic-fetch !!Node.js에서도 사용하고 싶은 수요를 충족시키기위해 나옴!!

### Axios vs Fetch API
- Instance와 같이 설정을 재사용하거나 요청중인 연결을 취소하는 등의 편의기능이 Fetch API에는 없음
- 현재로서는 Axios를 사용하는 것이 좋은 선택
- 다만, Axios는 내부적으로 XMLHttpRequest를 사용하고 있는데 **Service Worker - 오프라인을 위해 나온 기술** 등의 웹 최신 기술이 XMLHttpRequest를 지원하지 않으므로, Service Worker를 사용할 예정에 있는 프로젝트에서는 Axios를 사용할 수 없음



___
## NaN
문자열 -> 정수
1. *1
  - undefined *1 => NaN
    const result =NaN
    if(result === NaN) 항상 false가 나온다.
    자기 자신과 다른 값이 NaN이다!!
    NaN === NaN (false가 나온다.)

    if(Number.isNaN()) 이렇게 해야지 원하는 결과 값이 나온다.

2. parseInt() 에러면 에러가 나게 끔 해야한다.
    ```js
    try{
      paseInt()
    }catch
    ``` 
하는 것이 좋다.


## XSS(cross-site scripting)
articleEl.innerHTML = res.data {
  script태그
}
절대 해서는 안됨!!

articleEl.textcontent = res.data {
  script 태그
}

<% = res.data %>
  <script>=> &lt; script &gt; HTML escaping

{{}} =  &lt; script &gt; HTML escaping
 똑같은 기능

html 이스케이핑 피하는 법
  1. innerHTML 사용안하고 템플릿 언어 쓰기
  2. 쿠키를 잘 모르는 상태에서 사용하지 말고 알고 쓰기
     - CSRF(Corose Site Request Forgery) 기법인, CSRF 토큰 사용 
  3. HTTPS