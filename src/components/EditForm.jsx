import { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editedTask, name: updatedTaskName})
  }

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
      >
      <form
        className="todo"
        onSubmit={handleFormSubmit}
        >
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
        </div>
        <button
          className="btn"
          type="submit"
          >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  )
}
export default EditForm