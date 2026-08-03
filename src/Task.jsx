import "./Task.css";

function Task({
  task,
  isEditing,
  editingTitle,
  onEditingTitleChange,
  onStartEditing,
  onCancelEditing,
  onSubmitEditing,
  onToggleTask,
  onDeleteTask,
}) {
  return (
    <li>
      {isEditing ? (
        <form
          className="task-edit-form"
          onSubmit={(e) => onSubmitEditing(e, task)}
        >
          <input
            value={editingTitle}
            onChange={(e) => onEditingTitleChange(e.target.value)}
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
            onChange={() => onToggleTask(task)}
          />
          <span className={task.completed ? "completed" : undefined}>
            {task.title}
          </span>
          <button onClick={() => onStartEditing(task)}>編集</button>
        </>
      )}
      <button onClick={() => onDeleteTask(task)}>削除</button>
    </li>
  );
}

export default Task;
