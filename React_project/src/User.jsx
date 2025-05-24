import React, {useState} from 'react'

function User() {
    const [title,setTitle]=useState("")
    const [userId, setUserId] = useState("")

    const handleSubmit = () => {
        const user = {
            "title": title,
            "userId": userId,
        }
    try{
     fetch('https://dummyjson.com/posts/add', {
           method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(res1 => console.log(res1));
            } catch (error) {
                console.error("err", error.message)
            }
        }

    

  return (
    <div className ='d-flex flex-direction-row justify-content-center'> 
         <input
         type="text"
         value={title}
         onChange={(e)=> setTitle(e.target.value)}/>
         <input 
         type="number"
         value={userId}
         onChange={(e)=> setUserId(e.target.value)} />    
         <botton onClick={handleSubmit}className='btn btn-primary'>submit</botton>
     </div>
  )
}

export default User