import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(title) {
    if (title.trim() === "") return;

    setTasks((previousTasks) => [
      ...previousTasks,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);
  }

  function handleToggleTask(targetTask) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === targetTask.id
          ? { ...task, completed: !task.completed }
          : task,
      ),
    );
  }

  return (
    <>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
    </>
  );
}

export default App;
