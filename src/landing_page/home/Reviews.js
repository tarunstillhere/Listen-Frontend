import React from 'react';

function Reviews() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
            <h3 className='review-header mb-5' style={{textAlign: "center"}}>Our Customer Reviews</h3>
            <div className='card-container'>
            <div className='card col-4' style={{width: "308px", height: "530px"}}>
           <img class="card-img-top" className='card-img mt-5' src="./media/images/hero.png" alt="Card image cap"/>
                <div class="card-body">
                  <h5 style={{textAlign: "center"}} class="card-title">Joe Monk</h5>
                    <p class="card-text pt-3">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. </p>
          </div>                  
        </div>
          <div className='card col-4' style={{width: "308px", height: "530px"}}>
           <img class="card-img-top" className='card-img mt-5' src="./media/images/hero.png" alt="Card image cap"/>
                <div class="card-body">
                  <h5 style={{textAlign: "center"}} class="card-title">Jack</h5>
                    <p class="card-text pt-3">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.  </p>
          </div>                  
        </div>
          <div className='card col-4' style={{width: "308px", height: "530px"}}>
           <img class="card-img-top" className='card-img mt-5' src="./media/images/hero.png" alt="Card image cap"/>
                <div class="card-body">
                  <h5 style={{textAlign: "center"}} class="card-title">Lisa</h5>
                    <p class="card-text pt-3">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.  </p>
          </div>                  
        </div>
            </div>
                
            </div>
        </div>
     );
}

export default Reviews;