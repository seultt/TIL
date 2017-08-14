# CSS3 Background

## 1. background-image 프로퍼티

background-image는 브라우저 창보다 bg가 작으면 프로퍼티의 기본값이 repeat이기 때문에 그림이 x,y 방향으로 repeat 된다.

## 2. background-repeat 프로퍼티
배경 이미지의 반복을 지정한다. 수직, 수평 또는 수직과 수평 모두의 반복을 지정할 수 있다.

image는 여러장 넣을 수 있다.
먼저 선언한 image가 위로 올라간다.
,로 여러개를 선언

> 복수개의 이미지를 설정할 경우, 먼저 설정된 이미지가 전면에 출력된다.
```
 body {
      background-image: url("http://poiemaweb.com/img/bg/dot.png"), url("http://poiemaweb.com/img/bg/paper.gif");
      background-repeat: no-repeat, repeat;
```

## 3. background-size 프로퍼티
- %값 지정

  배경이미지 크기가 지정된 %값에 비례하여 설정된다. 첫번째 값은 width, 두번째 값은 height를 의미한다.

  화면을 줄이거나 늘리면 배경이미지의 크기도 따라서 변경되어 찌그러지는 현상이 나타난다.
- cover
  ```
  .bg {
    background-size: cover;
  }
  ```
- contain
  배경이미지의 크기 비율을 유지한 상태에서 부모 요소의 영역에 배경이미지가 보이지 않는 부분없이 전체가 들어갈 수 있도록 이미지 스케일을 조정한다.
  ```
  .bg {
  background-size: contain;
  }
  ```

  width, height의 프로퍼티값은 공백으로 구분하여야 한다. 프로퍼티값을 쉼표로 구분하면 다른 배경이미지의 너비를 지정하는 것으로 인식되기 때문에 주의가 필요하다.
  ```
  body {
    background-image: url("front.png"), url("back.png");
    background-repeat: no-repeat, no-repeat;
    background-size: 100%, 500px;
    // baclgrpimd-size: width, height;
  }
  ```

## 4. background-attachment 프로퍼티
margin 상쇄에 찾아보기

## 5. background-position 프로퍼티

## 6. background-color 프로퍼티

## 7. background Shorthand
여러가지 속성들은 한 번에 지정해지는것 
```
background: #FFEE99 url("http://poiemaweb.com/img/bg/dot.png") no-repeat center;
```


