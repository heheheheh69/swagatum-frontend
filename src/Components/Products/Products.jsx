import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import "./Products.css"
const Products = () => {
    return (
        <>
            <div className="products">
                <div className="container">
                    <div className="heading">
                        <h2>
                            Products Range
                        </h2>
                        <h3>
                            What We Offer
                        </h3>
                    </div>
                <div className="products-content">
                    <div className="product-category-card">
                                <h2>Non Woven Carpet</h2>
                                <a href="/products">View Products <FaArrowRightLong /> </a>
                    </div>
                    <div className="product-category-card">
                                <h2>Matting</h2>
                                <a href="/products">View Products <FaArrowRightLong /> </a>
                    </div>
                    <div className="product-category-card">
                                <h2>Printing On Non Woven  Carpet</h2>
                                <a href="/products">View Products <FaArrowRightLong /> </a>
                    </div>
                    
                    
                </div>
                </div>
            </div>
        </>
    )
}

export default Products
