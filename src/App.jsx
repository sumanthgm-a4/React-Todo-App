import { useEffect, useState } from 'react'
import './App.css'
import TextInput from './components/TextInput'
import Tasks from './components/Tasks';

function App() {
  // localStorage.clear()

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("taskList")) || []);

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(tasks));
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TextInput tasks={tasks} setTasks={setTasks} />
      <hr />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
