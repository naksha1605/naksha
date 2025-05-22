import React from 'react'

function Child1({ onButtonClick, name }) {
  const sentData = () => {
    onButtonClick("this message from chlid!!!")
  }
  return (
    <div>
      <button onClick={sentData} className='btn btn-danger'>clickMe</button>




    </div>
  )
}

export default Child1