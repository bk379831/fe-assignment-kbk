const StudyProgress = ({ subjects }) => {
    const completedSubjects = subjects.filter((subject) => subject.isCompleted);
    const completedCount = completedSubjects.length;
    const allCount = subjects.length;
  
    const progressRatio =
      allCount === 0 ? 0 : (completedCount / allCount) * 100;
  
    return (
      <div className="studyProgress">
        <h2>전체 진도율</h2>
  
        <div className="countText">
          {completedCount} / {allCount}
        </div>
  
        <progress value={progressRatio} max="100" />
  
        <div className="percentText">{Math.floor(progressRatio)}%</div>
      </div>
    );
  };
  
  export default StudyProgress;