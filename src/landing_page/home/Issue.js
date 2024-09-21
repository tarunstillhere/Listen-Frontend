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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false, // Disable center mode on smaller screens
                }
            }
        ]
    };

    return (
        <>
            <div className='issue-container'>
                <h2 className='issue-heading'>
                    Problems you can freely talk about
                </h2>

                <div className='slider-wrapper'>
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div className='slider-item'>
                            <div className="card">
                                <img src='./media/images/1st.png' alt="Career Uncertainty" className="card-img" />
                            </div>
                            <p className="card-title">Career Uncertainty</p>
                        </div>

                        {/* Slide 2 */}
                        <div className='slider-item'>
                            <div className="card">
                                <img src='./media/images/2nd.png' alt="Heart broken" className="card-img" />
                            </div>
                            <p className="card-title">Heart broken</p>
                        </div>

                        {/* Slide 3 */}
                        <div className='slider-item'>
                            <div className="card">
                                <img src='./media/images/3rd.png' alt="Office Stress" className="card-img" />
                            </div>
                            <p className="card-title">Office Stress</p>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='issue-container'>
                <h2 className='issue-heading'>
                    Or simply discuss how you are feeling today
                </h2>

                <div className='slider-wrapper'>
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div className='slider-item'>
                            <div className="card">
                                <img src='./media/images/chair.png' alt="Loneliness" className="card-img" />
                            </div>
                            <p className="card-title">Loneliness</p>
                        </div>

                        {/* Slide 2 */}
                        <div className='slider-item'>
                            <div className="card">
                                <img src='./media/images/2nd.png' alt="Low self esteem" className="card-img" />
                            </div>
                            <p className="card-title">Low self esteem</p>
                        </div>

                        {/* Slide 3 */}
                        <div className='slider-item'>
                            <div className="card">
                                <img src='./media/images/self.png' alt="Guilt" className="card-img" />
                            </div>
                            <p className="card-title">Guilt</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Issue;
