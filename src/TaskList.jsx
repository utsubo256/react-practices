import "./TaskList.css";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <>
      <h2>タスク一覧</h2>
      {tasks.length ? (
        <>
          <p>
            すべてのタスク: {tasks.length}件、完了済タスク:{" "}
            {completedTasks.length}件
          </p>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleTask(task)}
                />
                <span className={task.completed ? "completed" : undefined}>
                  {task.title}
                </span>
                <button onClick={() => onDeleteTask(task)}>削除</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>タスクはまだありません</p>
      )}
    </>
  );
}

export default TaskList;
