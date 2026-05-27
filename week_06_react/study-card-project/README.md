# 오늘의 공부 추천하기 컴포넌트

React 컴포넌트와 CSS 스타일링을 활용하여  
“오늘의 공부 추천하기” UI를 제작했습니니다.

이번 과제제에서는 React의 컴포넌트 구조, props 전달, JSX 문법, CSS 모듈화 등을 중심으로 학습하였습니다.

---

# 배포 링크

[Vercel 배포 사이트 바로가기](https://fe-assignment-kbk-8ttk.vercel.app/)

---

# 프로젝트 구성

## 화면 구성

프로젝트는 다음과 같은 구조로 구성하였다.

- Header
- Main
- StudyCard
- Footer

---

# 컴포넌트 구조

```txt
src
 ┣ components
 ┃ ┣ Header.jsx
 ┃ ┣ Main.jsx
 ┃ ┣ Footer.jsx
 ┃ ┗ StudyCard.jsx
 ┣ App.jsx
 ┣ App.css
 ┗ main.jsx
```

---

# Header 컴포넌트

## 역할

페이지 상단 제목을 출력하는 컴포넌트이다.

---

## 특징

- 사이트 제목 표시
- 전체 페이지의 시작 영역 역할 수행
- 재사용 가능한 구조

---

## 예시

```jsx
<Header />
```

---

# Main 컴포넌트

## 역할

공부 카드들을 감싸는 영역이다.

---

## 특징

- children props 사용
- 내부 컴포넌트들을 배치하는 역할 수행
- 레이아웃 구성 담당

---

## 예시

```jsx
<Main>
  <StudyCard />
</Main>
```

---

# StudyCard 컴포넌트

## 역할

하나의 공부 추천 카드를 출력하는 컴포넌트이다.

---

## props 사용

각 카드마다 다른 데이터를 출력하기 위해 props를 사용하였다.

---

## 전달 데이터

| props | 설명 |
|---|---|
| title | 공부 주제 |
| level | 난이도 |
| time | 추천 공부 시간 |

---

## 예시

```jsx
<StudyCard
  title="React 컴포넌트"
  level="초급"
  time="30분"
/>
```

---

# Footer 컴포넌트

## 역할

페이지 하단 정보를 출력하는 컴포넌트이다.

---

## 특징

- 페이지 마무리 영역 구성
- 공통 UI 분리 가능

---

# JSX 문법 적용

## JSX란?

JavaScript 안에서 HTML처럼 작성할 수 있는 문법이다.

React에서 UI를 구성할 때 사용한다.

---

## JSX 특징

- HTML과 유사한 형태
- JavaScript 코드 사용 가능
- 중괄호 `{}`를 통해 데이터 출력 가능

---

## 예시

```jsx
<h2>{title}</h2>
```

---

# Props 활용

## Props란?

부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방식이다.

---

## 사용 이유

동일한 컴포넌트를 여러 번 재사용하면서  
서로 다른 데이터를 출력하기 위해 사용하였다.

---

## 장점

- 컴포넌트 재사용 가능
- 코드 중복 감소
- 유지보수 편리

---

# CSS 스타일링

## CSS 파일 분리

컴포넌트별 CSS 파일을 따로 분리하여 관리하였다.

---

## 예시 구조

```txt
StudyCard.jsx
StudyCard.css
```

---

# 스타일링 요소

프로젝트에서 사용한 주요 스타일 요소는 다음과 같다.

| 속성 | 설명 |
|---|---|
| border-radius | 모서리 둥글게 |
| box-shadow | 그림자 효과 |
| padding | 내부 여백 |
| margin | 외부 여백 |
| display:flex | 정렬 구조 |
| gap | 요소 간격 |

---

# 카드 UI 구성

## 카드 디자인 특징

- 카드 형태 UI 적용
- 그림자 효과 사용
- 여백을 활용한 가독성 향상
- hover 효과 적용 가능

---

## 예시

```css
.card {
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```

---

# React 개발 환경

## 사용 도구

| 도구 | 설명 |
|---|---|
| VSCode | 코드 편집기 |
| Node.js | JavaScript 실행 환경 |
| npm | 패키지 관리 |
| Vite | React 개발 환경 |

---

# Vite 사용

## Vite란?

빠른 React 개발 환경을 구성하기 위한 도구이다.

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

# React 컴포넌트 기반 개발의 장점

## 1) 재사용 가능

하나의 컴포넌트를 여러 번 사용할 수 있다.

---

## 2) 유지보수 편리

파일별로 기능이 분리되어 관리가 쉽다.

---

## 3) 가독성 향상

컴포넌트 단위로 구조를 나누어  
코드 이해가 쉬워진다.

---

## 4) 확장성 증가

새로운 기능 추가 시  
기존 구조를 유지하면서 확장 가능하다.

---

# 사용 기술

| 기술 | 설명 |
|---|---|
| HTML | 웹 구조 |
| CSS | 스타일링 |
| JavaScript | 기능 구현 |
| React | UI 개발 |
| JSX | React UI 문법 |
| Vite | React 개발 환경 |
| VSCode | 코드 편집기 |