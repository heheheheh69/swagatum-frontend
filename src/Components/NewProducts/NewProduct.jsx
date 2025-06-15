import React from 'react'
import './newproduct.css'

const NewProduct = () => {
    return (
        <>
            <div className="newproducts main">
                <div className="contact-head">
                    <h2>Our Products</h2>
                </div>

                <div className="product-area container">
                    {/* Product 1 */}
                    <div className="product-sec-card">
                        <div className="image-wrapper">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Colored_felt_cloth.jpg"
                                alt="felt"
                            />
                        </div>

                        <div className="table-container">
                            <h2 className="table-title">Product Specifications</h2>
                            <table className="custom-table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Type</th>
                                        <th>GSM (-5%)</th>
                                        <th>Thickness</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Notebook</td>
                                        <td>Stationery</td>
                                        <td>70</td>
                                        <td>0.1 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Paper</td>
                                        <td>Office</td>
                                        <td>80</td>
                                        <td>0.12 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Flyer</td>
                                        <td>Marketing</td>
                                        <td>100</td>
                                        <td>0.15 mm</td>
                                    </tr>
                                    <tr>
                                        <td>Poster</td>
                                        <td>Advertisement</td>
                                        <td>120</td>
                                        <td>0.18 mm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="product-sec-card">
                        <div className="image-wrapper">
                            <img
                                src="https://5.imimg.com/data5/SELLER/Default/2023/8/339464022/UX/LH/OE/5746244/non-woven-carpets.jpg"
                                alt="carpet"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewProduct
