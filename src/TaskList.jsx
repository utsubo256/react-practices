import { useState } from "react";
import "./TaskList.css";
import Task from "./Task";

function TaskList({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
  const [editingTitle, setEditingTitle] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const completedTasks = tasks.filter((task) => task.completed);

  function handleStartEditing(task) {
    setEditingTaskId(task.id);
    setEditingTitle(task.title);
  }

  function handleCancelEditing() {
    setEditingTaskId(null);
  }

  function handleSubmitEditing(event, task) {
    event.preventDefault();
    onEditTask(task, editingTitle);
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
                editingTitle={editingTitle}
                onEditingTitleChange={setEditingTitle}
                onStartEditing={handleStartEditing}
                onCancelEditing={handleCancelEditing}
                onSubmitEditing={handleSubmitEditing}
                onToggleTask={onToggleTask}
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
