# CSS3 Effect
그림자, 그레디언트, 트랜지션, 애니메이션, 트랜스폼

## 1. 벤더 프리픽스 (Vendor Prefix)

브라우저의 버전이 올라감에 따라 벤더 프리픽스를 사용하지 않아도 될 수 있다. 그러나 구형 브라우저를 지원하기 위하여 벤더 프리픽스를 사용하여야 할 필요가 있다.

```
* {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all (moz:모질라)*/
  -ms-user-select: none;      /* IE 10+ (ms:마이크로소프트) */
  user-select: none;          /* Likely future 향후 브라우저 발전이 되면 접두사를 뗄겨우를 대비하여 적용 시킨것이다.*/
}
```
![vendor prefix](http://poiemaweb.com/img/chrome-devtool-vendor-prefix.png)



많은 브라우저를 위한 벤더 프리픽스를 사용하는 것은 코드의 양을 늘게 하고 또한 브라우저는 거의 매달 업데이트가 이루어지고 있어 불필요한 벤더 프리픽스를 사용할 가능성이 크다. 사용하지 않아도 되는 벤더 프리픽스를 사용하는 것은 성능에도 영향을 주기 때문에 [Prefix Free](http://leaverou.github.io/prefixfree/) 라이브러리 를 사용하는 것은 매우 유용한 방법이다.

사용법은 매우 간단하다. Prefix Free 사이트에서 라이브러리를 다운로드하고 include 하기만 하면 이 후에는 벤더 프리픽스없이 모든 CSS를 사용할 수 있다.

```
<script src="prefixfree.min.js"></script>
```
적용되지 않는 경우도 있기 때문에 원인에 대한 책임을 따질 수 없기 때문에 권장하지 않는다.

## 2. 그림자 (Shadow)
### 2.1 text-shadow
```
선택자 { text-shadow: Horizontal-offset Vertical-offset Blur-Radius Shadow-Color; }
```

### 2.2 box-shadow
```
선택자 { box-shadow: Inset Horizontal-offset Vertical-offset Blur-Radius Spread Shadow-Color; }
```

## 3. 그레이디언트 (Gradient)
- [codepen](https://codepen.io) : css effect를 만들어주는 사이트

## 4. 트랜지션 (Transition)
CSS 프로퍼티가 변경(상황)되면 프로퍼티 변경에 따른 표시의 변화(transition)은 즉시 발생한다. 

트랜지션(transition)은 CSS 프로퍼티 변경에 따른 표시의 변화를 부드럽게 하기 위해 애니메이션 속도를 조절한다. 즉 프로퍼티 변경이 표시의 변화에 즉시 영향을 미치게 하는 대신 그 프로퍼티의 변화가 일정 시간(duration)에 걸쳐 일어나도록 하는 것이다.

```
<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      width: 100px;
      height: 100px;
      background: red;
      /* 트랜지션 효과: 모든(all) 프로퍼티의 변화를 2초에 걸쳐 전환한다. */
      transition: all 2s; 
    }
    div:hover {
      border-radius: 50%;
      background: blue;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>
```
위 예제에서는 div 요소에 마우스가 올라갈 때(hover on)와 마우스가 내려올 때(hover off) border-radius, background 프로퍼티의 변경이 발생한다. 그리고 이들 프로퍼티의 변경을 2초에 걸쳐 변화하도록 한 것이다.

> div에 transition을 설정하면 마우스가 올라갈 때(hover on)와 마우스가 내려올 때(hover off) 모두 transition이 발동한다. 하지만 div:hover에 transition을 설정하면 마우스가 올라갈 때(hover on)는 transition이 발동하지만 마우스가 내려올 때(hover off)는 transition이 발동하지 않는다.

```
<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      width: 100px;
      height: 100px;
      background: red;
      
    }
    div:hover {
      background: blue;
      border-radius: 50%;
      /* hover on에서만 발동한다. */
      transition: all 2s;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>
```

transition은 자동으로 발동되지 않는다. :hover와 같은 가상 클래스 선택자(Pseudo-Classes) 또는 JavaScript의 onclick 이벤트와 같은 부수적인 액션에 의해 발동한다. 위 예제의 div 요소에 적용된 transition은 이와 같은 부수적 액션없이는 어떤 효과도 볼 수 없다.

모든 css가 transition이 될 수가 없다.
대부분 형태-크기, 색상 

### 4.2 transition-duration
transition-duration 프로퍼티는 트랜지션에 일어나는 지속시간(duration)을 초 단위로 지정한다. 프로퍼티값을 **지정하지 않을 경우 기본값 0s**이 적용되어 어떠한 트랜지션 효과도 볼 수 없다.

숏텐드
```
div {
  /* shorthand syntax */
  transition: width 2s, opacity 4s;
  /*transition:속성 지속시간, 속성 지속시간*/
}
```

### 4.3 transition-timing-function
함수의 그래프로 제공해서 명시할 수 있다.


### 4.4 transition-delay
 일정 시간 대기한 후 트랜지션이 실행되도록 한다.

### 4.5 transition
```
transition: property duration function delay
```

## 5 애니메이션
애니메이션 효과는 HTML 요소에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 변화시킨다. 애니메이션은 애니메이션을 나타내는 CSS 스타일과 애니메이션의 sequence를 나타내는 복수의 키프레임(@keyframs) 들로 이루어진다.

transition으로도 어느 정도의 애니메이션 효과를 표현할 수 있으나 animation보다는 제한적이다. 일반적으로 트랜지션 효과는 요소 프로퍼티값이 다른 값으로 변화할 때 주로 사용하며 요소의 로드와 함께 자동으로 발동되지 않는다. :hover 와 같은 가상 클래스 선택자(Pseudo-Class Selector) 또는 자바스크립트의 이벤트와 같은 부수적 액션에 의해 발동된다.
즉 transition 프로퍼티는 단순히 요소의 프로퍼티 변화에 주안점이 있다면 animation 프로퍼티는 하나의 줄거리를 구성하여 줄거리 내에서 세부 움직임을 시간 흐름 단위로 제어할 수 있고 전체 줄거리의 재생과 정지, 반복까지 제어할 수 있다.


> 효과가 얼마나 멋있는 것보다 어떠한 브라우저에서도 자연스럽고 브라우저에 부담을 주지 않을 수 있는 것이 좋다.


애니메이션을 CSS or Js??
작은 효과는 CSS가 낫다.
그러나 복잡한 애니메이션은 효율성은 CSS보다 JS가 더 좋을 수 있다.

### 5.1 @keyframs
```
<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      position: absolute;
      width: 100px;
      height: 100px;
      background-color: red;
      animation-name: move;
      animation-duration: 5s;
      animation-iteration-count: infinite;
    }
    /* @keyframes rule */
    @keyframes move {
      /* keyframe: 미리 선언 후(동작만 구현) move 이름을 만든 뒤 필요한 요소에 적용시킨다.*/
      from {
        left: 0;
      }
      /* keyframe */
      to {
        left: 300px;
      }
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>
```

### 5.2 animation-name
```
<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      position: absolute;
      width: 100px;
      height: 100px;
      animation-name: move, fadeOut, changeColor;
      animation-duration: 5s; //시간을 변경해주고 싶으면 2s, 1s, 5s
      animation-iteration-count: infinite; //무한 반복, 숫자로 반복 횟수 지정
    }
    @keyframes move {
      from { left: 0; }
      to   { left: 300px; }
    }
    @keyframes fadeOut {
      from { opacity: 1; }
      to   { opacity: 0; }
    }
    @keyframes changeColor {
      from { background-color: red; }
      to   { background-color: blue; }
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>
```

### 5.7 animation-direction
normal - from~ to from~to
reverse - from~to to~from
alternate 

### 5.8 animation-fill-mode
애니메이션 미실행 시(대기-시작하기전 또는 종료) 요소의 스타일을 지정한다.


## 6. 트랜스폼 (Transform)

형태를 변형

translate(x,y)  %를 줬을 때 자신의 값 % 만큼 이동한다.


### 6.1.2 transform-origin
요소의 기본기준점을 설정할 때 사용
transelate이동은 기준점을 변경하여도 일정 거리만큼 이동하므로 의미가 없다.

