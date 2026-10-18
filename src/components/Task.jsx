import './Task.css'

function Task({ task, setTasks }) {

    function handleCheckboxChecked() {
        // Use setTasks to update the state array correctly
        setTasks((prevTasks) => 
            prevTasks.map((t) => 
                t.id === task.id ? { ...t, done: !t.done } : t
            )
        );
    }

    return (
        <div className="task-box" onClick={handleCheckboxChecked}>
            <pre className="task-content">
                <input 
                    type="checkbox" 
                    checked={task.done}
                    onChange={(e) => e.stopPropagation()}
                    className="task-checkbox" 
                />
                <span className="task-message">{task.message}</span>
                <span className="task-date">{new Date(task.timestamp).toLocaleString()}</span>
            </pre>
        </div>
    )
}

export default Task;
