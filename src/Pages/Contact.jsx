import "./Contact.css";

function Contact() {
    return (
        <>
            <div className="contact-page">
                <div className="logo-section">
                    <h2 className="contact-logo" ><span className="red">GT</span>AutoTools</h2>
                </div>
                <div className="contact-section">
                    <h2 className="contact-title">Contact Us</h2>
                    <h3 className="contact-header">Need Assistance With A Product? We're Here for you!</h3>
                    <p className="contact-details">We will be able to assist with any questions or concerns you may have and provide you with amazing customer service. We're committed to delivering an experience that not only meets but exceeds your expectations. Our goal is to create satisfied customers who will choose to come back to us time and time again. </p>
                </div>
                <div className="contact-info">
                    <section className="contact-left">
                        <h3 className="contact-header">Customer Support and General Inquiries:</h3>
                        <p>(647) 702-1601</p>
                    </section>
                    <section className="contact-right">
                        <h3 className="contact-header">Prefer to contact via email?</h3>
                        <div className="contact-email">

                            <p>abdullahkhan1601@gmail.com</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Contact

