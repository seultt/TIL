# Styling 대상을 특정하는 셀렉터
selector는 스타일을 원하는 요소를 선택하는데 사용되는 것을 말한다.
![selector](http://poiemaweb.com/img/css-syntax.png)

## 선택자 & 상속
<hr/>

## 1. Universal Selector 전체선택자
(*)Asterisk - HTML 문서 내의 모든 요소를 선택한다. html 요소를 포함한 모든 요소가 선택된다.

## 2. Type Selector 태그 셀렉터
태그명 - 지정된 태그명을 가지는 요소를 선택한다.

## 3. ID Selector
#id 어트리뷰트 값 - id 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다. id 어트리뷰트 값은 중복될 수 없는 유일한 값이다.

## 4. Class Selector
.class 어트리뷰트 값 - class 어트리뷰트 값을 지정하여 일치하는 요소를 선택한다.

HTML 요소에 class 어트리뷰트 값은 공백으로 구분하여 여러개 지정할 수 있다. 

## 5. chain Selector
체인 선택자는 아래와 같이 한 요소에 여러개의 클래스가 지정된 경우에 사용 된다.
```
<!DOCTYPE html>
<html>
<head>
<style>
.class1, .class2 { background-color: blue; } .class1.class2.class3 { background-color: green; }
</style>
</head>
<body>
<div lass="class1">class1</div> <div lass="class2">class2</div> <div class="class1 class2 class3">.class1.class2.class3</div>
</body>
</html>
```

## 6. Attribute Selector
- 셀렉터[attribute] : 지정된 어트리뷰트를 같는 모든 요소를 선택한다.

- 셀렉터[어트리뷰트="값"] : 지정된 어트리뷰트를 가지며 지정된 값과 어트리뷰트의 값이 일치하는 모든 요소를 선택한다.

```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* a 요소 중에 target 어트리뷰트의 값이 "_blank"인 모든 요소 */
    a[target="_blank"] { color: red; }
  </style>
</head>
<body>
  <a href="http://www.poiemaweb.com">poiemaweb.com</a><br>
  <a href="http://www.google.com" target="_blank">google.com</a><br>
  <a href="http://www.naver.com" target="_top">naver.com</a>
</body>
</html>
```

- 셀렉터[어트리뷰트~="값"] : 지정된 어트리뷰트의 값이 지정된 값을 (공백으로 분리된) 단어로 포함하는 요소를 선택한다.
```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* h1 요소 중에 title 어트리뷰트 값에 "first"를 단어로 포함하는 요소 */
    h1[title~="first"] { color: red; }
  </style>
</head>
<body>
  <h1 title="heading first">Heading first</h1>
  <h1 title="heading-first">Heading-first</h1>
  <h1 title="heading second">Heading second</h1>
  <h1 title="heading third">Heading third</h1>
</body>
</html>
```

- 셀렉터[어트리뷰트|="값"] : 지정된 어트리뷰트의 값과 일치 or "값-"으로 시작하는 요소를 선택한다.
```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소 중에 lang 어트리뷰트 값이 "en"과 일치하거나 "en-"로 시작하는 요소 */
    p[lang|="en"] { color: red; }
  </style>
</head>
<body>
  <p lang="en">Hello!</p>
  <p lang="en-us">Hi!</p>
  <p lang="en-gb">Ello!</p>
  <p lang="us">Hi!</p>
  <p lang="no">Hei!</p>
</body>
</html>
```

- 셀렉터[어트리뷰트^="값"] : 지정된 어트리뷰트 값으로 시작하는 요소를 선택한다.
```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* a 요소 중에 href 어트리뷰트 값이 "https://"로 시작하는 요소 */
    a[href^="https://"] { color: red; }
  </style>
</head>
<body>
  <a href="https://www.test.com">https://www.test.com</a><br>
  <a href="http://www.test.com">http://www.test.com</a>
</body>
</html>
```

- 셀렉터[어트리뷰트$="값"] : 지정된 어트리뷰트 값으로 끝나느 요소를 선택한다.
```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* a 요소 중에 href 어트리뷰트 값이 ".html"로 끝나는 요소 */
    a[href$=".html"] { color: red; }
  </style>
</head>
<body>
  <a href="test.html">test.html</a><br>
  <a href="test.jsp">test.jsp</a>
</body>
</html>
```

- 셀렉터[어트리뷰트*="값"] : 지정된 어트리뷰트 값을 포한하는 요소를 선택한다.
```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* div 요소 중에서 class 어트리뷰트 값에 "test"를 포함하는 요소 */
    div[class*="test"] { color: red; }
    /* div 요소 중에서 class 어트리뷰트 값에 "test"를 단어로 포함하는 요소 */
    div[class~="test"] { background-color: yellow; }
  </style>
</head>
<body>
  <div class="first_test">The first div element.</div>
  <div class="second">The second div element.</div>
  <div class="test">The third div element.</div>
  <p class="test">This is some text in a paragraph.</p>
</body>
</html>
```

## 6. Combinator Selector
### 6.1 Descendant Combinator 후손 셀렉터

후손 셀렉턴는 셀렉터A의 모든 후손(하위)요소 중 셀렉터B와 일치하는 요소를 선택한다.

> div p { property: value; }

```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* div 요소의 후손요소 중 p 요소 */
    div p { color: red; }
  </style>
</head>
<body>
  <h1>Heading</h1>
  <div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <span><p>paragraph 3</p></span>
  </div>
  <!--paragraph 4를 담은 p요소는 body요소의 후손이다.-->
  <p>paragraph 4</p> 
</body>
</html>
```

### 6.2 child Combinator 자식 셀렉터

자손 셀렉터는 셀렉터 A의 모든 자식 요소 중 셀렉터 B와 일치하는 요소를 선택한다.

> div>p { property: value; }

```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* div 요소의 자식요소 중 p 요소 */
    div > p { color: red; }
  </style>
</head>
<body>
  <h1>Heading</h1>
  <div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <span><p>paragraph 3</p></span>
  </div>
  <p>paragraph 4</p>
</body>
</html>
```

### 6.3 Sibling Combinator 인접형제 셀렉터
형제(동위) 셀렉터는 형제 관계(동위 관계)에서 뒤에 위치하는 요소를 선택할 때 사용한다.

- 인접 형제 셀렉터 : 셀렉터 A의 형제 요소 중 셀렉터A 바로 뒤에 위치하는 셀렉터B 요소를 선택한다. A와 B 사이에 다른 요소가 존재하면 선택되지 않는다.

> p+ul { property: value; }

```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소의 형제 요소 중에 p 요소 바로 뒤에 위치하는 ul 요소를 선택한다. */
    p + ul { color: red; }
  </style>
</head>
<body>
  <div>A div element.</div>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>

  <p>The first paragraph.</p>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>

  <h2>Another list</h2>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
</body>
</html>
```
- 일반 형제 셀렉터 : 셀렉터A의 형제 요소 중 셀렉터A 뒤에 위치하는 셀렉터B 요소를 모두 선택한다.

> p~ul { property: value; }

```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* p 요소의 형제 요소 중에 p 요소 뒤에 위치하는 ul 요소를 모두 선택한다.*/
    p ~ ul { color: red; }
  </style>
</head>
<body>
  <div>A div element.</div>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>

  <p>The first paragraph.</p>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>

  <h2>Another list</h2>
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
</body>
</html>
```

## 7. 가상 클래스 셀렉터 Pseudo-Classs Selector

가상요소 셀렉터에서 :::는 css3에서 사용하는데
::를 써줘도 적용이된다. 올드한 브라우저에서도 적용되기 위해서는 ::를 써주는것이 좋다.

> selector:pseudo-class { property: value; }

- :link
- :visited
- :hover
- :active
- :focus 

- a가 아닌 다른 태그에서의 :hover 사용  
IE6에서는 a에서만 가상 클래스를 사용할 수 있었으나, IE7 이후부터는 다른 요소에서도 사용 가능하다.

- :first-child
```
div li:first-child { background:blue; }
```
- : before, : after

```
#box:before { content: "this text is before the box"; }  

#box:after { content: "this text is after the box"; }
```

- :checked
- :enabled
- :disabled
```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* input 요소가 사용 가능한 상태일 때, 
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:enabled + span {
      color: blue;
    }
    /* input 요소가 사용 불가능한 상태일 때, 
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:disabled + span {
      color: gray;
      text-decoration: line-through;
    }
    /* input 요소가 체크 상태일 때, 
       input 요소 바로 뒤에 위치하는 인접 형제 span 요소를 선택 */
    input:checked + span {
      color: red;
    }
  </style>
</head>
<body>
  <input type="radio" checked="checked" value="male" name="gender"> <span>Male</span><br>
  <input type="radio" value="female" name="gender"> <span>Female</span><br>
  <input type="radio" value="neuter" name="gender" disabled> <span>Neuter</span><hr>

  <input type="checkbox" checked="checked" value="bicycle"> <span>I have a bicycle</span><br>
  <input type="checkbox" value="car"> <span>I have a car</span><br>
  <input type="checkbox" value="motorcycle" disabled> <span>I have a motorcycle</span>
</body>
</html>
```
- :first-child 요소의 '첫번째'
- :last-child  요소의'마지막'
- :nth-child(n) '앞에서 n 번째'
- :nth-last-child(n) '뒤에서 n 번째'

<hr>

- :first-of-type
- :last-of-type
- :nth-of-type(n)
- :nth-last-of-type(n)
- :not(셀렉터)

```
<!DOCTYPE html>
<html>
<head>
  <style>
    /* input 요소 중에서 type 어트리뷰트의 값이 password가 아닌 요소를 선택 */
    input:not([type=password]) {
      background: yellow;
    }
  </style>
</head>
<body>
  <input type="text" value="Text input">
  <input type="email" value="email input">
  <input type="password" value="Password input">
</body>
</html>
```