import Tasks from '../components/Tasks';
import TextInput from '../components/TextInput';
import './HomePage.css';

function HomePage({ tasks, setTasks }) {
    return (
        <>
            <h1>Todo App</h1>
            <TextInput tasks={tasks} setTasks={setTasks} />
            <hr />
            <Tasks tasks={tasks} setTasks={setTasks} />
        </>
    )
}

export default HomePage;