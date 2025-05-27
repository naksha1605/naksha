import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import From from './Form'
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
            <Route path="/signup" element={<Sign />}></Route>
            <Route path="/" element={<Login />}></Route>

            <Route path="/studentform" element={<Form />}></Route>
            <Route path="/biodata" element={< Bio />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}
export default App
