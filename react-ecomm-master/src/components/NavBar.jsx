import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light bg-dark py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          DC MART
        </NavLink>
       
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav">
            
          <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> LOGIN
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> REGISTER
              </NavLink>
            <NavLink className="nav-link active" aria-current="page" to="/">
              HOME
            </NavLink>
            <NavLink className="nav-link" to="/products">
              PRODUCTS
            </NavLink>
            <NavLink className="nav-link" to="/Contact">
              CONTACTS
            </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> CART
              </NavLink>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
