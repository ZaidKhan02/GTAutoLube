import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import "./Cart.css";

function Cart({ cart, setCart }) {
    const [price, setPrice] = useState(0);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        arrivalTime: ''
    });
    const [msg, setMsg] = useState('');
    const [error, setError] = useState('');

    const updateCartDetails = () => {
        let ans = 0;
        const cartDetails = cart.map((item) => {
            ans += item.price * item.amount;
            return `${item.productName}: $${item.price} x ${item.amount}`;
        }).join('\n');

        const calculatedPrice = ans.toFixed(2);
        setPrice(calculatedPrice);

        setFormState(prevState => ({
            ...prevState,
            message: `Items in your cart:\n${cartDetails}\n\nTotal Price: $${calculatedPrice}`
        }));
    };

    const handleRemove = (id) => {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    };

    useEffect(() => {
        updateCartDetails();
    }, [cart]);

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentPrice = parseFloat(price);

        if (currentPrice === 0) {
            setError("Cannot submit an order with no items selected");
            setTimeout(() => setError(''), 5000);
            return;
        }
        const templateParams = {
            from_name: formState.name,
            from_email: formState.email,
            message: formState.message,
            arrival_time: formState.arrivalTime
        };

        emailjs.send('service_nlqdsf7', 'template_hr8vu16', templateParams, 'bZz6ZTknGYT67flsE')
            .then(response => {
                setMsg("Message sent successfully!");
                setTimeout(() => setMsg(''), 5000);
                setFormState({ name: '', email: '', message: '', arrivalTime: '' });
            })
            .catch(error => {
                console.error('Error sending email:', error);
            });
    };

    const handleIncrement = (item, increment) => {
        const updatedCart = cart.map(cartItem =>
            cartItem.id === item.id
                ? { ...cartItem, amount: cartItem.amount + increment }
                : cartItem
        ).filter(cartItem => cartItem.amount > 0);
        setCart(updatedCart);
        handlePrice();
        updateMessage(updatedCart);
    };

    return (
        <article>
            {cart?.map((item) => (
                <div className="cart-box" key={item.id}>
                    <div className="cart-image">
                        <img src={item.img} alt={item.productName} />
                        <p className="cart-product">{item.productName}</p>
                    </div>
                    <div className="cart-amount">
                        <button onClick={() => handleIncrement(item, +1)}>+</button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleIncrement(item, -1)}>-</button>
                    </div>
                    <div className="cart-pricing">
                        <span className="cart-price">${item.price}</span>
                        <button className="remove-button" onClick={() => handleRemove(item.id)}>X</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span className="price-header">Total Price</span>
                <span className="total-price">$ {price}</span>

            </div>
            <form className="email-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                />
                <textarea
                    name="message"
                    rows="6"
                    placeholder="Your Message"
                    value={formState.message}
                    readOnly
                ></textarea>
                <textarea
                    name="arrivalTime"
                    rows="3"
                    placeholder="Arrival Time"
                    required
                    value={formState.arrivalTime}
                    onChange={handleInputChange}
                ></textarea>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
            {msg && <div className="message">{msg}</div>}
            {error && <div className="error">{error}</div>}
        </article>
    );
}

export default Cart;
