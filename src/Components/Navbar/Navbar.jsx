import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="fs-4 fw-bold">Link Development</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="p-1 border-dark">Drill Down</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-4">
              <Link className="nav-link" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/news">
                News
              </Link>
            </li>
            <li className="nav-item me-5 ms-4">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn ms-5" type="button">
              Login
            </button>
            <button className="btn btn-outline-dark mx-5" type="button">
              Sign up
            </button>
            <ul className="navbar-nav mx-5 me-auto mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/languages"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#en">
                      EN
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#fr">
                      FR
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
