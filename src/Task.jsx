import { useState } from "react";
import "./Task.css";

function Task({
  task,
  isEditing,
  onStartEditing,
  onCancelEditing,
  onUpdateTask,
  onDeleteTask,
}) {
  const [editingTitle, setEditingTitle] = useState("");

  function handleStartEditing() {
    setEditingTitle(task.title);
    onStartEditing(task.id);
  }

  function handleSubmitEditing(event) {
    event.preventDefault();
    onUpdateTask({
      ...task,
      title: editingTitle,
    });
    onCancelEditing();
  }

  function handleToggleTask() {
    onUpdateTask({
      ...task,
      completed: !task.completed,
    });
  }

  return (
    <li>
      {isEditing ? (
        <form className="task-edit-form" onSubmit={handleSubmitEditing}>
          <input
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
          />
          <button type="submit" disabled={editingTitle.trim() === ""}>
            更新
          </button>
          <button type="button" onClick={onCancelEditing}>
            キャンセル
          </button>
        </form>
      ) : (
        <>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleTask}
          />
          <span className={task.completed ? "completed" : undefined}>
            {task.title}
          </span>
          <button onClick={handleStartEditing}>編集</button>
        </>
      )}
      <button onClick={() => onDeleteTask(task)}>削除</button>
    </li>
  );
}

export default Task;
