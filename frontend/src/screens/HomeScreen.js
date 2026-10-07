import React, { useState, useEffect } from 'react';
import API from '../api';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await API.get('/products');
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.response && err.response.data.message
          ? err.response.data.message
          : err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="home-screen">
      <h2 className="text-3xl font-bold mb-6">Latest Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : error ? (
        <div className="message error">{error}</div>
      ) : ( 
        <div className="product-grid">
          {products.length > 0 ? (products.map((product) => (
            <div key={product._id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="price">${product.price}</div>
              {/* Link to product detail page if implemented */}
              {/* <Link to={`/product/${product._id}`} className="btn-primary">View Details</Link> */}
            </div>
          ))) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
