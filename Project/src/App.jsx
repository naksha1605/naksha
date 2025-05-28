import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './Form'
import Login from './Login'
import Bio from './Bio'
import Sign from './Sign'
function App() {
  const [count, setcount] = useState(0)
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/Sign" element={<Sign />}></Route>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Form" element={<Form />}></Route>
            <Route path="/Bio" element={< Bio />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}
export default App
