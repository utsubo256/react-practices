import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(title) {
    if (title.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
  }

  function handleToggleTask(targetTask) {
    setTasks(
      tasks.map((task) =>
        task.id === targetTask.id
          ? { ...task, completed: !task.completed }
          : task,
      ),
    );
  }

  function handleDeleteTask(targetTask) {
    setTasks(tasks.filter((task) => task.id !== targetTask.id));
  }

  function handleEditTask(targetTask, newTitle) {
    if (newTitle.trim() === "") return;

    setTasks(
      tasks.map((task) =>
        task.id === targetTask.id ? { ...task, title: newTitle } : task,
      ),
    );
  }

  return (
    <>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </>
  );
}

export default App;
