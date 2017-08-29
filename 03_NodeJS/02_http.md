# HTTP 

- 웹 브라우저와 웹 서버 간의 통신을 위해 개발된 통신규약
- 최근에는 REST API의 부상와 함께 다른 용도로도 널리 사용됨
  - 모바일 앱 - 서버 간 통신
  - 서버 - 서버 간 통신
- 80번 포트를 기본으로 사용
- 클라이언트의 요청(request)과 
  서버의 응답(response)으로 이루어짐

# HTTPS
- HTTP over SSL
- HTTP 통신을 암호화해 주고받는 내용을 중간에서 가로챌 수  없도록 함
- 443번 포트를 기본으로 사용


# HTTP/2

- 구글의 SPDY 프로토콜을 기반으로 2015년에 확정된 새로운 HTTP 표준(text기반이 아닌 0,1,0,1)
- 속도 개선에 중점을 두고 개발됨
- 반드시 HTTPS를 사용해야 함
- 현재 전체 웹사이트 중 16% 이상이 사용중

작년 8월부터 지금까지 급격하게 사용량이 증가하고있다.

# HTTP 구성요소

## Request & Response

- 웹 브라우저(또는 다른 클라이언트)는 웹 서버에 요청(request)를 보냄
- 그에 따라 서버는 클라이언트에 응답(response)를 보냄
- 웹 브라우저의 경우, HTML 문서 형태의 응답이 오면 해당 문서를 분석한 후, 문서에 포함된 모든 자원에 대한 요청을 각각 추가로 보냄 (이미지, 동영상, 오디오, CSS, JS, 폰트, ...) HTTP 1.1까지는 각각 요청과 응답을 한다.

## Request Methods

- HTTP 명세에는 8 종류가 등록되어 있고, 각각의 역할과 충족해야 하는 성질이 명시되어 있음


(서버가 충족시켜야 하는) 메소드의 성질
- Safe
요청이 서버의 상태에 영향을 미치지 않아야 함. 즉, 읽기 전용(get)
- Idempotent
여러 번 같은 요청을 해도 한 번 요청한 것과 같은 효과여야 함. 네트워크가 불안정해도 안전하게 요청을 보낼 수 있음
- Cacheable
(특정 조건을 만족하면) 응답을 클라이언트에 저장해두었다가 다음 번 요청 때 다시 쓸 수 있음

# URL
1 - 통신
2,3(특별기관에서 인증을 받은 기관에서 파는 도메인),4(특별한 기관이 관리) - 도메인
5 - 도메인 바로 뒤에 80포트
6 - 경로, 내가 얻고 싶은 자료에 서버의 위치
7 - 특별한 자료 부가적인 정보 
8 - 해시, 웹브라우저에서는 아이디가 같은 경우 스크롤을 확내려버린다.


## Percent Encoding
URL은 ASCII 문자(128개의 영문자+특수문자+제어문자)밖에 사용하지 못하기 때문에, non-ASCII 문자를 위한 표현방법이 필요함

Request Target
일반적인 경우 아래와 같은 구조가 사용됨

absolute path + query string + fragment id


Response Status
응답의 성공, 실패 여부와 종류를 나타내며, 
상태 코드 + 상태 메시지의 형태로 응답에 포함됨

HTTP/1.1 200 OK

Status Category
2xx
성공
3xx
추가 작업이 필요함
4xx
실패 - 클라이언트 책임
5xx
실패 - 서버 책임



# Header
- 요청과 응답에 대한 추가 정보를 표현하는 데 사용됨
- 인증, 캐싱, 쿠키, 보안, 내용협상, 프록시 등 웹 표준에 정의된 많은 기능을 제어하는 데 사용됨


## Content Negotiation
요청의 Accept, Accept-Language 등의 헤더를 보고 서버가 그에 맞는 형태의 자료를 응답하는 절차를 content negotiation(내용협상)이라고 함


# Express
- Node.js 생태계에서 가장 널리 쓰이는 웹 프레임워크
- 내장하고 있는 기능은 매우 적으나, 미들웨어를 주입하는 방식으로 기능을 확장하는 생태계를 가지고 있음


## Express 앱의 기본 구조

```
// Express 인스턴스 생성
const app = express() // express 객체 생성

// 미들웨어 주입??
app.use(sessionMiddleware()) // 어떤경로로 들어와도 주입하겠다.
app.use(authenticationMiddleware()) 

// 라우트 핸들러 등록
app.get('/', (request, response) => {
  response.send('Hello express!')
}) // 루트 경로로 요청이 왔을 때 hello express 응답 보내라

// 서버 구동
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
}) //app.listen 으로 듣고 있다. 성공하면 callback을 붙여라

```
## Routing
```
// HTTP 요청 메소드(GET, POST, ...)와 같은 이름의 메소드를 사용
app.get('/articles', (req, res) => {
  res.send('Hello Routing!') // /articles이라는 경로로들어왔을 때 처리해라. content 타입을 셋팅하지 않아도 html으로 인지하여 동적으로 주입한다.
})
// 특정 경로에만 미들웨어를 주입하는 것도 가능 //bodyParserMiddleware() 이 경로에서만 동작하는 추가 기능 주입하는 경우
app.post('/articles', bodyParserMiddleware(), (req, res) => {
  database.articles.create(req.body)
    .then(() => {
      res.send({ok: true}) // json으로 보내고 싶으면 객체로
    })
})
// 경로의 특정 부분을 함수의 인자처럼 입력받을 수 있음
app.get('/articles/:id', (req, res) => {
  database.articles.find(req.params.id) // `req.params`에 저장됨
    .then(article => {
      res.send(article)
    })
}) // articles/:id =>id가   req.params.id로 받는다.
```
## Request 객체(요청)
- req.body
  요청 바디를 적절한 형태의 자바스크립트 객체로 변환하여 이곳에 저장 (body-parser 미들웨어에 의해 처리됨)
- req.ip
  요청한 쪽의 IP
- req.params
  route parameter 
- req.query
  query string이 객체로 저장됨 /이름?값 형태의 객체

## Response 객체(응답)
- res.status(...)
  응답의 상태 코드를 지정하는 메소드 (404,300..)
- res.append(헤더이름, 헤더값, 헤더의 콘텐트 타입 등)
  응답의 헤더를 지정하는 메소드
- res.send(...)
  응답의 바디를 지정하는 메소드 
  인자가 텍스트면 text/html, 객체면 application/json 타입으로 응답

```
if(req.body.name){
    res.send(`hello, ${req.body.name}!`)
  } else {
    res.status(400)
    res.send('400 Bad Request')
  }
```


# Template Language

- Static Web Page
  누가 어떻게 요청하든 미리 저장되어 있던 HTML 파일을 그대로 응답

- Dynamic Web Page
  요청한 사람과 요청한 내용에 따라 각각 다른 내용으로 편집한 HTML을 응답


# EJS

```
<%# index.ejs %> // 주석태그
<html>
  <head>
    <title><%= title %></title> //
  </head>
  <body>
    <div class="message">
      <%= message %>
    </div>
    <% if (showSecret) { %> // if는 자바스크립트 문법으로 showSecret가 true이면 {} 사이에 있는 태그를 넣어라!
      <div>my secret</div>
    <% } %>
  </body>
</html>
```

# Serving Static Files
