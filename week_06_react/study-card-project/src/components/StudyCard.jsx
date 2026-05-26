import { useState } from "react";
import "./StudyCard.css";

const studyList = [
  {
    step: "1강",
    title: "리액트 소개",
    time: "6:41",
    level: "난이도 ⭐",
    description:
      "React가 무엇인지 알아보고, 컴포넌트 기반으로 화면을 만드는 방식을 이해합니다.",
    tag: "React",
  },
  {
    step: "2강",
    title: "Node.js 설치하기",
    time: "3:55",
    level: "난이도 ⭐",
    description:
      "React 프로젝트를 실행하기 위해 필요한 Node.js와 npm의 역할을 익힙니다.",
    tag: "Node.js",
  },
  {
    step: "3강",
    title: "첫 리액트 프로젝트 만들기",
    time: "10:10",
    level: "난이도 ⭐⭐",
    description:
      "Vite를 사용해서 React 프로젝트를 만들고 실행하는 방법을 연습합니다.",
    tag: "Vite",
  },
  {
    step: "4강",
    title: "JSX 문법 이해하기",
    time: "13:02",
    level: "난이도 ⭐⭐",
    description:
      "HTML처럼 보이지만 JavaScript 안에서 작성하는 JSX 문법을 이해합니다.",
    tag: "JSX",
  },
  {
    step: "5강",
    title: "컴포넌트 이해하기",
    time: "14:34",
    level: "난이도 ⭐⭐",
    description:
      "화면을 작은 조각으로 나누고 재사용하는 컴포넌트 개념을 학습합니다.",
    tag: "Component",
  },
  {
    step: "6강",
    title: "리액트에서 CSS 사용하기",
    time: "10:49",
    level: "난이도 ⭐",
    description:
      "className과 CSS 파일 import를 이용해 React 컴포넌트에 스타일을 적용합니다.",
    tag: "CSS",
  },
  {
    step: "7강",
    title: "리액트 컴포넌트 만들고 스타일링하기",
    time: "실습과제",
    level: "난이도 ⭐⭐⭐",
    description:
      "배운 내용을 활용해서 직접 React 컴포넌트를 만들고 CSS로 스타일링합니다.",
    tag: "Project",
  },
];

function StudyCard() {
  const [index, setIndex] = useState(0);
  const currentStudy = studyList[index];

  const changeStudy = () => {
    if (index === studyList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section className="study-card">
      <div className="study-card__top">
        <span className="study-card__badge">{currentStudy.step}</span>
        <span className="study-card__time">{currentStudy.time}</span>
      </div>

      <p className="study-card__label">오늘의 React 공부</p>

      <h1 className="study-card__title">{currentStudy.title}</h1>

      <p className="study-card__level">{currentStudy.level}</p>

      <p className="study-card__description">{currentStudy.description}</p>

      <span className="study-card__tag">#{currentStudy.tag}</span>

      <button className="study-card__button" onClick={changeStudy}>
        다음 강의 보기
      </button>

      <p className="study-card__count">
        {index + 1} / {studyList.length}
      </p>
    </section>
  );
}

export default StudyCard;