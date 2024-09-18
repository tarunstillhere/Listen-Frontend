import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Hero from "./home/Hero"; // Assuming Hero is in the same folder
import Stats from "./home/Stats"; // Assuming Stats is in the same folder

function MainPage() {
  return (
    <div className="background-container">
      {/* Navbar */}
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-left">
            <Link
              className="navbar-brand"
              to="/"
              style={{ textDecoration: "none" }}
            >
              <img className="logo" src="./media/images/logo.svg" alt="Logo" />
            </Link>

            <Link to="/" style={{ textDecoration: "none" }}>
              <p className="logo-title">LISTNER</p>
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form
              className="d-flex flex-grow-1 justify-content-end"
              role="search"
            >
              {" "}
              {/* Add justify-content-end */}
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/meeting"
                    style={{ color: "white" }}
                  >
                    Personal Interaction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/services"
                    style={{ color: "white" }}
                  >
                    Upcoming Services
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

      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />
    </div>
  );
}

export default MainPage;
