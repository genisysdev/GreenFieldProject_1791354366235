import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">E-Shop</h1>
        </Link>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          {user ? (
            <>
              <span className="ml-4">Hello, {user.name}</span>
              <button onClick={logoutHandler} className="ml-4 text-white bg-red-500 hover:bg-red-700 px-3 py-1 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
