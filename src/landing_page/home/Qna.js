import React from 'react';
import "../../index.css";

function Qna() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
            <p className='qna mt-5 mb-5' style={{textAlign: "center"}}>Frequently Asked
            Questions</p>
            
            <div className='line mt-5' style={{marginTop : "20px"}}></div>
            <div className='col-8 line-text mt-4'>
            Does Eshopbox provide international shipping for Shopify?
            </div>
            <div className='col-4 line-plus mt-3'>
            <img className='line-plus' src='./media/images/plus.svg' alt="plus_img"/>
            </div>
            
            <div className='line mt-3'></div>
            <div className='col-8 line-text mt-4'>
            How do I switch from my current solution?
            </div>
            <div className='col-4 line-plus mt-3'>
            <img className='line-plus' src='./media/images/plus.svg' alt="plus_img"/>
            </div>
            
            <div className='line mt-3'></div>
            <div className='col-8 line-text mt-4'>
            Can I upgrade my Square for Retail plan?
            </div>
            <div className='col-4 line-plus mt-3'>
            <img className='line-plus' src='./media/images/plus.svg' alt="plus_img"/>
            </div>
            
            <div className='line mt-3'></div>
            <div className='col-8 line-text mt-4'>
            Can I downgrade my Square for Retail plan?
            </div>
            <div className='col-4 line-plus mt-3'>
            <img className='line-plus' src='./media/images/plus.svg' alt="plus_img"/>
            </div>

            <div className='line mt-3 mb-5'></div>

            </div>
        </div>
     );
}

export default Qna;