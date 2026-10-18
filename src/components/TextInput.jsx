import { useState } from 'react';
import './TextInput.css';

function TextInput({ tasks, setTasks }) {

    const [inputText, setInputText] = useState("");

    function handleTextInput(event) {
        // handle onChange for input box
        setInputText(event.target.value);
    }

    function handleAddTask() {
        // Guard clause to prevent adding empty tasks
        if (inputText.trim() === "") return;

        // Add the task into the list of tasks coming from App.jsx
        setTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                message: inputText,
                timestamp: new Date(),
                done: false
            }
        ]);

        // Clear the textbox
        setInputText("");

        // localStorage.clear();
    }

    return (
        <>
            <div className="input-container">
                <input
                    type="text"
                    value={inputText}
                    onChange={handleTextInput}
                />
                <button
                    className='add-button'
                    onClick={handleAddTask}
                >
                    Add task
                </button>
            </div>
        </>
    )
}

export default TextInput;