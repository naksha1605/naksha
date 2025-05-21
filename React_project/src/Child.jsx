import React from 'react'

function Child({users}) {
  return (
  
    <div>
      {users.map((users)=>(
        <>
        <ol key={users.id}>
          <li>{users.name}</li>
          <il>{users.age}</il>
        </ol></>
      ))}
      </div>
  
  )
}

export default Child