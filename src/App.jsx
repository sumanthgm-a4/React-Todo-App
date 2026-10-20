import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router';
import IndividualTaskPage from './pages/IndividualTaskPage';

function App() {
    // localStorage.clear()

    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("taskList")) || [];
    });

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(tasks));
        console.log(tasks);
    }, [tasks]);

    return (
        <div className="app-container">
            <Routes>
                <Route path='/' element={<HomePage tasks={tasks} setTasks={setTasks} />} />
                <Route path='/tasks/:taskId' element={<IndividualTaskPage tasks={tasks} setTasks={setTasks} />} />
            </Routes>
        </div>
    )
}

export default App
