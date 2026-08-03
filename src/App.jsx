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

  return (
    <>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
