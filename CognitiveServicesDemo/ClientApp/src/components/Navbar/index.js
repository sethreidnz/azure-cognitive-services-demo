import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.png";

export const Navbar = () => (
  <nav className="navbar is-black">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={Logo} alt="Microsoft Azure" />
        </a>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Computer Vision
          </Link>
          <Link className="navbar-item" to="/text-analytics">
            Text Analytics
          </Link>
          <Link className="navbar-item" to="/face-api">
            Face API
          </Link>
        </div>
      </div>
    </div>
  </nav>
);
