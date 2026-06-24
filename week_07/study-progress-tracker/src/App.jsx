import { useState } from "react";

import SubjectInput from "./components/SubjectInput";
import SubjectList from "./components/SubjectList";
import StudyProgress from "./components/StudyProgress";

import "./App.css";

function App() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "운영체제", isCompleted: false },
    { id: 2, name: "데이터베이스", isCompleted: false },
    { id: 3, name: "자료구조", isCompleted: false },
  ]);

  const handleCreate = (name) => {
    const newSubject = {
      id: Date.now(),
      name: name,
      isCompleted: false,
    };

    setSubjects([...subjects, newSubject]);
  };

  const handleToggle = (id, checked) => {
    const nextSubjects = subjects.map((subject) => {
      if (subject.id !== id) {
        return subject;
      }

      return {
        ...subject,
        isCompleted: checked,
      };
    });

    setSubjects(nextSubjects);
  };

  const handleDelete = (id) => {
    const nextSubjects = subjects.filter((subject) => subject.id !== id);

    setSubjects(nextSubjects);
  };

  return (
    <div className="app">
      <h1>시험 공부 진도율 앱</h1>
      <p className="description">
        과목별 공부 완료 여부를 체크하고 전체 진도율을 확인할 수 있습니다.
      </p>

      <SubjectInput onCreate={handleCreate} />

      <SubjectList
        subjects={subjects}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

      <StudyProgress subjects={subjects} />
    </div>
  );
}

export default App;