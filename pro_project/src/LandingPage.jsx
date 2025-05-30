import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LandingPage.css';
import {Link} from "react-router-dom"

const LandingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=8')
      .then(res => setProducts(res.data.products));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="card-custom">
        <div className="row g-4">
          {products.map(product => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card w-100">
                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                <div className="card-body" >
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <p className="card-description">{product.description}</p>
                  <Link to="/products">Products</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default LandingPage;