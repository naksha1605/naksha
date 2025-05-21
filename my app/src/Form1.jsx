import React from 'react'
import "./App.css"

const Form1 = () => {
  return (
   <>
   <center>
      <div>student detail</div>
      <div className='con'>
      <label>name </label>
      <input
       text="text"
       name="name"
       />
       </div>
       <div>
       <label>dept </label>
       <input
       text="text"
       dept="dept"
       /></div>
       <div>
       <label > class </label>
       <input
       text="text"
       className="class"
       /></div>
       <div>
      <button>submit</button> 
       </div>
       </center>
   </>

  )
}

export default Form1