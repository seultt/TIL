# CSS3 Box Model

margin까지 한요소!
기본적으로 margin, padding은 background가 투명이다. 
box모델은 수직정렬 방식으로 떨어진다.

- inline (레벨) 요소 - 한줄에 붙어 있는 
- block (레벨) 요소 - 수직정렬 방식

컨텐츠를 담은 박스 모델을 정의(=html을 정의)
CSS 프로퍼티를 통해 스타일과 위치 및 정렬을 지정하는 것이다.

- content : (부자 관계를 가진)중첩된 요소, 텍스트, img
- padding : 여백, 배경의 컬러, 이미지는 패딩 영역까지 적용
요소 영역을 넓히거나 조정할 때 주로 쓰인다.
- boerder : 테두리
- margin : 요소의 외부 여백 영역 , 주로 컨텐츠의 간격과 간격을 조정 할 때 주로 쓰인다.

margin/padding/border - top, right, bottom, left 순으로 설정가능

## 1. width / height 프로퍼티
width, hight는 브라우저가 auto로 설정 되어진다. 결과론적으로 처음에 100%로 브라우저에 보인다.
div(text가 없음){
  w : 200px; // width는 나온다.
  h : 50%; // 원하는 결과가 안나옴, 부모의 50%! body에 hight가 없어서 full로 100%를 지정해도 결과가 안나옴
  html이 hight도 없다. 결론적으로 hight에 100%를 넣으면 그 때서야 결과가 나온다.
}
> 여기서 말하고 싶은 것은 원인과 결과를 찾아가는 과정 반복하는 학습을 하자!

width와 height 프로퍼티는 콘텐츠 영역을 대상으로 한다.
모든 박스 요소는 기본 위치는 좌측상단 쪽에 있으며, 넓이는 부모의 100%(auto), 높이는 컨텐츠가 들어간 높이 값이 설정 된다.

콘텐츠 안에 폰트 사이즈가 브라우저에서 설정된 대략 16px로 되나 위 아래에 padding이 설정되어 height를 지정하지 않은 상태에서 값을 추측하기 힘들다.

content+(border+margin+pading)*2
= 실제 영역

> %로 width값을 설정하고 각 contents에 border 1px solid를 설정 후 float를 주면 1px 씩 밀려나가게 되어 원치 않는 레이아웃 형태의 결과가 나온다. 이럴 때 간다하게 *border 영역 까지 설정하는 프로퍼티가 있는데 box-sizing : border-box를 적용하면 된다.*


margin, padding, border box-sizing 등은 상속되지 않는다.

color, font-siz 는 상속 된다.

축약표현

- 4개의 값을 지정할 때
  시계 방향
  margin: 25px 50px 75px 100px;
- 3개의 값을 지정할 때 위, 좌우, 아래
  margin: 25px 50px 75px;

- 2개의 값을 지정할 때
  margin: 25px 50px;
  위아래, 좌우

- 1개의 값을 지정할 때
  margin: 25px;



> max-width : 최대값 width 설정
> min-width : 최소값 width 설정


## 3. border 프로퍼티
### 3.1 border-style
margin과 padding과 같이 사방향으로 줄수 있다.
### 3.2 border-width
border-width 프로퍼티는 border-style과 함께 사용하지 않으면 적용되지 않는다.

### 3.4 border-radius*
반지름으로 지정

## 4. box-sizing 프로퍼티

박스 모델 전체 영역을 box-sizing : border-box 를 적용하면 border 까지만 영역이 설정 된다.


````
html {
  box-sizing: border-box;
}
*, *:before, *:after { //모든요소, 컨텐츠에 숨겨져 있는 빈 공간 까지 처리
  box-sizing: inherit; //부모의 값을 이어 받는다.
}
````









