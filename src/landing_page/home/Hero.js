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
    justifyContent: "space-between",  // Space between the elements on larger screens
    alignItems: "center",
    padding: "0 50px",
    boxSizing: "border-box",
    flexWrap: "wrap",  // Allow wrapping for smaller screens
  }}
>
  {/* Left side - Sadness */}
  <div
    className="left-side"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "20px",
      fontWeight: "800",
      position: "relative",
      left: "0",  // Let it start at 0px to be responsive
      top: "80px",
      flex: "1 1 45%",  // Responsive size, grow and shrink as needed
      justifyContent: "center",  // Align to the center
      transition: "left 0.5s ease",  // Smooth transition for shifting
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
    className="right-side"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "20px",
      fontWeight: "800",
      position: "relative",
      right: "0",  // Let it start at 0px to be responsive
      top: "80px",
      flex: "1 1 45%",  // Responsive size, grow and shrink as needed
      justifyContent: "center",  // Align to the center
      transition: "right 0.5s ease",  // Smooth transition for shifting
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


      {/* Image on the center */}
      <div
  style={{
    position: "absolute",
    width: "80%", // Responsive width
    maxWidth: "1009px", // Max width for larger screens
    height: "auto", // Maintain aspect ratio
    top: "350px", // Vertical position
    left: "50%", // Center horizontally
    transform: "translateX(-50%)", // Placeholder for the image
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px", // Add border radius for rounded corners
    boxSizing: "border-box", // Include border in width calculation
  }}
>
  <img
    src="./media/images/main.png"
    alt="Main Image"
    style={{
      width: "100%", // Make the image responsive
      height: "auto", // Maintain aspect ratio
      objectFit: "contain", // Ensure the image fits within the container
    }}
  />
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