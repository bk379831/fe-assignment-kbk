const SubjectList = ({ subjects, onToggle, onDelete }) => {
    return (
      <div className="subjectList">
        <h2>공부 목록</h2>
  
        {subjects.length === 0 ? (
          <div className="empty">공부할 과목이 없습니다.</div>
        ) : (
          <ul>
            {subjects.map((subject) => {
              return (
                <li key={subject.id}>
                  <input
                    type="checkbox"
                    checked={subject.isCompleted}
                    onChange={(e) => {
                      onToggle(subject.id, e.target.checked);
                    }}
                  />
  
                  <span className={subject.isCompleted ? "completed" : ""}>
                    {subject.name}
                  </span>
  
                  <button
                    onClick={() => {
                      onDelete(subject.id);
                    }}
                  >
                    삭제
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };
  
  export default SubjectList;