# 입문부터 배포까지 리액트로 완성하는 프론트엔드 실무

---

# 0. CSS 구조와 유지보수 문제 이해하기

## 기존 CSS 방식의 문제

초기에는 아래처럼 단순한 클래스 이름을 많이 사용하게 된다.

```css
.box1 {}
.red-text {}
.big-text {}
```

하지만 프로젝트 규모가 커질수록 여러 문제가 발생한다.

---

## 발생하는 문제

### 1) 역할 파악이 어렵다

`.red-text`는 단순히 색상만 의미할 뿐,  
해당 요소가 어떤 역할을 하는지는 알 수 없다.

---

### 2) 스타일 충돌 가능성

여러 파일에서 동일한 클래스 이름을 사용하면  
스타일이 서로 덮어씌워질 수 있다.

---

### 3) 유지보수가 어렵다

특정 클래스를 수정했을 때  
어느 화면에 영향이 가는지 파악하기 어렵다.

---

### 4) CSS 파일이 계속 커진다

기존 클래스를 수정하기 어려워져  
새로운 클래스를 계속 추가하게 된다.

---

# 1. BEM(Block Element Modifier)

## BEM이란?

BEM은 CSS를 구조적으로 작성하기 위한 네이밍 방법이다.

클래스 이름만 봐도 역할과 구조를 알 수 있도록 만든다.

---

## BEM 구조

| 개념 | 설명 |
|---|---|
| Block | 독립적인 컴포넌트 |
| Element | Block 내부 요소 |
| Modifier | 상태 또는 변형 |

---

## 예시

```css
.todo {}
.todo__item {}
.todo__button--active {}
```

---

## 장점

- 역할 파악이 쉽다
- 스타일 충돌 가능성이 줄어든다
- 유지보수가 편해진다
- 협업 시 코드 가독성이 좋아진다

---

# 2. JavaScript 기초

---

# JavaScript란?

웹 페이지를 동적으로 동작하게 만드는 프로그래밍 언어이다.

HTML은 구조를 만들고,  
CSS는 디자인을 담당하며,  
JavaScript는 기능과 동작을 담당한다.

---

# 3. 변수와 상수

## 변수(variable)

데이터를 저장하는 공간이다.

```js
let name = "React";
```

값이 변경될 수 있다.

---

## 상수(const)

변경되지 않는 값을 저장한다.

```js
const PI = 3.14;
```

React에서는 `const` 사용 비중이 높다.

---

# 4. 자료형(Data Type)

JavaScript에는 다양한 자료형이 존재한다.

| 자료형 | 설명 |
|---|---|
| String | 문자열 |
| Number | 숫자 |
| Boolean | true / false |
| Array | 배열 |
| Object | 객체 |
| Undefined | 값이 없음 |
| Null | 비어있는 값 |

---

## 예시

```js
const name = "React";
const age = 20;
const isStudent = true;
```

---

# 5. 연산자와 형 변환

## 연산자

데이터를 계산하거나 비교할 때 사용한다.

```js
+ - * /
```

---

## 비교 연산자

```js
=== !== > <
```

React에서는 `===` 사용이 중요하다.

---

## 형 변환

문자열과 숫자를 변환하는 과정이다.

```js
Number("10")
String(10)
```

---

# 6. 조건문

조건에 따라 다른 동작을 수행한다.

---

## if 문

```js
if (age > 19) {
  console.log("성인");
}
```

---

## 삼항 연산자

React JSX에서 자주 사용된다.

```js
isLogin ? "로그인" : "회원가입"
```

---

# 7. 반복문

동일한 작업을 반복 수행한다.

---

## for 문

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

## map()

React에서 리스트 렌더링 시 가장 중요하게 사용된다.

```js
items.map((item) => item)
```

---

# 8. 함수(Function)

특정 기능을 재사용하기 위해 사용한다.

---

## 함수 선언

```js
function hello() {
  console.log("hello");
}
```

---

## 화살표 함수

React에서 가장 많이 사용하는 함수 방식이다.

```js
const hello = () => {
  console.log("hello");
};
```

---

# 9. 객체(Object)

데이터를 묶어서 관리하는 구조이다.

---

## 객체 예시

```js
const user = {
  name: "보경",
  age: 21,
};
```

---

## React와 객체

props, state 등 대부분 객체 형태로 사용된다.

---

# 10. 배열(Array)

여러 데이터를 저장하는 구조이다.

---

## 배열 예시

```js
const fruits = ["apple", "banana"];
```

---

## 배열 메서드

| 메서드 | 설명 |
|---|---|
| push | 추가 |
| pop | 제거 |
| map | 반복 렌더링 |
| filter | 조건 필터링 |

---

# 11. 구조 분해 할당과 스프레드 연산자

## 구조 분해 할당

객체나 배열 값을 쉽게 꺼내는 문법이다.

```js
const { name } = user;
```

---

## 스프레드 연산자

기존 데이터를 복사하거나 확장한다.

```js
const newArray = [...array];
```

React 상태 업데이트에서 자주 사용된다.

---

# 12. 모듈 시스템(Module)

## 모듈이란?

파일을 기능별로 분리하여 관리하는 방식이다.

---

## export

파일을 외부에서 사용할 수 있게 만든다.

```js
export default App;
```

---

## import

다른 파일의 기능을 가져온다.

```js
import Header from "./Header";
```

---

# React 시작하기

---

# React란?

사용자 인터페이스(UI)를 만들기 위한 JavaScript 라이브러리이다.

컴포넌트 기반으로 화면을 구성한다.

---

# React 특징

- 컴포넌트 기반 개발
- 재사용 가능한 UI 구조
- 상태 기반 렌더링
- 유지보수 편리
- Virtual DOM 사용

---

# Vite

## Vite란?

React 프로젝트를 빠르게 실행하기 위한 개발 도구이다.

기존 CRA(Create React App)보다 실행 속도가 빠르다.

---

## Vite 장점

- 빠른 실행 속도
- 빠른 HMR(Hot Reload)
- 간단한 설정
- React와 높은 호환성

---

## 프로젝트 생성

```bash
npm create vite@latest
```

---

## 실행 방법

```bash
npm install
npm run dev
```

---

# JSX 이해하기

## JSX란?

JavaScript 안에서 HTML처럼 작성할 수 있는 문법이다.

---

## 특징

- HTML과 유사한 구조
- JavaScript 코드 사용 가능
- 중괄호 `{}` 사용 가능

---

## 예시

```jsx
<h1>{title}</h1>
```

---

# 컴포넌트(Component)

## 컴포넌트란?

UI를 작은 단위로 나눈 재사용 가능한 구조이다.

---

## 장점

- 재사용 가능
- 유지보수 편리
- 구조 분리 가능

---

## 예시 구조

```txt
components
 ┣ Header.jsx
 ┣ Main.jsx
 ┣ Footer.jsx
 ┗ Product.jsx
```

---

# Props

## Props란?

부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방식이다.

---

## 특징

- 읽기 전용 데이터
- 컴포넌트 재사용 가능
- 다양한 데이터 전달 가능

---

# React에서 CSS 사용하기

## CSS import

```jsx
import "./App.css";
```

---

## className 사용

React에서는 `class` 대신 `className`을 사용한다.

---

## Inline Style

```jsx
style={{
  padding: 20,
}}
```

---

# 컴포넌트 스타일링

컴포넌트별 CSS 파일을 분리하여 관리할 수 있다.

예시:

```txt
Product.jsx
Product.css
```

---

# 사용 기술

| 기술 | 설명 |
|---|---|
| HTML | 웹 구조 |
| CSS | 스타일링 |
| JavaScript | 기능 구현 |
| React | UI 개발 |
| Vite | React 개발 환경 |
| VSCode | 코드 편집기 |