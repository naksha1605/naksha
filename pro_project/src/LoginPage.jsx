import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const navigate = useNavigate()

    function handleSubmit (){
      if(username === "admin" && password=== "admin"){
        navigate("/")
      }
    }
  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login-box bg-white p-4 rounded shadow">
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary w-100" on>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;