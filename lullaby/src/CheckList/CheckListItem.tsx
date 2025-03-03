import React from "react";

function CheckListItem({ task, deleteTask, toggleCompleted}) {
    function handleChange() {
        toggleCompleted(task.id);
    }
    return (
        <div className="checklist-item">
            <input
            type="checkbox"
            checked={task.completed}
            onChange={handleChange}
            />
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>
                X
                </button>
        </div>
    )
}
export default CheckListItem;