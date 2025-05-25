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
                            <li><span> Unmatched Quality </span><br />
                            <p>
Our carpets are crafted using premium fibers sourced from trusted suppliers. Whether it's soft-touch nylon, durable polyester, or luxurious wool blends, each carpet reflects a commitment to lasting beauty and resilience.</p></li>
                            <li><span>Elegant Designs, Endless Variety </span><br /><p>
From traditional patterns to modern textures, our collection includes a wide range of styles and fabrics to match every taste and space. Swagatam carpets are not just floor coverings — they're design statements.</p></li>
                            <li><span> Expert Craftsmanship<br /> </span><p>
Every Swagatam carpet is made with precision and care by skilled artisans. We blend advanced techniques with artistic detail to ensure each piece is flawless, functional, and visually stunning</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default WhyUs
