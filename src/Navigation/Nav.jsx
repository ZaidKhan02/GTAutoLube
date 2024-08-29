import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Nav.css";


function Nav({ size, query, handleInputChange, setMode }) {
    const handleCartClick = (evt) => {
        evt.preventDefault();
        setMode('cart');;
    };

    const handleContactClick = (evt) => {
        evt.preventDefault();
        setMode('contact');;
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-input">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        value={query}
                        placeholder="What are you looking for?"
                        className="search-input" />
                </div>
                <div className="nav-links">
                    <span className="nav-link" onClick={handleContactClick}>
                        <h3 className="nav-header" >Contact Us</h3>
                    </span>
                    <div className="nav-cart">
                        <span className="nav-link" onClick={handleCartClick}>
                            <AiOutlineShoppingCart className="cart-icon" />
                        </span>
                        <span className="cart-size">{size}</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;

