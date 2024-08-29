function Button({ handleClick, value, title }) {
    return (
        <button onClick={handleClick} value={value} className="product-btn">
            {title}
        </button>
    )
}

export default Button;  