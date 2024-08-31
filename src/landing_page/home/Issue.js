import React from 'react';
import "../../index.css";

function Issue() {
    return ( 
        <>
            <div style={{
                margin: "0px",
                height: "816px",
                width: "1440px",
                boxSizing: "border-box",
                backgroundColor: "rgba(149, 158, 166, 0.33)",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    position: "relative"
                }}>
                    <div style={{ position: "relative", textAlign: "center" }}>
                        <div className="card" style={{
                            backgroundColor: "white",
                            padding: "40px",
                            width: "300px",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
                        }}>
                            <img src='./media/images/hero.png' style={{ width: '100%', height: 'auto' }}/>
                        </div>

                        <p style={{
                            fontSize: "40px", // Keeping the large text size
                            marginTop: "50px"
                        }}>Career issue? <br></br>After 12th</p>

                    </div>

                    <div style={{ position: "relative", textAlign: "center" }}>
                       
                        <div className="card" style={{
                            backgroundColor: "white",
                            padding: "40px",
                            width: "300px",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
                        }}>
                            <img src='./media/images/hero.png' style={{ width: '100%', height: 'auto' }}/>
                        </div>
                        <p style={{
                          fontSize: "40px", // Keeping the large text size
                          marginTop: "50px"
                        }}>Relationship <br></br> issues?</p>

                    </div>

                    <div style={{ position: "relative", textAlign: "center" }}>
                       
                        <div className="card" style={{
                            backgroundColor: "white",
                            padding: "40px",
                            width: "300px",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
                        }}>
                            <img src='./media/images/hero.png' style={{ width: '100%', height: 'auto' }}/>
                        </div>
                        <p style={{
                            fontSize: "40px", // Keeping the large text size
                            marginTop: "50px"
                        }}>Toxic Work <br></br>environment</p>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Issue;
