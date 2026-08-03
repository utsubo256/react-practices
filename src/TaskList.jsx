import "./TaskList.css";

function TaskList({ tasks }) {
  return (
    <>
      <h2>タスク一覧</h2>
      {tasks.length ? (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      ) : (
        <p>タスクはまだありません</p>
      )}
    </>
  );
}

export default TaskList;
