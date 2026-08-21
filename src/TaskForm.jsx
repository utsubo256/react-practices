import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddTask(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button disabled={title.trim() === ""}>追加</button>
    </form>
  );
}

export default TaskForm;
