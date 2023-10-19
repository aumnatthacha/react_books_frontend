/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const MyNavber = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#556B2F" }}>
        <div className="container-md">
          <Link className="navbar-brand" to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2702/2702069.png"
              style={{ width: '50px', height: 'auto' }}
              alt="Logo"
            />
          </Link>
          <form>
            <button type="button" className="btn btn-outline-light">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </button>{' '}
            <button type="button" className="btn btn-outline-light">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default MyNavber;
