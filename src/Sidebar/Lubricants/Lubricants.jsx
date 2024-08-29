import Input from "../../Components/Input";
import "./Lubricants.css";

function Lubricants({ handleChange }) {
    return (
        <>
            <div className="lubricants">
                <h2 className="sidebar-title">Lubricants</h2>
                <Input
                    handleChange={handleChange}
                    name="subCategory"
                    value="coolant"
                    heading="Coolant"
                />
                <Input
                    handleChange={handleChange}
                    name="subCategory"
                    value="aerosol-sprays"
                    heading="Aerosol Sprays"
                />
                <Input
                    handleChange={handleChange}
                    name="subCategory"
                    value="brake-fluid"
                    heading="Brake Fluid"
                />
                <Input
                    handleChange={handleChange}
                    name="subCategory"
                    value="brake-cleaner"
                    heading="Brake Cleaner"
                />
            </div>
        </>
    )
}

export default Lubricants;