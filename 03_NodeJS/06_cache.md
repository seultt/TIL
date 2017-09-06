# cashe
HTTP Cache
GraphQL
Single-page Application


## HTTP Cache

1. (무기 등의) 은닉처
2. 은닉하다

컴퓨터 분야에서의 캐시는 (주로 접근 속도의 개선을 위해) 데이터를 미리 복사해 놓는 임시 저장소, 혹은 그 임시 저장소에 데이터를 저장하는 행위를 가리킴

'cache' 혹은 'caching'이라는 용어 자체는 특정 기술을 가리키는 것이 아니라, 접근 속도를 개선하기 위해 따로 저장소를 두는 '방법'을 가리킴

컴퓨터의 아주 많은 부분(CPU, GPU, HDD, 네트워크, 웹, 데이터베이스...)에서 사용되고 있음


## HTTP Cache
- 자원의 효율적 로딩을 위한 웹 표준
- 서버에서 가져온 자원(HTML, CSS, JS, 이미지, ...)을 가까운 곳(브라우저, 혹은 다른 서버)에 저장해놓고 재사용
- 캐시를 할 것인지 말 것인지, 어떻게 할 것인지를 결정하는 규칙이 복잡하고, 브라우저마다 조금씩 다름

## Common Problem
캐시된 자원과 실제 자원의 내용이 달라지는 문제를 
어떻게 해결할 것인가?

## Solution
Expiration (만료)
정해진 시간이 지나면 캐시가 자동으로 삭제되도록 설정
Validation (검증)
서버에 요청을 보내서 캐시를 계속 사용할 수 있는지 확인

## Cache 관련 헤더
Cache-Control
(요청, 응답) 캐시와 관련된 다양한 기능을 하는 지시자를 포함. no-cache, max-age가 많이 사용됨. no-cache, max-age=0 지시자는 캐시를 사용하지 않도록 하거나, 캐시를 아직도 쓸 수 있는지 검증하기 위해 사용됨 (각각의 자세한 의미)
ETag
(응답) 캐시의 검증을 위해 사용되는 자원의 식별자. 주로 자원의 해시값이 사용되나, 마지막으로 수정된 시각, 혹은 버전 넘버를 사용하기도 함
Expires
(응답) 캐시를 만료시킬 시각을 서버에서 명시적으로 지정

Last-Modified
(응답) 원래 자료가 마지막으로 수정된 시각
If-None-Match
(요청) 검증을 위해 사용됨. 이전에 저장해두었던 자원의 ETag 값을 If-None-Match 헤더의 값으로 요청에 포함시켜서 보내면, 서버는 해당 경로에 있는 자원의 ETag와 비교해보고 자원의 전송 여부를 결정
If-Modified-Since
(요청) 검증을 위해 사용됨. 이전에 저장해두었던 자원의 Last-Modified 값을 If-Modified-Since 헤더의 값으로 요청에 포함시켜서 보내면, 서버는 해당 경로에 있는 자원의 Last-Modified와 비교해보고 자원의 전송 여부를 결정

## 브라우저 실습

Axios 튜토리얼

크롬 콘솔을 열어서 다음을 차례대로 실행해 보세요. 또 Network 탭에서 실제로 어떤 요청이 일어났는지 확인하세요.

prettyPrint는 결과를 예쁘게 출력할 수 있도록 제가 미리 짜놓은 함수입니다.

GET /api/todos
Status Code:304 변경되지 않았다.  header만 왓다갔다 하고 html, body은 포함X

검증 : 서버에 식별자를 보내고 달라지지 않으면 304를 보낸다.
rs header
etag:W/"bd4-15e54ec558e"
rq header
if-none-match:W/"bd4-15e54ec558e"

axios.min 
https://cdnjs.cloudflare.com/ajax/libs/axios/0.16.2/axios.min.js 버전이 바뀌지 않는 이상 절대 변경 되지 않아
200
예전에 요청 보낸 것
현재 rq를 보낸 적이 없음
expires:Sun, 26 Aug 2018 02:10:40 GMT 만료기간을 1년 단위..


ctrl+shift+r을 쓰면은 캐시 삭제되어 status가 200이 된다.
disable cache 체크 여부를 확인!! 
cach가 되고 있으면 304가 뜬다!!



```js
// GET
axios.get('/api/todos')
  .then(res => {
    prettyPrint(res.data)
  })
POST /api/todos

// POST
// Request Method:POST
// Status Code:201  created
axios.post('/api/todos', {title: "ajax 공부"})
  .then(res => {
    prettyPrint(res.data)
  })
PATCH /api/todos/3

// PATCH
axios.patch('/api/todos/3', {title: "axios 공부"})
  .then(res => {
    prettyPrint(res.data)
  })
DELETE /api/todos/3

// DELETE
axios.delete('/api/todos/3')
  .then(res => {
    prettyPrint(res.data)
  })
GET /api/todos/?title=react
```

axios 요청 메소드의 두 번째 인자로 config 객체를 넘길 수 있습니다. config 객체를 통해 요청의 쿼리 스트링, 요청 헤더, 쿠키 포함 여부 등 많은 것들을 설정할 수 있습니다.

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
응답 객체

응답 객체를 통해 응답의 여러 정보에 접근할 수 있습니다.

// config.params
axios.get('/api/todos/1')
  .then(res => {
    console.log(`status code: ${res.status}`)
    console.log('headers:')
    prettyPrint(res.headers)
    console.log('data:')
    prettyPrint(res.data)
  })


  Cacheable Methods
https://imgur.com/HEDlwPSl.png

POST 메소드는 Cacheable 범주에 포함되기는 하지만, 특별한 조건을 만족시켜야 하며 실무에서는 POST chace가 거의 사용되지 않습니다 (get만 캐시를 하는게 낫다.)

## 캐시의 사용
- 브라우저는 이미 캐시를 잘 활용하도록 만들어져 있습니다.
- Express는 이미 캐시를 잘 활용하도록 만들어져 있습니다.
- 오예

일단은 별다른 추가작업 없이도 편하게 캐시 기능을 사용할 수 있지만, 우리가 원하는대로 캐시가 동작하지 않을 때 그 원인을 파악하기 위해 캐시 관련 헤더는 숙지해두는 것이 좋습니다. 그리고 HTTP method를 용도에 맞게 사용하는 것도 중요합니다.

**삭제, 추가, 수정 시 get method를 쓰면 안된다. 캐시가 될 수 있기 때문이다!!**
___
# GraphQL

## REST API의 단점
http만 알아도 쓸 수 있고,
url에 자원이 포함되어 직관적인 장점이 있지만..

- 한 자원에 한 경로가 묶여있다 = 각각의 자원마다 경로가 따로 있음.
  즉, 여러 자원이 동시에 필요한 경우에는 요청을 여러 번 보내야 함 (요청의 횟수 면에서 비효율적)
- (보통의 경우) 자원의 필요한 속성만 얻어올 수 없음. 즉, 일부 속성의 필요하더라도 전체 속성을 가져와야만 함 (응답의 용량 면에서 비효율적)

## GraphQL
- Facebook에서 2015년 공개한 데이터 질의 언어
- REST API를 대체하기 위해 만들어짐
- 클라이언트에서 필요한 데이터의 구조를 GraphQL 언어로 정의한 후 질의할 수 있고, 서버는 그에 맞게 구조화된 데이터를 응답
- 서버에서는 GraphQL 질의를 해석하기 위해 별도의 해석기가 필요하며, 여러 언어의 구현체가 나와있는 상태

## Example
[이미지](https://seungha-kim.github.io/wpsn-handout/image/graphql-query.png)

____
# Single Page Application

## SPA의 구조
(https://i-msdn.sec.s-msft.com/dynimg/IC690875.png)

기존 방식은 페이지 새로고침이 있었다. 

## SPA 실습

npm install을 하면 기존에 있던 node-moduls가 생성된다. 

