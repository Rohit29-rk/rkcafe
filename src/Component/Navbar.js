import React from "react";
import '../../src/App.css';
import lojo from "./logo.png";
import { Link } from "react-router-dom";


export default function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src={lojo}
            className="logo"
            alt="logo"
            height="60px"
            width="70px"
          ></img>
          <Link className="navbar-brand" to="/">
            RK Cafe
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link role="button" to="/admin" className="btn btn-primary ">
                Admin
              </Link>
             
            </form>
            
            
          </div>
        </div>
      </nav>
    </>
  );
}
