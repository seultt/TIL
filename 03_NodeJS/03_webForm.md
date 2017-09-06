# Web Form
서버와 연동해서 form을 어떻게 사용하는지..

HTML form의 기본 동장
- HTML form을 전송하면, 입력된 정보가 기본적으로 percent encoding 되어 요청됨

  - GET method
  ```
  GET /search?query=%EA%B0%9C&sort=latest HTTP/1.1  // query이름=값
  ...
  ```
  - POST method
  ```
  POST /form HTTP/1.1
  Content-Type: application/x-www-form-urlencoded
  ...

  home=Cosby&favorite+flavor=flies // 이름 = 값 & 이름 = 값 +(띄어쓰기)
  ```
## multipart/form-data

- 기본 설정(percent encoding)으로는 폼으로 파일을 업로드하는 것은 불가능
- (클라이언트 측) form 태그에 enctype="multipart/form-data" 속성을 적용하면 파일 업로드 가능
- (서버 측) body-parser 미들웨어는 multipart/form-data 형태의 요청을 지원하지 않음 (multer 필요)


**Form validation**
사용자가 입력하는 자료는 개발자가 기대하는 형식과는 영 딴판일 수 있습니다. 필요한 필드가 없을 수도 있고, 자료의 형식을 서버가 이해할 수 없는 경우도 있습니다. 이런 자료를 데이터베이스에 그냥 집어넣게 되면 데이터베이스가 뒤죽박죽이 되고 말 것입니다. 그래서, 사용자에게 입력받은 자료는 처리를 하기 전에 항상 올바른 형태인지 검증해야 합니다. 이런 검증 과정을 form validation이라고 합니다.


클라이언트 측 validation은 사용자가 폼을 작성하는 도중에 피드백을 받을 수 있다는 점에서 서버 측 validation보다 훨씬 나은 사용자 경험을 제공할 수 있습니다.

TML5 form validation은 사용하기 간편하고, 브라우저에 내장되어 있다는 점에서 (특히 모바일에서) 일관성있는 사용자 경험을 제공할 수 있다는 장점이 있습니다.

주의! 클라이언트 측 validation을 하더라도 서버 측에서는 반드시 validation을 따로 해주어야 합니다. 




# 서비스 개발 실습 - URL shortener
# 과제 소개