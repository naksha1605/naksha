import {useEffect, useState } from 'react'
import './App.css'
import Home from './Home'
import Child from './Child'
import User from './User'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  // const [users, setUsers] = useState(
  // [
  //  { id: 1, name: "sri", age: 27 },
  //  { id: 2, name: "naksha", age: 19 },
  //  { id: 3, name: "varni", age: 20 },
  //  { id: 4, name: "hema", age: 19 },
  // ])
  //const[state, setstate]= useState(0)
  // const handleClick=()=>{
  // setstate(state+1)
  // }
  // const otherClick=()=>{
  // setstate(state-1)
  // }
  // const[name,setName]=useState("")
  // function handleClick(){
  //   alert("Happy Brithday")
  // }
  // const [name, setName] = useState("")

  // function handleClick(data) {
  //   setName(data)
  // }useEffect(() => 
  const [users, setUsers] = useState([])

  function data() {
     const res = fetch("https://dummyjson.com/products") 
  .then(
    (res) => res.json())
    .then((data) => setUsers(data.products)).catch((err)=> console.log("err",err))

}
useEffect(()=>{
  data()

},[])




return (
  <>
    {/*<Child name={"varni"}age={19} />
   <Child name={"naksha"} age={19}/>
   <div>{state}</div>
   <button onClick={handleClick}>add</button>
   <button onClick={otherClick}>delete</button>*/}
    {/*<Child users={users} />*/}
    {/* <button onClick={handleClick}>event trigger</button>
    <br/>
    <input
     type="text"
     value={name}onChange={(e)=>setName(e.target.value)}/>
     <p>hello,{name}</p> */}

    {/* <div className="container">
        <div className="row mt-8">
          <div className="col-12 text-center mt-5">
            <Child1 onButtonClick={handleClick} name={name} />
            <h1>{name}</h1>

          </div>
        </div>

      </div> */}
      
      <Router>
        <Routes>
          <Route path="/"element={<Home/>}></Route>
          <Route path ="/child"element={<Child users={users}/>}></Route>
          <Route path ="/user"element={<User/>}> </Route>
        </Routes>
      </Router> 

  </>
)
}

export default App
