import React from 'react'
const TodoItem = ({items, index , deleteTodoItem,completeTodoItem,updateTodoItem}) => {
  return (
  <div className="todo-list border">
    <ul >
  <li style={{textDecoration: items.complete ? "line-through" : ""}}><span className="Title">Title:</span>  {items.todoTitle}</li>
  <hr />
  <li style={{textDecoration: items.complete ? "line-through" : ""}}> <span className="Description">Description: </span>  {items.todoDescription}</li>
  </ul>
  <div className="mar btns">
    {/* use this button to delete and complete and update todos lists */}
    <button onClick={()=>{deleteTodoItem(index)}}>Delete</button>
    <button onClick={()=>{completeTodoItem(index)}}>Complete</button>
    <button onClick={()=>{updateTodoItem(index)}}>Update</button>
  </div>
 
  </div>
  )}
  export default TodoItem