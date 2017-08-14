
# Position
요소의 위치를 지정하는 레이웃의 기본
어떤기준으로 어디로 얼마만큼 갈 것인가?
- 부모의 좌상에서 시작 
- 부모가 이동하면 자식도 이동한다.

## 1. position 프로퍼티
position 프로퍼티는 요소의 위치를 정의한다. top, bottom, left, right 좌표 프로퍼티와 함께 사용하여 위치를 지정한다.

![position](http://poiemaweb.com/img/position.png)

### 1.1 static (기본위치)

static은 position 프로퍼티의  기본값으로 position 프로퍼티를 지정하지 않았을 때와 같다.

기본적인 요소의 배치 순서에 따라 위에서 아래로, 왼쪽에서 오른쪽으로 순서에 따라 배치되며 부모 요소 내에 자식 요소로서 존재 할 때는 **부모 요소의 위치를 기준으로 배치**된다.

쓰는 이유 : 기본적으로 이값을 지정할 일은 없지만 이미 설정된 position을 무력화하기 위해 사용될 수 있다.

좌표 프로퍼티(top, bottom, left, right)를 같이 사용할 수 없으며 사용할 경우에는 무시된다.
```
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; }
    .parent {
      width: 150px; //width, hight의 값이 static-box에 상속되지 않는다.
      height: 150px;
      background: #bcbcbc;
      border: 1px solid #bcbcbc;
    }
    .static-box {
      position: static;
      background: #2E303D;
      color: #e55c3c;
      font-weight: bold;
      text-align: center;
      line-height: 150px; text의 수직 정렬 이 된것 이다.
    }
  </style>
</head>
<body>
  <div class="parent">
    <div class="static-box">static box</div>
  </div>
</body>
</html>
```
- 

### 1.2 relative (상대위치)
기본 위치(static으로 지정되었을 때의 위치)를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치를 이동시킨다. static을 선언한 요소와 relative를 선언한 요소의 차이점은 좌표 프로퍼티의 동작 여부뿐이며 그외는 동일하게 동작한다.
부모를 이동시키면 자식도 같이 움직인다.

```
<!DOCTYPE html>
<html>
<head>
  <style>
    body{ margin:0; }
    .parent{
        width: 150px;
        height: 150px;
        background: #bcbcbc;
        border: 1px solid #bcbcbc;
        margin: 50px;
    }  

    .relative-box {
      position: relative;
      top:50px; left:50px;
      background: #2e303d;
      color: #e55c3c;
      font-weight:bold;
      text-align: center;
      line-height: 150px; 
    }
  </style>
</head>
<body>
  <div class="parent">
    <div class="relative-box">
      relative box
    </div>
  </div>
</body>
</html>
```
위 예제를 보면 parent 클래스의 자식인 relative-box 클래스 요소의 width, height가 부모 요소와 동일하다. 이는 상속에 의한 것이 아니라(width, hight는 상속되지 않는다.) relative를 적용한 요소는 좌표 프로퍼티가 적용되는 것만 다를 뿐 그 이외는 static을 지정했을 때와 동일하게 동작하기 때문이다. 즉 width는 100%가 적용되어 부모 요소의 width와 동일한 값을 갖게된 것이고, hight는 auto가 적용되지만 lin-height: 150px이 적용 되어 부모 요소와 hight가 동일하게 된 것이다.

### 1.3 absolute (절대위치)

부모 요소 또는 가장 가까이 있는 조상 요소(static 제외)를 기준으로 좌표 프로퍼티(top, bottom, left, right)만큼 이동한다. 즉 relative, absolute, fixed 프로퍼티가 선언되어 있는 부모 또는 조상 요소를 기준으로 위치가 결정된다.

만일 부모 또는 조상 요소가 static인 경우, document body를 기준으로 하여 좌표 프로퍼티대로 위치하게 된다.
따라서 부모 요소를 배치의 기준으로 삼기 위해서는 부모 요소에 relative를 정의 하여야 한다.

이때 다른 요소가 먼저 위치를 점유하고 있어도 뒤로 밀리지 않고 덮어쓰게 된다.(이런 특성을 부유 또는 부유 객체라 한다.)

absolute 선언 시, block 레벨 요소의 width는 inline 요소와 같이 content에 맞게 변화되므로 적절한 width를 지정하여야 한다.




```
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; }
    .parent {
      width: 200px;
      height: 200px;
      background: #bcbcbc;
      border: 1px solid #bcbcbc;
      margin: 50px 0 0 300px;
      position: relative; //position relative를 제거 하는 순간 no parent box와 in parent와 같이 겹친다.
    }
    .absolute-box {
      position: absolute;
      height: 200px; width: 200px;
      top: 50px; left: 50px;
      color: #e55c3c;
      font-weight: bold;
      text-align: center;
      background: #2E303D;
      line-height: 200px;
    }
  </style>
</head>
<body>
  <div class="parent">
    <div class="absolute-box">absolute box (in parent)</div>
  </div>
  <div class="absolute-box">absolute box (no parent)</div></body>
</html>
```
> 움직이고 싶은 요소에 absolut를 주고 부모에 relative를 준다.

relative 프로퍼티와 absolute 프로퍼티의 차이점은 아래와 같다.

relative 프로퍼티는 기본 위치(static으로 지정되었을 때의 위치)를 기준으로 좌표 프로퍼티(top, bottom, left, right)을 사용하여 위치를 이동시킨다. 따라서 무조건 부모를 기준으로 위치하게 된다.

absolute 프로퍼티는 보모에 static 이외의 position 프로퍼티가 지정되어 있을 경우에민 부모에 static 이외의 position 프로퍼티가 지정되어 있을 경우에만 부모를 기준으로 위치하게 된다. 만일 부모, 조상이 모두 static 프로퍼티인 경우, document body를 기준으로 위치하게 된다.

따라서 absolute 포로퍼티 요소는 부모 요소의 영역을 벗어나 자유롭게 어디든지 위치할 수 있다.

```
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0;}
    .parent {
      width: 150px;
      height: 150px;
      background: #bcbcbc;
      border: 1px solid #bcbcbc;
      margin: 50px;
      float: left;
      /*position: relative;*/
    }
    .relative-box {
      position: relative;
      top: 10px; left: 10px;
      width: 150px;
      height: 150px;
      background: #2E303D;
      color: #e55c3c;
      font-weight: bold;
      text-align: center;
      line-height: 150px;
    }
    .absolute-box {
      position: absolute;
      top: 10px; left: 10px;
      width: 150px;
      height: 150px;
      background: #2E303D;
      color: #e55c3c;
      font-weight: bold;
      text-align: center;
      line-height: 150px;
    }
  </style>
</head>
<body>
  <div class="parent">
    <div class="absolute-box">absolute box</div>
  </div>
  <div class="parent">
    <div class="relative-box">relative box</div>
  </div>
</body>
</html>
```

### 1.4 fixed (고정위치)

부모 요소와 관계없이 브라우저의 viewport를 기준으로 좌표프로퍼티(top, bottom, left, right)을 사용하여 위치를 이동시킨다.

스크롤이 되더라도 화면에서 사라지지 않고 항상 같은 곳에 위치한다.

fixed 프로퍼티 선언 시, block 요소의 width는 inline 요소와 같이 content에 맞게 변화되므로 적절한 width를 지정하여야 한다.

```
<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; }
    .fixed-box {
      position: fixed;
      color: #e55c3c;
      font-weight: bold;
      text-align: center;
      background: #2E303D;
    }
    .sidebar {
      width: 50px;
      height: 100%;
      top: 0;
      right: 0;
      padding-top: 100px;
    }
    .footer {
      width: 200px;
      width: 100%;
      height: 50px;
      bottom: 0;
      left: 0;
      line-height: 50px;
    }
  </style>
</head>
<body>
  <div class="fixed-box sidebar">fixed box (side-bar)</div>
  <div class="fixed-box footer">fixed box (footer)</div>
</body>
</html>
```

>absolut와 fixed는 넓이를 지정하지 안으면 안의 text 만큼 크기가 줄어든다.
top:0; buttom:0; right:0; left:0; 전체 cover
buttom: 0; left:0; right:0; 하단 일정부분 커버


## 2. z-index 프로퍼티
z-index 프로퍼티에 큰 숫자값을 지정할수록 화면 전면에 출력된다.  
![z-index](http://poiemaweb.com/img/z-index.jpeg)
