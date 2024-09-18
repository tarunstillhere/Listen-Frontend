import React from 'react';
import Slider from 'react-slick'; // Import the react-slick carousel component
import 'slick-carousel/slick/slick.css'; // Import slick-carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick-carousel theme CSS
import "../../index.css"; // Your custom CSS file
function Issue() {
    // Slider settings for react-slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px', // Remove center padding if added
        autoplay: false, // Disabled autoplay
        arrows: true, // Enable arrows for manual navigation
    };

    return (
        <>
            <div className='issue-container' style={{
                margin: "0px",
                height: "816px",
                width: "1440px",
                boxSizing: "border-box",
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(16, 18, 21, 1))", // Background gradient
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h2 style={{
                    color : "white",
                    filter: "blur(0.5px)",
                    fontSize: "36.34px",
                    fontWeight: "800",
                    marginBottom: '40px',
                    position : "absolute",
                    top : "80px"
                }}>
                    Problems you can freely talk about
                </h2>

                <div style={{ width: '80%' }}>
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div style={{ position: "relative", textAlign: "center", padding: "0 15px" }}> {/* Add margin for spacing */}
                            <div className="card" style={{
                                backgroundColor: "white",
                                // padding: "20px",
                                margin: '0 10px',  // Add margin between cards
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                borderRadius: '15px'
                            }}>
                                <img src='./media/images/1st.png' style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                            </div>
                            <p style={{
                                fontSize: "24px",
                                // marginTop: "20px",
                                backgroundColor: 'white',
                                padding: '10px 20px',
                                borderRadius: '10px',
                                display: 'inline-block'
                            }}>Career Uncertainty</p>
                        </div>

                        {/* Slide 2 */}
                        <div style={{ position: "relative", textAlign: "center", padding: "0 15px" }}> {/* Add margin for spacing */}
                            <div className="card" style={{
                                backgroundColor: "white",
                                // padding: "20px",
                                margin: '0 10px',  // Add margin between cards
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                borderRadius: '15px'
                            }}>
                                <img src='./media/images/2nd.png' style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                            </div>
                            <p style={{
                                fontSize: "24px",
                                // marginTop: "20px",
                                backgroundColor: 'white',
                                padding: '10px 20px',
                                borderRadius: '10px',
                                display: 'inline-block'
                            }}>Heart broken</p>
                        </div>

                        {/* Slide 3 */}
                        <div style={{ position: "relative", textAlign: "center", padding: "0 15px" }}> {/* Add margin for spacing */}
                            <div className="card" style={{
                                backgroundColor: "white",
                                // padding: "20px",
                                margin: '0 10px',  // Add margin between cards
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                borderRadius: '15px'
                            }}>
                                <img src='./media/images/3rd.png' style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                            </div>
                            <p style={{
                                fontSize: "24px",
                                // marginTop: "20px",
                                backgroundColor: 'white',
                                padding: '10px 20px',
                                borderRadius: '10px',
                                display: 'inline-block',
                            }}>Office Stress</p>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='issue-container' style={{
                margin: "0px",
                height: "816px",
                width: "1440px",
                boxSizing: "border-box",
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(16, 18, 21, 1))", // Background gradient
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h2 style={{
                    color : "white",
                    filter: "blur(0.5px)",
                    fontSize: "36.34px",
                    fontWeight: "800",
                    marginBottom: '40px',
                    position : "absolute",
                    top : "80px"
                }}>
                    Or simple discuss how you are feeling today
                </h2>

                <div style={{ width: '80%' }}>
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div style={{ position: "relative", textAlign: "center", padding: "0 15px" }}> {/* Add margin for spacing */}
                            <div className="card" style={{
                                backgroundColor: "white",
                                // padding: "20px",
                                margin: '0 10px',  // Add margin between cards
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                borderRadius: '15px'
                            }}>
                                <img src='./media/images/chair.png' style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                            </div>
                            <p style={{
                                fontSize: "24px",
                                // marginTop: "20px",
                                backgroundColor: 'white',
                                padding: '10px 20px',
                                borderRadius: '10px',
                                display: 'inline-block'
                            }}>Lonliness</p>
                        </div>

                        {/* Slide 2 */}
                        <div style={{ position: "relative", textAlign: "center", padding: "0 15px" }}> {/* Add margin for spacing */}
                            <div className="card" style={{
                                backgroundColor: "white",
                                // padding: "20px",
                                margin: '0 10px',  // Add margin between cards
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                borderRadius: '15px'
                            }}>
                                <img src='./media/images/2nd.png' style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                            </div>
                            <p style={{
                                fontSize: "24px",
                                // marginTop: "20px",
                                backgroundColor: 'white',
                                padding: '10px 20px',
                                borderRadius: '10px',
                                display: 'inline-block'
                            }}>Low self estime</p>
                        </div>

                        {/* Slide 3 */}
                        <div style={{ position: "relative", textAlign: "center", padding: "0 15px" }}> {/* Add margin for spacing */}
                            <div className="card" style={{
                                backgroundColor: "white",
                                // padding: "20px",
                                margin: '0 10px',  // Add margin between cards
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                borderRadius: '15px'
                            }}>
                                <img src='./media/images/self.png' style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                            </div>
                            <p style={{
                                fontSize: "24px",
                                // marginTop: "20px",
                                backgroundColor: 'white',
                                padding: '10px 20px',
                                borderRadius: '10px',
                                display: 'inline-block',
                            }}>Guilt</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Issue;
