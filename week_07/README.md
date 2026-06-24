# 리액트 상태 관리와 이벤트 처리하기

---

## 배포 링크

=> [Study Progress Tracker 바로가기](https://fe-assignment-kbk-lk4k.vercel.app/)

---

# Step 1. 이벤트(Event) 처리하기

## 이벤트(Event)란?

사용자와 웹 페이지가 상호작용하면서 발생하는 모든 동작을 의미한다.

쉽게 말하면 사용자가 무언가 행동했을 때 발생하는 사건이다.

### 대표적인 이벤트

* 버튼 클릭
* 입력값 변경
* 체크박스 선택
* 마우스 이동
* 키보드 입력
* 창 크기 변경

### 예시

```jsx
<button>클릭</button>
```

사용자가 버튼을 클릭하면 Click 이벤트가 발생한다.

---

## 이벤트 핸들러(Event Handler)란?

이벤트가 발생했을 때 실행되는 함수이다.

쉽게 말하면

> "이 이벤트가 발생하면 이 함수를 실행해라"

라고 등록하는 함수이다.

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
버튼 클릭
↓
onClick 이벤트 발생
↓
handleClick 실행
↓
alert 출력
```

---

## 이벤트 처리(Event Handling)

이벤트가 발생했을 때 원하는 동작을 수행하도록 이벤트 핸들러를 연결하는 과정을 의미한다.

### 예시

```jsx
<button
  onClick={() => {
    console.log("클릭");
  }}
>
  버튼
</button>
```

React에서는 아래와 같은 이벤트를 자주 사용한다.

```jsx
onClick
onChange
onMouseMove
onFocus
onBlur
```

---

## 이벤트 객체(Event Object)

React는 이벤트가 발생하면 이벤트 객체(e)를 자동으로 전달한다.

이 객체를 통해 사용자가 입력한 값이나 체크 상태 등을 확인할 수 있다.

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

### 자주 사용하는 속성

| 속성               | 설명      |
| ---------------- | ------- |
| e.target.value   | 입력한 값   |
| e.target.checked | 체크 여부   |
| e.target.id      | 요소 id   |
| e.target.name    | 요소 name |

---

## 이벤트를 처리하는 과정

```text
1. 이벤트 발생
↓
2. 이벤트 핸들러 호출
↓
3. 이벤트 객체 전달
↓
4. State 변경
↓
5. 컴포넌트 재실행
↓
6. 화면 업데이트
```

---

## 이벤트 전파(Event Propagation)

이벤트는 클릭한 요소에서만 끝나는 것이 아니라 부모 요소와 자식 요소 사이를 이동한다.

이 과정을 이벤트 전파(Event Propagation)라고 한다.

### 1. Capturing Phase

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

### 2. Target Phase

실제로 이벤트가 발생한 요소에 도착하는 단계

```text
button
```

### 3. Bubbling Phase

하위 요소에서 상위 요소로 다시 올라가는 단계

```text
button
 ↑
div
 ↑
body
 ↑
html
```

### React 예시

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

### 출력 결과

```text
Child
Parent
```

버튼에서 발생한 이벤트가 부모 요소까지 전달되기 때문이다.

---

# Step 2. 상태(State) 관리하기

## State란?

State는 컴포넌트 내부에서 관리하는 데이터이다.

사용자의 행동에 따라 값이 변경될 수 있으며, 값이 변경되면 화면도 함께 변경된다.

쉽게 말하면

> React가 화면을 그리기 위해 기억하고 있는 값

이라고 볼 수 있다.

---

## useState

React에서 State를 생성할 때 사용하는 Hook이다.

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

## State 변경

```jsx
setCount(count + 1);
```

### 결과

```text
0
↓
1
↓
2
↓
3
```

State가 변경되면 React는 컴포넌트를 다시 실행하고 화면을 다시 그린다.

---

## State를 사용하는 이유

State가 없다면 값이 변경되어도 React는 화면을 다시 렌더링하지 않는다.

하지만 State를 사용하면 값이 변경될 때 React가 자동으로 화면을 업데이트한다.

### 예시

```jsx
const [name, setName] = useState("홍길동");
```

```jsx
setName("김보경");
```

결과

```text
홍길동
↓
김보경
```

---

# Props와 State

## Props란?

부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터이다.

## State란?

컴포넌트 내부에서 직접 관리하는 데이터이다.

## 차이점

| 구분       | Props   | State        |
| -------- | ------- | ------------ |
| 데이터 소유   | 부모 컴포넌트 | 자기 자신        |
| 수정 가능 여부 | 수정 불가능  | 수정 가능        |
| 사용 목적    | 데이터 전달  | 상태 관리        |
| 값 변경     | 부모가 변경  | setState로 변경 |

### Props 예시

```jsx
<SubjectList
  subjects={subjects}
  onToggle={handleToggle}
/>
```

여기서

```jsx
subjects
onToggle
```

는 Props이다.

App 컴포넌트가 SubjectList 컴포넌트에게 전달하는 데이터이다.

---

# 프로젝트 구현

## 프로젝트명

### Study Progress Tracker

---

## 프로젝트 목표

시험 공부 과목을 관리하고 학습 진행 상황을 시각적으로 확인할 수 있는 웹 애플리케이션 제작

---

## 주요 기능

### 1. 과목 추가

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

사용자가 입력한 과목명을 받아 새로운 과목 객체를 생성한다.

`id`는 각 과목을 구분하기 위한 고유값이고, `name`은 과목명, `isCompleted`는 공부 완료 여부를 의미한다.

처음 과목을 추가할 때는 아직 공부를 완료하지 않은 상태이므로 `isCompleted` 값을 `false`로 설정하였다.

```jsx
setSubjects([...subjects, newSubject]);
```

이 코드는 기존 과목 목록을 복사한 뒤, 새 과목을 추가하여 State를 업데이트한다.

즉, 과목 추가 버튼을 클릭하면 `subjects` State가 변경되고, React가 화면을 다시 렌더링하여 새로운 과목이 목록에 표시된다.

---

### 2. 완료 체크

```jsx
onChange={(e) => {
  onToggle(subject.id, e.target.checked);
}}
```

체크박스를 클릭하면 `onChange` 이벤트가 발생한다.

이때 React는 이벤트 객체 `e`를 전달하고, `e.target.checked`를 통해 체크박스가 선택되었는지 확인할 수 있다.

```jsx
e.target.checked
```

- 체크된 상태이면 `true`
- 체크 해제된 상태이면 `false`

이 값을 `onToggle` 함수에 전달하여 해당 과목의 `isCompleted` 값을 변경한다.

즉, 체크박스를 선택하면 공부 완료 상태가 되고, 다시 해제하면 미완료 상태로 바뀐다.

이 부분은 이번 수업에서 배운 **이벤트 객체를 이용한 상태 업데이트**에 해당한다.

---

### 3. 과목 삭제

```jsx
const handleDelete = (id) => {
  const nextSubjects = subjects.filter(
    (subject) => subject.id !== id
  );

  setSubjects(nextSubjects);
};
```

삭제 버튼을 클릭하면 해당 과목의 `id`가 `handleDelete` 함수로 전달된다.

```jsx
subjects.filter((subject) => subject.id !== id)
```

이 코드는 전체 과목 목록 중에서 삭제하려는 과목의 `id`와 다른 과목만 남긴다.

즉, 삭제할 과목을 제외한 새로운 배열을 만드는 것이다.

그 후

```jsx
setSubjects(nextSubjects);
```

를 실행하여 과목 목록 State를 새 배열로 변경한다.

State가 변경되면 React가 화면을 다시 렌더링하고, 삭제된 과목은 화면에서 사라진다.

---

### 4. 진도율 계산

```jsx
const completedSubjects =
  subjects.filter(
    (subject) => subject.isCompleted
  );

const progressRatio =
  (completedSubjects.length /
    subjects.length) * 100;
```

먼저 `filter()`를 사용하여 전체 과목 중 완료된 과목만 골라낸다.

```jsx
subject.isCompleted
```

값이 `true`인 과목만 `completedSubjects` 배열에 들어간다.

그다음 완료된 과목 수를 전체 과목 수로 나누고 100을 곱해 진도율을 계산한다.

예를 들어 전체 과목이 4개이고 완료한 과목이 2개라면,

```text
2 / 4 * 100 = 50%
```

가 된다.

이 값을 `<progress>` 태그와 퍼센트 표시 부분에 사용하여 현재 공부 진행 상황을 시각적으로 보여준다.

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

* Event Handling
* Event Object
* Event Propagation
* useState
* Props
* 조건부 렌더링
* 배열 렌더링(map)
* 배열 필터링(filter)

---

## 사용 기술

* React
* JavaScript
* JSX
* CSS
* useState Hook
* Event Handling
* Props
* GitHub
* VS Code
