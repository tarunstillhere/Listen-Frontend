import React from "react";
import "../../index.css";

function Hero() {
  return (
    <div className="hero">
     <div
  style={{
    position: "absolute",
    width: "100%",
    top: "100px",
    left: "0",
    display: "flex",
    justifyContent: "space-between",  // Left and right alignment
    alignItems: "center",
    padding: "0 50px",
    boxSizing: "border-box",
  }}
>
  {/* Left side - Sadness */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "20px",
      fontWeight : "800",
      position: "relative",
      left: "230px", // Positioning it relative to the container
      top : "80px"
    }}
  >
    <span
      style={{
        fontSize: "60px", 
        color: "#fff",
        lineHeight: "72px", 
      }}
    >
      Sadness
    </span>
    <img
      src="./media/images/wrong.png"
      alt="Wrong Icon"
      style={{
        width: "50px",
        height: "50px",
      }}
    />
  </div>

  {/* Right side - Happiness */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "20px",
      fontWeight : "800",
      position: "relative",
      right: "220px",  // Positioning it relative to the container
      top : "80px"
    }}
  >
    <span
      style={{
        fontSize: "60px", 
        color: "#fff",
        lineHeight: "72px", 
      }}
    >
      Happiness
    </span>
    <img
      src="./media/images/right.png"
      alt="Right Icon"
      style={{
        width: "50px",
        height: "50px",
      }}
    />
  </div>
</div>


      {/* Image on the right */}
      <div
        style={{
          position: "absolute",
          width: "1009px",
          height: "643px",
          top: "300px",
          right: "200px",
          backgroundColor: "#fff", // Placeholder for the image
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
     <img src="./media/images/main.png"></img>
       </div> 

       <p className="click-away">
       Just a click away 
       </p>

      {/* Button */}
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="herobtn p-4 pt-2 pb-2"><img src="./media/images/msg.png" style={{marginRight : "20px"}}></img>Chat now</button>
            <button className="herobtn2 p-4 pt-2 pb-2"><img src="./media/images/phone.png" style={{marginRight : "20px"}}></img>Call us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
