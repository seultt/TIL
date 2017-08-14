# CSS3 Responsive Web Design

## 1. Responsive Web Design
One Source Multi Use 하나의 소스코드로 다양한 디바이스를 대응한다.


기준(target)을 설정해서 break point를 만든다.

![Responsiv Web Design](http://poiemaweb.com/img/Responsive_Web_Design_for_Desktop_Notebook_Tablet_and_Mobile_Phone.png)
> 시대에 따라 기준은 달라진다.

출력이 가능한 것이 다 디바이스이다, resposive의 대상을 프린터도 포함이다.

mobile first!!

[ionicframework](http://ionicframework.com/) - framework를 이용하여 desktop에 없는 기울임 GPS 같은 기능들을 적용 시킬 수 있다.

Electron* - github에서 만듦, 데스크탑 애플리케이션을 만드는 것

phoneGap - mobile 앱

sencha Touch -


### 1.1 viewport meta tag

브라우저가 표시하는 영역

resizing 상하좌우 어디서든 줄이거나 넓힐 수 있다. 단 모바일은 불가능하다.

```
<meta name="viewport" 
content="width=device-width, //divice 크키
initial-scale=1.0">
```
>모바일을 대응 할 때 쓰음

### 1.2 @media

일반 화면(screen)과 인쇄장치 별로 서로 다른 style을 지정하는 예이다.

- print

- screen


```
  <style>
    @media screen {
      * { color: red; }
    }
    @media print {
      * { color: blue; } // 인쇄 미리보기에서는 파랗게 나온다.
    }
  </style>
```
반응형 웹디자인에 사용되는 핵심 기술은 @media이다.


```
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```
> not|only |는 or의 의미,  특별한 경우에만 쓴다.


```
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```
> screen 이고 최소 480px 일때 

orientation을 제외한 모든 프로퍼티는 min/max 접두사를 사용할 수 있다.
일반적으로 반응형 웹 디자인은 viewport 너비(width 프로퍼티)를 기준으로 한다.


```
/*==========  Mobile First Method  ==========*/
/* All Device */

/* Custom, iPhone Retina : 320px ~ */
@media only screen and (min-width : 320px) {

}
/* Extra Small Devices, Phones : 480px ~ */
@media only screen and (min-width : 480px) {

}  
/* Small Devices, Tablets : 768px ~ */
@media only screen and (min-width : 768px) {

}
/* Medium Devices, Desktops : 992px ~ */
@media only screen and (min-width : 992px) {

}
/* Large Devices, Wide Screens : 1200px ~ */
@media only screen and (min-width : 1200px) {

}

/*==========  Non-Mobile First Method  ==========*/
/* All Device */

/* Large Devices, Wide Screens : ~ 1200px */
@media only screen and (max-width : 1200px) {

}
/* Medium Devices, Desktops : ~ 992px */
@media only screen and (max-width : 992px) {

}
/* Small Devices, Tablets : ~ 768px */
@media only screen and (max-width : 768px) {

}
/* Extra Small Devices, Phones : ~ 480px */
@media only screen and (max-width : 480px) {

}
/* Custom, iPhone Retina : ~ 320px */
@media only screen and (max-width : 320px) {

}
```