import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const trimmedTask = task.trim();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!trimmedTask) {
      return;
    }

    addTask({
      name: trimmedTask,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <input
        type="text"
        id="task"
        className="input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
        autoFocus
        maxLength={60}
        placeholder="Add a task"
      />
      <button
        className="btn primary-btn"
        aria-label="Add Task"
        type="submit"
        disabled={!trimmedTask}
        >
        <PlusIcon />
      </button>
    </form>
  )
}
export default CustomForm
