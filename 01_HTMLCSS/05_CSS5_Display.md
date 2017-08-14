# CSS3 Display

## 1. display 프로퍼티*

block 요소 - 개행이 된다. 100% 공간을 차지해서 다음 요소는 밑으로 내려오게 된다.

inline - form 안에 들어가는 input과 span

inline-block - 기본은 inline(개행이X)이면서 block의 특징을 가지고 있다. 

none - 렌더링을 하지 말라고 브라우저에 명령 
ex) 로그인- 한글이 입력 될때 경고문구를 뛰울 때 사용

> display 프로퍼티는 상속되지 않는다.*

### 1.1 block 레벨 요소
- width, height, margin, padding 프로퍼티 지정이 가능
- block 레벨 요소 내에 inline 레벨 요소를 포함할 수 있다

### 1.2 inline 레벨 요소
개행해서 시작하지 않는다.
한 문장안에 다른 문장을 넣어서 연속적으로(한 줄로) 삽입할 수 있다.

- 컨텐츠 만큼의 폭을 가진다.
- width, height, margin-top, margin-bottom 프로퍼티를 지정할 수 없다.*
- inline 레벨 요소 내에 block 레벨 요소를 포함할 수 없다.
- inline 레벨 요소를 개행하기 위해서는 <inline 레벨 요소는 일반적으로 block 레벨 요소에 포함되어 사용된다.>

### 1.3 inline-block 레벨 요소
inline 레벨과 같이 한 줄에 표현되면서 width, height, margin 프로퍼티를 모두 지정할 수 있다.

- menu를 만들 때 li를 inline-block으로  나란히 만들면서 크기를 지정할 수 있으나 개행이 들어가 있기 때문에 정의 하지 않은 4px의 오차가 생긴다.

````
<ul>
  <li>HTML</li> //개행
  <li>CSS</li>
</ul>
````

## 2. visibility 프로퍼티
visibility : hidden 영역은 유지하면서 컨텐츠를 안보이게 함

## 3. opacity 프로퍼티
투명도  0.0 ~ 1.0의 값을 입력하며 0.0은 투명, 1.0은 불투명을 의미한다.

요소와 이미지에 적용시킬 수 있다.

```
div:hover, img:hover {
      opacity: 1.0;
    }  // 상태 선택자를 이용 해서 opacity를 사용해서 적용
```

