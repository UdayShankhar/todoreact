import React, { useState } from "react";

export default function Form({ onSubmit }) {
    const [task, setTask] = useState('');
    return (
        <div className="input">
        <form onSubmit={(e) => e.preventDefault()} >
            <input
                type="text"
                class="form-control add-task"
                placeholder="New Task..."
                value={task}
                onChange={(e) => {
                    setTask(e.target.value);
                }}
                onKeyPress={(e) => {
                    if (e.key === 'Enter' && task.length > 0) {
                        onSubmit(task);
                        setTask('');
                    }
                }}
            />
        </form>
        </div>
    );
}