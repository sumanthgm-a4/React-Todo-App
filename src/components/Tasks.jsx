import Task from "./Task";

import './Tasks.css'

function Tasks({ tasks, setTasks }) {

    const notDoneCount = tasks.filter(task => !task.done).length;

    const tasksInReverse = tasks.toReversed();

    function handleMarkCompleted() {
        setTasks((prevTasks) => 
            prevTasks.map((task) => ({
                ...task,   // Copies all the existing properties (id, message, timestamp)
                done: true // Overrides the done property to true for EVERY item
            }))
        );
    }

    return (
        <div className="tasks-container">
            {
                tasksInReverse.map((task) => {
                    return (
                        <Task key={task.id} task={task} setTasks={setTasks} />
                    );
                })
            }
            <div className="tasks-footer">
                <span className="active-count">{notDoneCount} active item(s) left</span>
                <button className="clear-btn" onClick={handleMarkCompleted}>
                    Mark all completed
                </button>
            </div>
        </div>
    )
}

export default Tasks;