# 리액트 상태 관리와 이벤트 처리하기

---

# Step 1. 이벤트(Event) 처리하기

## 이벤트(Event)란?

사용자와의 상호작용으로 발생하는 모든 사건을 의미한다.

예시

* 버튼 클릭
* 입력값 변경
* 체크박스 선택
* 마우스 이동
* 키보드 입력
* 창 크기 변경

---

## 이벤트 핸들러(Event Handler)란?

이벤트가 발생했을 때 실행되는 함수이다.

### 예시

```jsx
function handleClick() {
  alert("버튼이 클릭되었습니다.");
}

<button onClick={handleClick}>
  클릭
</button>
```

### 동작 과정

```text
사용자 클릭
↓
onClick 이벤트 발생
↓
handleClick 함수 실행
↓
alert 출력
```

---

## 이벤트 객체(Event Object)

React는 이벤트가 발생하면 이벤트 객체(e)를 자동으로 전달한다.

### 입력값 가져오기

```jsx
<input
  onChange={(e) => {
    console.log(e.target.value);
  }}
/>
```

### 체크박스 상태 가져오기

```jsx
<input
  type="checkbox"
  onChange={(e) => {
    console.log(e.target.checked);
  }}
/>
```

### 주요 속성

| 속성               | 설명      |
| ---------------- | ------- |
| e.target.value   | 입력값     |
| e.target.checked | 체크 여부   |
| e.target.id      | 요소 id   |
| e.target.name    | 요소 name |

---

# 이벤트 전파(Event Propagation)

이벤트는 아래의 3단계를 거쳐 전달된다.

```text
1. Capturing Phase
2. Target Phase
3. Bubbling Phase
```

---

## Capturing Phase

상위 요소에서 하위 요소로 이벤트가 전달되는 단계

```text
window
 ↓
document
 ↓
html
 ↓
body
 ↓
div
 ↓
button
```

---

## Target Phase

실제로 클릭된 요소에 도착하는 단계

```text
button
```

---

## Bubbling Phase

하위 요소에서 상위 요소로 이벤트가 전달되는 단계

```text
button
 ↑
div
 ↑
body
 ↑
html
```

---

## React 예시

```jsx
<div
  onClick={() => {
    console.log("Parent");
  }}
>
  <button
    onClick={() => {
      console.log("Child");
    }}
  >
    클릭
  </button>
</div>
```

출력 결과

```text
Child
Parent
```

---

# Step 2. 상태(State) 관리하기

## State란?

컴포넌트 내부에서 관리되는 데이터이다.

사용자의 행동에 따라 변경될 수 있는 값을 저장한다.

---

## useState

React에서 상태를 생성할 때 사용하는 Hook

```jsx
const [count, setCount] = useState(0);
```

### 의미

```text
count
→ 현재 상태 값

setCount
→ 상태 변경 함수

0
→ 초기값
```

---

## 상태 변경

```jsx
setCount(count + 1);
```

### 렌더링 결과

```text
0
↓
1
↓
2
↓
3
```

---

# Props와 State

| 구분       | Props          | State       |
| -------- | -------------- | ----------- |
| 정의       | 부모 → 자식 데이터 전달 | 컴포넌트 내부 데이터 |
| 변경 가능 여부 | 불가능            | 가능          |
| 목적       | 데이터 전달         | 상태 관리       |

---

## Props 예시

부모 컴포넌트

```jsx
<Profile name="김보경" />
```

자식 컴포넌트

```jsx
function Profile(props) {
  return <h3>{props.name}</h3>;
}
```

결과

```text
김보경
```

---

# React 렌더링 원리

## Virtual DOM

React는 실제 DOM을 직접 수정하지 않는다.

먼저 Virtual DOM을 생성하고 이전 상태와 비교하여 변경된 부분만 실제 DOM에 반영한다.

---

### 실제 DOM

```html
<div>
  <button>0</button>
</div>
```

---

### Virtual DOM

```javascript
{
  type: "div",
  children: [
    {
      type: "button",
      value: 0
    }
  ]
}
```

---

## State 변경 시 렌더링 순서

```text
setState()
↓
컴포넌트 재실행
↓
새 Virtual DOM 생성
↓
이전 Virtual DOM과 비교(Diffing)
↓
변경 부분 탐색
↓
실제 DOM 최소 수정
↓
브라우저 화면 갱신
```

---

## 예시

```jsx
const [count, setCount] = useState(0);
```

초기 상태

```text
button: 0
```

상태 변경

```jsx
setCount(1);
```

변경 후

```text
button: 1
```

React는 버튼 전체를 다시 만드는 것이 아니라

```text
0 → 1
```

텍스트 노드만 수정한다.

---

# State의 특징

## 1. Snapshot

렌더링 시점의 State 값은 고정된다.

```jsx
console.log(count);

setCount(count + 1);

console.log(count);
```

출력

```text
0
0
```

---

## 2. Trigger

```jsx
setCount()
```

는 값을 즉시 변경하는 것이 아니라

```text
다시 렌더링 요청
```

을 보낸다.

---

## 3. Reconciliation

React는 이전 Virtual DOM과 새로운 Virtual DOM을 비교하여 필요한 부분만 수정한다.

---

# 프로젝트 구현

## 프로젝트명

### Study Progress Tracker

---

## 프로젝트 목표

시험 공부 과목을 관리하고 학습 진행 상황을 시각적으로 확인할 수 있는 웹 애플리케이션 제작

---

## 주요 기능

### 과목 추가

```jsx
const handleCreate = (name) => {
  const newSubject = {
    id: Date.now(),
    name,
    isCompleted: false,
  };

  setSubjects([...subjects, newSubject]);
};
```

사용자가 새로운 과목을 추가할 수 있다.

---

### 완료 체크

```jsx
onChange={(e) => {
  onToggle(subject.id, e.target.checked);
}}
```

체크박스를 클릭하면 완료 여부가 변경된다.

이 부분은 이벤트 객체의

```jsx
e.target.checked
```

를 사용하여 상태를 업데이트한다.

---

### 과목 삭제

```jsx
const handleDelete = (id) => {
  const nextSubjects =
    subjects.filter(
      (subject) => subject.id !== id
    );

  setSubjects(nextSubjects);
};
```

삭제 버튼을 클릭하면 해당 과목이 제거된다.

---

### 진도율 계산

```jsx
const completedSubjects =
  subjects.filter(
    (subject) => subject.isCompleted
  );

const progressRatio =
  (completedSubjects.length /
    subjects.length) * 100;
```

완료된 과목 수를 이용하여 전체 진도율을 계산한다.

---

## 컴포넌트 구조

```text
App
│
├── SubjectInput
│      └─ 과목 추가
│
├── SubjectList
│      ├─ 체크박스
│      ├─ 과목 목록
│      └─ 삭제 버튼
│
└── StudyProgress
       ├─ 완료 개수
       ├─ Progress Bar
       └─ 완료 비율(%)
```

---

## 사용된 React 개념

### 이벤트 처리

```jsx
onClick
onChange
```

---

### 상태 관리

```jsx
useState
```

---

### 이벤트 객체 활용

```jsx
e.target.value
e.target.checked
```

---

### Props 전달

```jsx
<SubjectList
  subjects={subjects}
  onToggle={handleToggle}
  onDelete={handleDelete}
/>
```

---

### 배열 렌더링

```jsx
subjects.map(...)
```

---

### 조건부 렌더링

```jsx
subjects.length === 0
  ? ...
  : ...
```

---

# 사용 기술

* React
* JavaScript
* JSX
* CSS
* useState
* Event Handling
* Props
* Virtual DOM

---

# 학습 내용 정리

이번 실습을 통해 React에서 이벤트 처리와 상태 관리가 어떻게 동작하는지 이해할 수 있었다.

특히

* 이벤트 핸들러 등록
* 이벤트 객체 활용
* useState를 이용한 상태 관리
* Props를 이용한 데이터 전달
* 조건부 렌더링
* 배열 렌더링(map)
* Virtual DOM과 React 렌더링 원리

를 직접 구현하며 학습하였다.
