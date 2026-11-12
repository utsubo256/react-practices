import { useReducer } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function tasksReducer(state, action) {
  switch (action.type) {
    case "added":
      return {
        tasks: [
          ...state.tasks,
          { id: action.id, title: action.title, completed: false },
        ],
        history: [...state.history, state.tasks],
        redoHistory: [],
      };
    case "updated":
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.task.id ? action.task : task,
        ),
        history: [...state.history, state.tasks],
        redoHistory: [],
      };
    case "deleted":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.task.id),
        history: [...state.history, state.tasks],
        redoHistory: [],
      };
    case "undo":
      if (state.history.length === 0) return state;
      return {
        tasks: state.history[state.history.length - 1],
        history: state.history.slice(0, -1),
        redoHistory: [...state.redoHistory, state.tasks],
      };
    case "redo":
      if (state.redoHistory.length === 0) return state;
      return {
        tasks: state.redoHistory[state.redoHistory.length - 1],
        history: [...state.history, state.tasks],
        redoHistory: state.redoHistory.slice(0, -1),
      };
    default:
      return state;
  }
}

const initialState = {
  tasks: [],
  history: [],
  redoHistory: [],
};

function App() {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

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

  function handleUndoHistory() {
    dispatch({ type: "undo" });
  }

  function handleRedoHistory() {
    dispatch({ type: "redo" });
  }

  return (
    <>
      <TaskForm onAddTask={handleAddTask} />
      <button onClick={handleUndoHistory} disabled={state.history.length === 0}>
        元に戻す
      </button>
      <button
        onClick={handleRedoHistory}
        disabled={state.redoHistory.length === 0}
      >
        やり直す
      </button>
      <TaskList
        tasks={state.tasks}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
