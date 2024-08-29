import Oil from "./Oil/Oil";
import Tools from "./Tools/Tools";
import Lubricants from "./Lubricants/Lubricants";
import "./Sidebar.css";


function Sidebar({ handleChange, setMode }) {
    const handleProductsClick = (event) => {
        event.preventDefault();
        setMode('products');
        console.log('Products clicked, mode set to products');
    };
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-logo">
                    <h2 className="logo" onClick={handleProductsClick}><span className="red">GT</span>AutoTools</h2>
                </div>
                <Oil handleChange={handleChange} />
                <Lubricants handleChange={handleChange} />
                <Tools handleChange={handleChange} />
            </div>
        </>
    )
}

export default Sidebar;