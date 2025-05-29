import React,{ useState } from 'react'
const TodoInput = ({createTodoItem}) => {
const [value, setValue] = useState("")
const [value1,setValue1]= useState ("")
// this componenet will be create Todo -Items 
const handleSubmit = e => {
  e.preventDefault();
  //this given value is input values 
  if(value === ""){
  return console.log("Please add something to-do title")
  }
  if(value1 === ""){
    return console.log("please add something to-do description")
  }
  createTodoItem(value,value1)
  setValue("")
  setValue1("")
  }
return (
  <div >
    {/* HandleSubmit to whole form submit that values that can make onChange  */}
  <form onSubmit={handleSubmit}>
  <input
  type="text"
  placeholder="Create todo"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  required
  />
  <input
  type="text"
  placeholder="Create Description"
  value={value1}
  onChange={(e) => setValue1(e.target.value)}
  required
  />
  <button onClick={handleSubmit}>Create</button>
  </form>
  </div>
)}
export default TodoInput
