import React from 'react';
import '../../index.css';

function Stats() {
  return (
    <div className='container'>
    <div className="row stats">
      <div className="col stats-container" >
        <div className="stats-item">
          <p className="numbers mb-2">30,271+</p>
          <p className="heading">Total Experts</p>
        </div>
        <div className="stats-item">
          <p className="numbers mb-2">818 Million Minutes</p>
          <p className="heading">Total Call Minutes</p>
        </div>
        <div className="stats-item">
          <p className="numbers mb-2">54.0 Million</p>
          <p className="heading">Total Customers</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Stats;
