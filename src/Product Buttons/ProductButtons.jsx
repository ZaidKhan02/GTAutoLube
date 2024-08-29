import Button from "../Components/Button";
import "./ProductButtons.css";

function ProductButtons({ handleClick }) {
    return (
        <>
            <div className="products-section">
                <h2 className="products-title">Products</h2>
                <div className="products-btns">
                    <Button
                        handleClick={handleClick}
                        value=""
                        title="All Products"
                    />
                    <Button
                        handleClick={handleClick}
                        value="Oil"
                        title="Oil"
                    />
                    <Button
                        handleClick={handleClick}
                        value="Lubricants"
                        title="Lubricants"
                    />
                    <Button
                        handleClick={handleClick}
                        value="Tools"
                        title="Tools"
                    />
                </div>
            </div>
        </>
    )
}

export default ProductButtons; 