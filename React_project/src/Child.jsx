import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Child({ users }) {
  // useEffect(()=>{
  //      console.log("enter in Child Component")
  //   },[users])

  //       useEffect(()=>{
  //                return () => console.log("exist in Child Component")
  //   },[]) 
  return (
    <div className='card-container'>
      <div className="row">
        {users.map((user) => (
          <div className="col-3"key={user.id}><div className="card" style={{ width: "18rem;" }} >
            <img src={user.images} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{user.title}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div></div>
        ))}

      </div>
    </div>
  )
}
export default Child