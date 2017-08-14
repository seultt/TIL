# 2.7 CSS3 Font & Text
## 1. font-size 프로퍼티
## 2. font-family 프로퍼티
폰트를 지정한다. 컴퓨터에 해당 폰트가 설치되어 있지 않으면 적용되지 않는다.

클라이언트의 피씨에 지정한 폰트가 없으면 기본 브라우저의 폰트로 지정된다.

```
.serif {
      font-family: "Times New Roman", Times, serif;
    }
```
폰트명은 따옴표로 감싸주며 폰트명이 한단어인 경우는 따옴표로 감싸주지 않아도 된다.

## 3. font-style / font-weight 프로퍼티

## 4. font Shorthand
font-size와 font-family 는 꼭 지정해 줘야 한다.
```
font : font-style(optional) font-variant(optional) font-weight(optional) font-size(mandatory) line-height(optional) font-family(mandatory)
```

## 5. line-height 프로퍼티

텍스트의 높이(행간)를 지정한다. 텍스트 수직 정렬에도 응용되어 사용된다.
요소 내에 택스트를 센터링 할 때 쓴다.
line-height가 기본 적으로 120%로 설정 되어있다.

text-align: center;  수평 정렬 


```
    .button {
      width: 150px;
      height: 70px;
      background-color: #FF6A00;
      border-radius: 30px;
      box-shadow: 5px 5px 5px #A9A9A9;
    }
    .button > a {
      display: block;
      font: italic bold 2em/70px Arial, Helvetica, sans-serif;  // a의 부모에 높이와 line-height를 같게 하면 컨텐츠가 수직 중앙 정렬이 된다.
      text-decoration: none;
      text-align: center; 
    }
```




