import React, { useState } from 'react'

function Sign(Form) {
   const [username,setUsername]=useState("")
   const[email,setEmail]=useState("")
   const[password,setPassword]=useState("")
         const handleSubmit = () => {
          const data= {
              "username": username,
              "email": email,
              "password":password
          }
          try {
              fetch("", {
                  method: 'POST',
                  headers: { 'content-type': 'application/json' },
                  body: JSON.stringify(data)
              })
                  .then(res => res.json())
                  .then(res1 => console.log(res1));
            }catch (error) {
              console.error("err", error.message)
          }
      }
  return (

<>      
          <div> <form action="sign up"> <h2>sign up</h2>               <div> <label > username : </label>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)} /> <br /></div>
                     <div><label>email : </label>
                    <input type="text"
                        onChange={(e) => setEmail(e.target.value)} /></div>
                        <div> <label> password :</label>
                        <input type="text,number"
                              onChange={(e)=> setPassword(e.target.value)} /></div>
                <button onClick={handleSubmit} className='btn btn-primary'>sign up</button>
                <Link to="/">login</Link>
                </form></div>
    
        </>
  )
}
export default Sign