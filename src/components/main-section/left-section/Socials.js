import React from 'react';
import flipkart from "../../images/flipkart.png";
import amazon from "../../images/amazon.png"

function Socials() {
  return (
    <>
    <div className='social-buttons'>
        <div className="shop"><button>shop Now</button></div>
        <div className="category"><button>Category</button></div>
    </div>
    <div className="icons">
      <div className='available'><p>Also avaliable on</p></div>
      <div className='icon'>
        <img src={flipkart} alt="" />
        <img src={amazon} alt="" />

      </div>
      
    </div>
    </>
  )
}

export default Socials