import { useState } from 'react'
import './App.css'
import Child from './Child'

function App() {
  const [users, setUsers] = useState(
    [
      { id: 1, name: "sri", age: 27 },
      { id: 2, name: "naksha", age: 19 },
      { id: 3, name: "varni", age: 20 },
      { id: 4, name: "hema", age: 19 },
    ])
  //const[state, setstate]= useState(0)
  // const handleClick=()=>{
  // setstate(state+1)
  // }
  // const otherClick=()=>{
  // setstate(state-1)
  // }
  return (
    <>
      {/*<Child name={"varni"}age={19} />
   <Child name={"naksha"} age={19}/>
   <div>{state}</div>
   <button onClick={handleClick}>add</button>
   <button onClick={otherClick}>delete</button>*/}
      <Child users={users} />
    </>
  )
}


export default App
