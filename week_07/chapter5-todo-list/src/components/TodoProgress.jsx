const TodoProgress = ({ todos }) => {
    const completedTodos = todos.filter((todo) => todo.isCompleted);
    const completedCount = completedTodos.length;
    const allCount = todos.length;
  
    const progressRatio =
      allCount === 0 ? 0 : (completedCount / allCount) * 100;
  
    return (
      <div className="todoProgress">
        <div>
          {completedCount} / {allCount}
        </div>
        <progress value={progressRatio} max="100" />
        <div>{Math.floor(progressRatio)}%</div>
      </div>
    );
  };
  
  export default TodoProgress;