import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { IoCloseCircle } from "react-icons/io5";


function Card({ item, handleCartClick }) {

    const [detail, setDetail] = useState([]);
    const [close, setClose] = useState(false)
    const detailPage = (Product) => {
        setDetail([{ ...Product }])
        setClose(true)
    }

    const { img, productName, price, bundlePrice } = item;

    return (
        <>
            {
                close ?
                    <div className='detail-container'>
                        {
                            detail.map((i) => {
                                return (
                                    <>
                                        <div className='detail-info'>
                                            <div className='img-box'>
                                                <button className='close' onClick={() => setClose(false)}><IoCloseCircle className='close-button' /> </button>
                                                <img src={i.img} alt={i.productName}></img>
                                            </div>
                                            <div className='product-detail'>
                                                <h2>{i.productName}</h2>
                                                <h3>${i.price}</h3>
                                                <p>{i.description}</p>
                                                <button onClick={() => handleCartClick(item)}>Add To Cart</button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div> : null
            }

            <div className="product">
                <section className="product-details">
                    <img
                        src={img}
                        alt={productName}
                        className="product-img"
                        onClick={() => detailPage(item)}
                    />
                    <h3 className="product-title" onClick={() => detailPage(item)}>{productName}</h3>
                    <div className="product-price">
                        <div className="pricing">
                            <span className='price'>${price}</span> {bundlePrice}
                        </div>
                    </div>
                    <div className="cart">
                        <button onClick={() => handleCartClick(item)} className="cart-button"><AiOutlineShoppingCart /> Add To Cart</button>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Card;
