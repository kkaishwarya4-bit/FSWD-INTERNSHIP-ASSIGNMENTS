import React, { useState } from "react";

function App() {

  // state for tasks
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // add task
  const addTask = () => {
    if(task !== ""){
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  // delete task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((t, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{textAlign:"center", marginTop:"40px"}}>

      <h1>Task List App</h1>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;