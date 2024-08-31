import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div style={{ height: "100px", width: "20%" }} class="container-fluid">
        <div className="navbar-left">
          <Link class="navbar-brand" to="/">
            <img className="logo" src="./media/images/logo.svg" />
          </Link>

          <Link to="/">
            <p
              className="logo-title m-0"
              style={{ fontSize: "26px", fontWeight: "600", color: "#000" }}
            >
              LISTNER
            </p>
          </Link>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/meeting"
                  >
                    Book a meeting
                  </Link>
                </li>
                
                <li class="nav-item">
                <Link
                  class="nav-link active"
                  aria-current="page"
                  to="/services"
                >
                  Upcoming Services
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/talk">
                  Talk with your buddy
                </Link>
              </li>

              <Link to="/signin" style={{ textDecoration: "none" }}>
                <button className="nav-btn nav-item" type="submit">
                  Sign in
                </button>
              </Link>

              <Link to="/signup" style={{ textDecoration: "none" }}>
                <button
                  className="nav-btn nav-item"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid black",
                    color: "#000",
                    marginLeft: "25px",
                  }}
                  type="submit"
                >
                  Register
                </button>
              </Link>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
