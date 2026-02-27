import { useState } from 'react'
import './App.css'
import useLocalStorage from './useLocalStorage'
import CustomForm from './components/CustomForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskId, setNewTaskId] = useState(null);

  const completedCount = tasks.filter(task => task.checked).length;
  const openCount = tasks.length - completedCount;

  const addTask = (task) => {
    setNewTaskId(task.id);
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    if (previousFocusEl?.focus) {
      previousFocusEl.focus();
    }
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="todo-title">

        <h1 id="todo-title">Task List</h1>
        <p className="hero-copy">
          Take Tasks online
        </p>
        <CustomForm addTask={addTask} />
        <div className="hero-meta" aria-live="polite">
          <p>{openCount} open</p>
          <p>{completedCount} done</p>
          <p>{tasks.length} total</p>
        </div>
      </section>

      <section className="tasks-panel" aria-labelledby="tasks-heading">
        <div className="tasks-heading-row">
          <h2 id="tasks-heading">Today&rsquo;s Tasks</h2>

        </div>
        {tasks.length > 0 ? (
          <TaskList
            tasks={tasks}
            newTaskId={newTaskId}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        ) : (
          <p className="empty-state">...</p>
        )}
      </section>

      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
    </main>
  )
}

export default App
