## float
요소 정렬을 위한 레이아웃의 핵심
float : 부동, 떠있다. 편집 디자인에서 사용된 것으로, 자신의 뒤에 오는 요소 위에 올라간다!

![float](http://poiemaweb.com/img/layout.png)


## 1. 요소 정렬
float 프로퍼티를 사용하지 않은 블록 요소들은 수직으로 정렬된다. **float:left;** 프로퍼티를 사용하면 왼쪽부터 정렬되고, **float:right;** 프로퍼티를 사용하면 오른쪽부터 정렬된다.

오른쪽 정렬의 경우, 먼저 기술된 요소가 가장 오른쪽에 출력되므로 출력 순서가 역순이 된다.


width 프로퍼티의 기본값은 100%이므로 width 프로퍼티값을 지정하지 않은 block 요소는 부모 요소의 가로폭을 가득 채운다.

block 레벨 요소에 float 프로퍼티가 선언되면 width가 inline 요소와 같이 content에 맞게 최소화되고 다음 요소 위에 떠 있게(부유하게) 된다.

위 예제를 살펴보면 d1 클래스 요소에는 float: left;를 선언하였고 d2 클래스 요소에는 float를 선언하지 않았다. 이때 d1 클래스 요소는 width가 inline 요소와 같이 content에 맞게 최소화되고 다음 요소인 d2 클래스 요소 위에 떠 있게(부유하게) 된다.
```
<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      color: white;
      font-weight: bold;
      font-size: 30px;
      line-height: 50px;
      height: 50px;
      margin: 0 10px;
      padding: 10px;
    }
    .d1 {
      float: left;
      background: red;
    }
    .d2 {
      background: orange;
    }
  </style>
</head>
<body>
  <div class="d1"> float: left; </div>
  <div class="d2"> div </div>
</body>
</html>
```
주의할 것은 d1 클래스 요소가 d2 클래스 요소 위에 떠 있게 되어도 d2 클래스 요소의 width는 d1 클래스 요소가 차이한 width만큼 줄어들지 않는다. d2 클래스 요소는 float를 선언하지 않았기 때문에 본래의 width를 유지한다. d2 클래스 요소가 본래의 widh를 유지한 상태에서 d1 클래스 요소가 그 위에 위치한다.

## 2. float 프로퍼티 관련 문제 해결 방법
### 2.1 float 프로퍼티가 선언된 요소와 float 프로퍼티가 선언되지 않은 요소간 margin이 사라지는 문제

예제를 보면 두 요소는 차례대로 정렬된 것처럼 보이지만 사실은 float 프로퍼티가 선언된 요소가 다음 요소 위에 떠 있는(부유하고 있는) 상태이다. 따라서 두 요소간의 margin은 제대로 표현되지 않는다.

이것은 두번째 요소에 float 프로퍼티를 선언하지 않았기 때문에 발생하는 박스 모델 상의 문제이다. 이 문제를 해결하는 가장 쉬운 방법은 float 프로퍼티를 선언하지 않은 요소(.d2)에 overflow: hidden 프로퍼티를 선언하는 것이다.

overflow: hidden 프로퍼티는 자식 요소가 부모 요소의 영역보다 클 경우 넘치는 부분을 안보이게 해주는 역할을 하는데 여기서는 float 프로퍼티가 없어서 제대로 표현되지 못하는 요소를 제대로 출력해준다.

### 2.2 float 프로퍼티를 가진 자식 요소를 포함하는 부모 요소의 높이가 정상적으로 반영되지 않는 문제

아래 예제를 보면 float 프로퍼티가 선언된 두개의 자식 요소를 포함하는 부모 요소의 높이가 정상적인 값을 가지지 못하는 문제가 발생한다. float 요소는 일반적인 흐름 상에 존재하지 않기 때문에 float 요소의 높이를 알 수 없기 때문인데 이 문제는 부모 요소 이후에 위치하는 요소의 정렬에 문제를 발생시킨다.

-원래 뒤에 오는 요소 위에 올라 온다.

```
<!DOCTYPE html>
<html>
<head>
  <style>
    .wrap {
      color: white;
      text-align: center;
      padding: 10px;
      background-color: #def0c2;
    }
    .d1 {
      float: left;
      width: 49%;
      margin-right: 2%;
      padding: 20px 0;
      background-color: #59b1f6;
    }
    .d2 {
      float: left;
      width: 49%;
      padding: 20px 0;
      background-color: #ffb5b4;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="d1">dv1</div>
    <div class="d2">dv2</div>
  </div>
  <div style="background:red;padding:10px;color:white;">dv3</div>
</body>
</html>
```
이 문제를 해결하는 가장 쉬운 방법은 float 프로퍼티를 가진 요소의 부모 요소(wrap)에 overflow: hidden 프로퍼티를 선언하는 것이다.


> side effect(부수효과, 부작용) - 다른 쪽에 영향을 줄 수 있다. 상황에 따라 사용하는 것이 좋다.

```
.wrap {
  ...
  overflow: hidden;
}
```

다른 방법으로 부모 요소에 float 프로퍼티를 부여하는 방법도 있다. 하지만 부모 요소의 너비는 float된 두개의 자식요소의 콘텐츠를 표현할 수 있는 만큼만으로 width가 작게 줄어들게 된다. 권장할 수 있는 방법은 아니다.

wrap 영역이 끝나기 직전 빈 요소를 만들고 **clear:both**를 설정하는 방법도 가능하다. 하지만 **의미 없는 빈 요소를 사용**하여야 하기 때문에 이 방법 역시 권장할 수 있는 방법은 아니다.

```
<!DOCTYPE html>
<html>
<head>
  <style>
    .wrap {
      color: white;
      text-align: center;
      padding: 10px;
      background-color: #def0c2;
      /*overflow: hidden;*/
    }
    .d1 {
      float: left;
      width: 49%;
      margin-right: 2%;
      padding: 20px 0;
      background-color: #59b1f6;
    }
    .d2 {
      float: left;
      width: 49%;
      padding: 20px 0;
      background-color: #ffb5b4;
    }
    .clear {
      height: 0;
      clear: both;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="d1">dv1</div>
    <div class="d2">dv2</div>
    <div class="clear"></div>
  </div>
  <div style="background:red; padding:10px; color:white;">dv3</div>
</body>
</html>
```

overflow: hidden;과 함께 많이 사용되는 방법은 ::after 가상 요소 선택자를 이용하는 것이다. 가상 요소 선택자는 CSS2 문법(:after)과 CSS3 문법(::after)이 있는데 IE8까지 지원하는 CSS2 문법을 사용하는 편이 좋다.

```
<!DOCTYPE html>
<html>
<head>
  <style>
    .wrap {
      color: white;
      text-align: center;
      padding: 10px;
      background-color: #def0c2;
      /*overflow: hidden;*/
    }
    .clearfix:after {
      content: "";
      display: block;
      clear: both;
    }
    .d1 {
      float: left;
      width: 49%;
      margin-right: 2%;
      padding: 20px 0;
      background-color: #59b1f6;
    }
    .d2 {
      float: left;
      width: 49%;
      padding: 20px 0;
      background-color: #ffb5b4;
    }
  </style>
</head>
<body>
  <div class="wrap clearfix">
    <div class="d1">dv1</div>
    <div class="d2">dv2</div>
  </div>
  <div style="background:red;padding:10px;color:white;">dv3</div>
</body>
</html>
```
부모 요소에 위 예제와 같이 사전에 작성한 clearfix 클래스만 추가하거나, 해당 요소를 선택하여 클리어 문법을 선언하면 되기 때문에 가장 깔끔하고 간편하다. 이 방법을 사용하는 것을 추천한다.
