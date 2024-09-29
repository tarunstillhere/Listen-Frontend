import React from "react";
import "../../index.css"; // Correct the path if needed

function Reviews() {
  return (
    <div className="reviews-section" style={{ backgroundColor: "black" }}>
       <div className="gradient-reviews">
      <h3 className="review-header">What people say about us</h3>
      <div className="container mt-5">
        <div className="row justify-content-center">
          {/* First card */}
          <div className="col-md-4 mb-4">
            <div className="card review-card">
              <img
                className="card-img-top review-img"
                src="./media/images/hero.png"
                alt="Review 1"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Megha Jain</h5>
                <p className="card-text text-center">
                  I've struggled with depression for years, and talking to
                  someone here has been incredibly comforting. It's hard to open
                  up sometimes, but they make it so easy to share what's on your
                  mind. I always feel lighter after our conversations.
                </p>
              </div>
            </div>
          </div>

          {/* Second card */}
          <div className="col-md-4 mb-4">
            <div className="card review-card">
              <img
                className="card-img-top review-img"
                src="./media/images/Tarun.png"
                alt="Review 2"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Tarun Chauhan</h5>
                <p className="card-text text-center">
                  I never thought talking to someone would make such a
                  difference. The support I received here has been so comforting
                  during some of my darkest days. It's amazing to have a space
                  where you can just be yourself without fear of judgment.
                </p>
              </div>
            </div>
          </div>

          {/* Third card */}
          <div className="col-md-4 mb-4">
            <div className="card review-card">
              <img
                className="card-img-top review-img"
                src="./media/images/hero.png"
                alt="Review 3"
              />
              <div className="card-body">
                <h5 className="card-title text-center">Sachin Bansal</h5>
                <p className="card-text text-center">
                  I was really struggling with loneliness, especially after the
                  pandemic. This service became my go-to whenever I felt
                  overwhelmed. Having someone listen to me made me feel seen and
                  heard for the first time in a long while.
                </p>
              </div>
            </div>
          </div>
          <p className="review-consent">
            Reviews are shared only after taking consent
          </p>
        </div>
      </div>
      {/* <div className="container-grid">
        <div className="grid-lines"></div>
        <div className="radial-div"></div>
      </div>


      <div className="container-gradient">
        <div className="gradient-aboutus"></div>
        <div className="gradient-reviews"></div>
      </div> */}
    </div>
    </div>
  );
}

export default Reviews;
