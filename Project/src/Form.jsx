import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate}from'react-router-dom'

function Form() {
    const [name, setName] = useState("")
    const [rollno, setRollno] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        const data = {
            "name": name,
            "rollno": rollno,
            "email": email,
}
         try {
            fetch("", {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res1 => console.log(res1));
                navigate('/bio')
        } catch (error) {
            console.error("err", error.message)
        }
    }
    return (
        <div>
            <form action=""><h2>student form</h2>
            <center>
                <div> <label >name : </label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)} /> <br /></div>
                <div><label>rollno : </label>
                    <input type="number,text"
                        onChange={(e) => setRollno(e.target.value)} /></div>
                <div><label>email : </label>
                    <input type="text"
                        onChange={(e) => setEmail(e.target.value)} /></div>
                <button onClick={handleSubmit} className='btn btn-primary'>login</button>
            </center>
            </form>
        </div>
    )
}
export default Form