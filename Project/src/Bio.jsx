import React from 'react'
import { useState } from 'react'

function Bio() {
    const[dept,setDept]=useState("")
    const[age,setAge]=useState("")
    const[gender,setGender]=useState("")
    const[mobilenumber,setMobilenumber]=useState("")
    const[stream,setStream]=useState("")

    const handleSubmit=()=>{
        const data={
            "dept":dept,
            "age":age,
            "gender":gender,
            "mobile number":mobilenumber,
            "stream":stream,
        }
        try{
            fetch("", {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res1 => console.log(res1));
        } catch (error) {
            console.error("err", error.message)
        }
    }
  return (
    <div>
        <form action="student biodata">
            <center>
                <div> <label >dept : </label>
                    <input
                        type="text"
                        onChange={(e) => setDept(e.target.value)} /> <br /></div>
                <div><label>age : </label>
                    <input type="number"
                        onChange={(e) => setAge(e.target.value)} /></div>
                <div><label>gender : </label>
                    <input type="text"
                        onChange={(e) => setGender(e.target.value)} /></div>
                        <div><label>mobile number : </label>
                    <input type="number"
                        onChange={(e) => setMobilenumber(e.target.value)} /></div>
                        <div><label>stream : </label>
                    <input type="text"
                        onChange={(e) => setStream(e.target.value)} /></div>
                <button onClick={handleSubmit} className='btn btn-primary'>submit</button>
            </center>
            </form>
        </div>
  )
}

export default Bio