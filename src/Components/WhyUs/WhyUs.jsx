import React from 'react'

const WhyUs = () => {
  return (
    <>
       <div className="aboutus">
            <div className="container">
                
                <div className="aboutus-content">
                    <div className="abt-img" >

                    <img src="./Images/hands.png" alt="" />
                    </div>
                    <div className="aboutus-txt">
                        <div className="head">

                    <h2>
                        Why Choose Us
                    </h2>
                        <h3>What makes us different</h3>
                        </div>
                        <p>At Swagatam, we don't just sell carpets — we bring warmth, elegance, and craftsmanship into your home. Here's why Swagatam is the trusted choice for high-quality fiber carpets:</p>
                        <ul className='why-list'>
                           <li><span>Unmatched Quality</span><br />
<p>Crafted from premium fibers for durability, comfort, and long-lasting beauty.</p></li>

<li><span>Elegant Designs</span><br />
<p>A wide range of styles—from classic to modern—to suit every space and taste.</p></li>

<li><span>Expert Craftsmanship</span><br />
<p>Skilled artisans create each carpet with precision, detail, and quality finish.</p></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default WhyUs
