import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Hero from "./home/Hero";
import Stats from "./home/Stats";

function MainPage() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(scrollPosition > currentScrollPos);
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="background-container">
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg ${
          showNavbar ? "navbar-visible" : "navbar-hidden"
        }`}
      >
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
            onClick={handleMenuToggle} // Toggle menu state
            aria-controls="navbarSupportedContent"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarSupportedContent"
            ref={menuRef}
          >
            <form
              className="d-flex flex-grow-1 justify-content-end"
              role="search"
            >
              <ul
                className="navbar-nav mb-2 mb-lg-0"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <li className="nav-item" style={{ marginRight: "10px" }}>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/meeting"
                    style={{
                      color: "white",
                      marginRight: "15px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Personal Interaction
                  </Link>
                </li>
                <li className="nav-item" style={{ marginRight: "15px" }}>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/services"
                    style={{
                      color: "white",
                      marginRight: "15px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Upcoming Services
                  </Link>
                </li>
                <li style={{ display: "flex", alignItems: "baseline" }}>
                  <a
                    href="https://api.whatsapp.com/send?phone=918700103640"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navs-btn p-4 pt-2 pb-2"
                    style={{
                      marginRight: "15px",
                      marginTop: menuOpen ? "30px" : "0px",
                    }}
                  >
                    <img
                      src="./media/images/msg.png"
                      alt="Chat now"
                      style={{ marginRight: "10px" }}
                    />
                    Chat now
                  </a>

                  <button
                    className="navs-btn p-4 pt-2 pb-2"
                    style={{ width: "196px" }}
                  >
                    <img
                      src="./media/images/phone.png"
                      alt="Call us"
                      style={{ marginRight: "20px" }}
                    />
                    <a
                      href="tel:+91 8700103640"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      {" "}
                      Call us{" "}
                    </a>
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
