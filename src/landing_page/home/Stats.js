import React from 'react';
import '../../index.css';

function Stats() {
  return (
    <div className='container'>
    <div className="row stats">
      <div className="col stats-container" >
        <div className="stats-item">
          <p className="numbers mb-2">1,000+</p>
          <p className="heading">Total Reviews</p>
        </div>
        <div className="stats-item">
          <p className="numbers mb-2">10k+ Minutes</p>
          <p className="heading">Total Call Minutes</p>
        </div>
        <div className="stats-item">
          <p className="numbers mb-2">1, 500+</p>
          <p className="heading">Total Customers</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Stats;
