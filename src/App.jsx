import { useReducer } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added":
      return [
        ...tasks,
        { id: action.id, title: action.title, completed: false },
      ];
    case "updated":
      return tasks.map((task) =>
        task.id === action.task.id ? action.task : task,
      );
    case "deleted":
      return tasks.filter((task) => task.id !== action.task.id);
    default:
      return tasks;
  }
}

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  function handleAddTask(title) {
    if (title.trim() === "") return;

    dispatch({
      type: "added",
      id: crypto.randomUUID(),
      title,
    });
  }

  function handleUpdateTask(updatedTask) {
    if (updatedTask.title.trim() === "") return;

    dispatch({
      type: "updated",
      task: updatedTask,
    });
  }

  function handleDeleteTask(targetTask) {
    dispatch({
      type: "deleted",
      task: targetTask,
    });
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
