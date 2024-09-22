import React, { useState, useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Hero from "./home/Hero";
import Stats from "./home/Stats";

function MainPage() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (scrollPosition > currentScrollPos) {
        // User is scrolling up
        setShowNavbar(true);
      } else {
        // User is scrolling down
        setShowNavbar(false);
      }
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  return (
    <div className="background-container">
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${showNavbar ? 'navbar-visible' : 'navbar-hidden'}`}>
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
                    style={{ color: "white",  marginRight : "15px" }}
                  >
                    Personal Interaction
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/services"
                    style={{ color: "white", marginRight : "15px" }}
              
                  >
                    Upcoming Services
                  </Link>
                </li>
              <li>
              <a href="https://api.whatsapp.com/send?phone=918700103640" target="_blank" rel="noopener noreferrer" className="navs-btn p-4 pt-2 pb-2" style={{ display: 'inline-flex', textDecoration: 'none' }}>
  <img src="./media/images/msg.png" alt="Chat now" style={{ marginRight: "20px" }} />
  Chat now
</a>

<button className="navs-btn p-4 pt-2 pb-2" style={{  width : "196px" }}>
  <img src="./media/images/phone.png" alt="Call us" style={{ marginRight: "20px",}} />
  Call us
</button>
        </li>
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

