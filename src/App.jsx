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

  return (
    <>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
