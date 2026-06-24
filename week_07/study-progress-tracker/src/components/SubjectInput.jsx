import { useState } from "react";

const SubjectInput = ({ onCreate }) => {
  const [value, setValue] = useState("");

  return (
    <div className="subjectInput">
      <input
        placeholder="공부할 과목을 입력하세요."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button
        onClick={() => {
          if (value.length === 0) {
            alert("과목명을 입력하세요.");
            return;
          }

          onCreate(value);
          setValue("");
        }}
      >
        추가
      </button>
    </div>
  );
};

export default SubjectInput;