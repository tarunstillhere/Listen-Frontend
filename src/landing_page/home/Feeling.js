import React from "react";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Feeling() {
  return (
    <>
      <div className="container mt-4">
        <div className="row feeling">
          <div className="col">

            <p className="feeling-para">Just want to share some feelings</p>

            <div className="feeling-img">
              <div className="col">
                <img src="./media/images/hero.png" alt="Just chill" />
                <p className="feeling-img-p">Just chill</p>
              </div>
              <div className="col">
                <img src="./media/images/hero.png" alt="Frustrated/Depressed" />
                <p className="feeling-img-p">Frustrated/Depressed</p>
              </div>
              <div className="col">
                <img src="./media/images/hero.png" alt="Time Pass" />
                <p className="feeling-img-p">Time Pass</p>
              </div>
            </div>

            <p className="feeling-para2">
              No judgments, Fully private, Total Confidential, Deep Empethetic
            </p>

            <div className="button-container mt-4">
              <button className="feeling-btn">
                <FontAwesomeIcon className="feeling-btn-icon" icon={faPhone} />
                Call now
              </button>

              <button className="feeling-btn">
                <FontAwesomeIcon className="feeling-btn-icon" icon={faPhone} />
                Call back me
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Feeling;
