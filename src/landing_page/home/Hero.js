import React from 'react';
import "../../index.css"

function Hero() {
    return (
        <>
            <div style={{
                margin: "0px",
                height: "678px",
                width: "1440px",
                boxSizing: "border-box",
                backgroundColor: "rgba(149, 158, 166, 0.33)",
                position: "relative"
            }}>
                {/* Text on the left */}
                <div style={{
                    position: "absolute",
                    width: "886px",
                    height: "284px",
                    top: "100px",
                    left: "51px",
                    gap: "0px",
                    opacity: "1", // Assuming you want it visible
                    fontSize: "117px", // Adjust font size as needed
                    color: "#000", // Adjust text color as needed
                    lineHeight : "142.32px"
                }}>
                    Feeling to call someone?
                </div>

                {/* Image on the right */}
                <div style={{
                    position: "absolute",
                    width: "364px",
                    height: "335px",
                    top: "160px",
                    left: "956px",
                    gap: "0px",
                    opacity: "1", // Assuming you want it visible
                    backgroundColor: "#fff", // Placeholder for the image
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    Sad/Frustrated face
                </div>

                {/* Button */}
                <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <button className='herobtn p-4 pt-2 pb-2' >Talk with Expert</button>
                    </div>
                </div>
            </div>

            </div>
        </>
    );
}

export default Hero;
