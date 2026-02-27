import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, newTaskId, deleteTask, toggleTask, enterEditMode }) => {
  const sortedTasks = [...tasks].sort((a, b) => b.id - a.id);

  return (
    <ul className={styles.tasks}>
      {sortedTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          isNew={task.id === newTaskId}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      ))
      }
    </ul>
  )
}
export default TaskList
