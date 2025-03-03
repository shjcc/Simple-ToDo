import { useState } from "react";
import CheckListItem from "./CheckListItem";

function CheckList() {
    const [tasks, setTasks] = useState([{
        id: 1,
        text: 'Leetcode',
        completed: true
    },
    {
        id: 2,
        text: 'Apply for a job',
        completed: true
    },
]);
const [text, setText] = useState('');

function addTask(text) {
    const newTask = {
        id: Date.now(),
        text,
        completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
}
function deleteTask(id) {
    setTasks(tasks.map(task => {
        if (task.id == id) {
            return {...task, completed: !task.completed};
        } else {
            return task;
        }
    }));
}

function toggleCompleted(id) {
    setTasks(tasks.map(task => {
        if (task.id == id) {
            return {...task, completed: !task.completed};
        } else {
            return task;
        }
}));
}

return(
    <div className="checkList">
        {tasks.map(task => (
            <CheckListItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
            />
        ))}
        <input
        value={text}
        onChange={e => setText(e.target.value)}
        />
        <button onClick={() => addTask(text)}> Add item </button>
    </div>
);
}
export default CheckList;



