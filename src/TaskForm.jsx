import "./TaskForm.css";
import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const { isDark } = useContext(ThemeContext);

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={`task-input ${isDark ? "dark" : "light"}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button disabled={title.trim() === ""}>追加</button>
    </form>
  );
}

export default TaskForm;
