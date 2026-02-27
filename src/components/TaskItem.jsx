import styles from './TaskItem.module.css';
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task, isNew, deleteTask, toggleTask, enterEditMode }) => {
  const handleCheckboxChange = () => {
    toggleTask(task.id);
  }

  return (
    <li className={`${styles.task} ${isNew ? styles.taskEnter : ''}`}>
      <label htmlFor={task.id} className={styles.main}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={task.checked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <span className={styles.label}>
          {task.name}
        </span>
      </label>

      <div className={styles.actions}>
        <button
          className="btn ghost-btn"
          aria-label={`Edit ${task.name} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className="btn ghost-btn danger"
          aria-label={`Delete ${task.name} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  )
}
export default TaskItem
