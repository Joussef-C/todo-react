import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
  const trimmedName = updatedTaskName.trim();


  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!trimmedName) {
      return;
    }
    updateTask({ ...editedTask, name: trimmedName })
  }

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
      >
      <form
        className="todo edit-form"
        onSubmit={handleFormSubmit}
        >
        <input
          type="text"
          id="editTask"
          className="input"
          value={updatedTaskName}
          onChange={(e) => setUpdatedTaskName(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Rename task"
        />
        <button
          className="btn primary-btn"
          type="submit"
          disabled={!trimmedName}
          >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  )
}
export default EditForm
