import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './app.css'
import './LandingPage.css'
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
// import CategoryProducts from './components/CategoryProducts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <h3><Link className="navbar-brand" to="/" style={{ fontWeight: "bolder" }}>My Shop</Link>
          </h3>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto gap-10">
              <li className="nav-item"><Link className="nav-link" style={{ fontWeight: "bolder" }} to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login" style={{ fontWeight: "bolder" }}>LoginPage</Link></li>
              {/* <li className="nav-item"><Link className="nav-link" to="/categories">Categories</Link></li> */}
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/categories" element={<CategoryProducts />} /> */}
      </Routes>
    </Router>
  );
}

export default App;