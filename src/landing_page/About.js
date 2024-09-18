import React from "react";
import "../index.css";

function About() {
  return (
    <div className="about-page">
      {/* Header section with buttons */}
      <p className="about-p">Don't think much, call us and be stress-free</p>
      
      <div className="button-container">
        <button className="about-btn p-4 pt-2 pb-2">
          <img src="./media/images/msg.png" alt="Chat now" style={{ marginRight: "20px" }} />
          Chat now
        </button>
        <button className="about-btn p-4 pt-2 pb-2" style={{  width : "196px" }}>
          <img src="./media/images/phone.png" alt="Call us" style={{ marginRight: "20px",}} />
          Call us
        </button>
      </div>

      {/* About section */}
      <div className="about mb-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="about-title">ABOUT US</p>
              <div className="para-container">
                <p className="about-para">
                  Over 56 million people in India suffer from depression, and more than 38 million face anxiety disorders? 
                  Mental health challenges like depression and loneliness are rising rapidly, especially in urban environments.
                </p>
                <p className="about-para">
                  The fast pace of life, growing social isolation, and increased pressure to succeed have left many feeling 
                  disconnected and alone.
                </p>
                <p className="about-para">
                  We understand how overwhelming these feelings can be. That's why we created this platform — to offer a 
                  space where anyone can reach out, talk, and find support. Whether you're battling loneliness, feeling down, 
                  or just need someone to listen, we're here for you.
                </p>
                <p className="about-para">
                  Our mission is simple: to help you navigate tough times by providing a safe and non-judgmental environment. 
                  You don't have to go through it alone — we're just a message away. Let’s walk this path together, one step at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
