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

  function handleUpdateTask(updatedTask) {
    if (updatedTask.title.trim() === "") return;

    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  }

  function handleDeleteTask(targetTask) {
    setTasks(tasks.filter((task) => task.id !== targetTask.id));
  }

  return (
    <>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
