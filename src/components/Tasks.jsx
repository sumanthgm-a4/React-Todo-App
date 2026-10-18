import Task from "./Task";

function Tasks({ tasks, setTasks }) {

    const tasksInReverse = tasks.toReversed();

    return (
        <div className="tasks-container">
            {
                tasksInReverse.map((task) => {
                    return (
                        <Task key={task.id} task={task} setTasks={setTasks} />
                    );
                })
            }
        </div>
    )
}

export default Tasks;