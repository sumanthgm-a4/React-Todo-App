import { useNavigate, useParams } from 'react-router';
import './IndividualTaskPage.css';
import { useState } from 'react';

function IndividualTaskPage({ tasks, setTasks }) {
    const { taskId } = useParams();
    const navigate = useNavigate();

    const targetTask = tasks.find(task => task.id === taskId);
    const [textInput, setTextInput] = useState(targetTask ? targetTask.message : "");

    if (!targetTask) {
        return (
            <div className="task-page-dark-container error-state">
                <h2>Task not found</h2>
                <button className="btn-dark-save" onClick={() => navigate('/')}>Back to App</button>
            </div>
        );
    }

    const formattedDateTime = new Date(targetTask.timestamp)
        .toLocaleString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });

    function handleOnChange(event) {
        setTextInput(event.target.value);
    }

    function handleOnClick() {
        setTasks(previousTasks => 
            previousTasks.map(task => {
                if (task.id === taskId) {
                    return { ...task, message: textInput };
                } else {
                    return task;
                }
            })
        );
        navigate('/');
    }

    return (
        <div className="task-page-dark-container">
            <div className="task-dark-card">
                <div className="task-dark-header">
                    <button className="btn-dark-back" onClick={() => navigate('/')}>← back</button>
                    <h2>Edit Task Details</h2>
                </div>
                
                <textarea 
                    className="task-dark-textarea"
                    rows="8"
                    placeholder="Enter task text..."
                    value={textInput}
                    onChange={handleOnChange}
                ></textarea>
                
                <div className="task-dark-footer">
                    <p className="task-dark-timestamp">Created: {formattedDateTime}</p>
                    <button className="btn-dark-save" onClick={handleOnClick}>Save changes</button>
                </div>
            </div>
        </div>
    );
}

export default IndividualTaskPage;