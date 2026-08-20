import { useState } from "react";
import "./TaskList.css";
import Task from "./Task";

function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  const [editingTaskId, setEditingTaskId] = useState(null);

  const completedTasks = tasks.filter((task) => task.completed);

  function handleStartEditing(id) {
    setEditingTaskId(id);
  }

  function handleCancelEditing() {
    setEditingTaskId(null);
  }

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
              <Task
                key={task.id}
                task={task}
                isEditing={task.id === editingTaskId}
                onStartEditing={handleStartEditing}
                onCancelEditing={handleCancelEditing}
                onUpdateTask={onUpdateTask}
                onDeleteTask={onDeleteTask}
              />
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
