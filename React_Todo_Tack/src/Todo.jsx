import React, { useState } from 'react'

function Todo() {
  const [tasks, setTasks] = useState(["eat breakfast", "take a shower", "go to college"])
  const [newtasks, setNewTasks] = useState()

  function handleInputChange(event) {
    setNewTasks(event.target.value);

  }
  function addTask() {

    setTasks(t => [...t, newtasks]);
    setNewTasks("");

  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveTaskup(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  function moveTaskdown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To-do-List</h1>
      <div>
        <input type="text"
          value={newtasks}
          onChange={handleInputChange}
          placeholder="Enter a task" />
        <button className="add-button" onClick={addTask}>add </button>
      </div>
      <ol>
        {tasks.map((task, index) =>
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button"
              onClick={() => deleteTask(index)}>
              delete
            </button>
            <button className="move-button"
              onClick={() => moveTaskup(index)}>
              up
            </button>
            <button className="move-button"
              onClick={() => moveTaskdown(index)}>
              down
            </button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default Todo