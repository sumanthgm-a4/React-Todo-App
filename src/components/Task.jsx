import { useNavigate } from 'react-router';
import './Task.css'

function Task({ task, setTasks }) {

    const navigate = useNavigate();

    function handleCheckboxChecked() {
        // Use setTasks to update the state array correctly
        setTasks((prevTasks) =>
            prevTasks.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t))
        );
    }

    function handleEditClick(e) {
        e.stopPropagation();
        navigate(`/tasks/${task.id}`);
    }

    function handleDeleteClick(e) {
        e.stopPropagation();
        setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
    }

    // const formattedDateTime = new Date(task.timestamp)
    //     .toLocaleString('en-IN', {
    //         day: 'numeric',
    //         month: 'short',
    //         year: 'numeric',
    //         hour: 'numeric',
    //         minute: '2-digit',
    //         hour12: true,
    //     })
    //     .toLowerCase(); 

    return (
        <div className="task-box">
            <pre className="task-content">
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => e.stopPropagation()}
                    onClick={handleCheckboxChecked}
                    className="task-checkbox"
                />
                <span className="task-message">{task.message}</span>
                <div className="task-right-section">
                    {/* <span className="task-date">{formattedDateTime}</span> */}
                    <button className="edit-task-btn" onClick={handleEditClick}>
                        view/edit
                    </button>
                    <button className="delete-task-btn" onClick={handleDeleteClick}>
                        &times;
                    </button>
                </div>
            </pre>
        </div>
    );
}

export default Task;
