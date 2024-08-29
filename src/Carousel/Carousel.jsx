import "./Carousel.css";

function Carousel() {
    const handleScroll = () => {
        const scrollAmount = 800;
        window.scrollBy({
            top: scrollAmount,
            behavior: 'smooth'
        });
    };
    return (
        <>
            <div className="carousel">
                <div className="carousel-left">
                    <h2>We Carry The <span className="carousel-header">Highest Quality</span> Brands</h2>
                    <button onClick={handleScroll}>Shop Products</button>
                </div>
                <div className="carousel-right">
                    <div className="img-container">
                        <img className="liqui-img" src="https://gtautolube.com/wp-content/uploads/2024/05/Liqui-moly.svg_-1.png" alt="" />
                        <img className="mobil-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mobil_logo.svg/2560px-Mobil_logo.svg.png" alt="" />

                    </div>
                    <div className="img-container">
                        <img className="toyota-img" src="https://www.carlogos.org/car-logos/toyota-logo-2005-download.png" alt="" />
                        <img src="https://gtautolube.com/wp-content/uploads/2024/05/Quaker_State_Oil_Logo.png" alt="" />

                    </div>
                    <div className="img-container">
                        <img className="gulf-img" src="https://upload.wikimedia.org/wikipedia/commons/7/70/Gulf_logo.png" alt="" />
                        <img className="emzone-img" src="https://emzone.ca/wp-content/uploads/2022/08/emzone-computer-care-logo-2022.png" alt="" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel