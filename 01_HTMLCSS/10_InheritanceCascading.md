## Inheritance & Cascading
스타일의 상속과 적용 우선 순위

## 1. 상속(Inheritance)
부모의 값이 자식에게 영향을 주고 반대로 자식에서 부모에게로는 영향을 주지 않다.

각 요소마다 style 지정을 피할 수 있어서 중복적인 프로퍼티 값을 제거할 수 있다. - 품질과 비용에 영향을 준다.

상속 기능이 없다면 각 요소의 Rule set에 프로퍼티를 매번 각각 지정해야 한다.

text, color 관련 상속 됨
layout(width,height...) 상속되지 않는다.

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    .text-red {
      color: red;
      border: 1px solid #bcbcbc;
      padding: 10px;
    } //재활용하기 위해 .text-red 클래스를 만들어 놓은 것임!
  </style>
</head>
<body>
  <div class="text-red">
    <h1>Heading</h1>
    <p>Paragraph<strong>strong</strong></p>
    <button>Button</button> //요소에 따라 상속 되지 않는다.
  </div>
</body>
</html>
```
![상속](http://poiemaweb.com/img/css_inheritance.png)

상속되지 않는 경우(상속받지 않는 요소 또는 상속되지 않는 프로퍼티), inherit 키워드를 사용하여 명시적으로 상속받게 할 수 있다.
```
button {color: ingerit} //상속 받고 싶은 요소에 프로퍼티:값
```

## 2. 캐스캐이딩(Cascading)
요소는 하나 이상의 CSS 선언에 영향을 받을 수 있다. 이때 충돌을 피하기 위해 **CSS 적용 우선순위**가 필요한데 이를 **캐스캐이딩(Cascading Order)**이라고 한다.


### 2.1 중요도
  CSS가 어디에 선언 되었는지에 따라서 우선순위가 달라진다.
  1. head 요소 내의 style 요소
  2. head 요소 내의 style 요소 내의 @import 문 
  3. <link> 로 연결된 CSS 파일
  4. <link> 로 연결된 CSS 파일 내의 @import 문 (외부CSS파일에서 다른 CSS파일을 불러오는 것)
  5. 브라우저 디폴트 스타일시트

### 2.2명시도
  대상을 명확하게 특정할수록 명시도가 높아지고 우선순위가 높아진다.
```
!important(어떠한 상황에서도 속성을 적용시켜라) > 인라인 스타일(요소 내에 스타일) > 아이디 선택자 > 클래스/속성/가상 선택자 > 태그 선택자 > 전체 선택자 > 상위 요소에 의해 상속된 속성
```

### 2.3 선언순서
  선언된 순서에 따라 우선 순위가 적용된다. 즉, 나중에 선언된 스타일이 우선 적용된다.

