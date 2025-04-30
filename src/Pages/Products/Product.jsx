import React, { useEffect, useState } from 'react';
import './Products.css'

const Productpage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(setData)
            .catch(err => console.error("Failed to load product data:", err));
    }, []);

    return (
        <div className="productpage main">
            <div className="contact-head">
                <h2>Our Products</h2>
            </div>

            <div className="productarea main">
                {data.map((categoryBlock, index) => (
                    <div key={index} className="category-block container">
                        <h4>{categoryBlock.category}</h4>
                        <div className="product-list">
                            {categoryBlock.products.map((product, idx) => (
                                <div key={idx} className="product-card">
                                    <img
                                        src={product.image}
                                        alt={product.productTitle}
                                        className="product-image"
                                    />
                                    <h5 className='product-title'>{product.productTitle}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productpage;
