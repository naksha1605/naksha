import React from 'react'
import "./App.css"

const Form1 = () => {
  return (
   <>
      <div>student detail</div>
      <div className='con'>
      <label>name</label>
      <input
       text="text"
       name="name"
       />
       <label>dept</label>
       <input
       text="text"
       dept="dept"
       />
       <label > class</label>
       <input
       text="text"
       className="class"
       />
    
       </div>
   </>

  )
}

export default Form1