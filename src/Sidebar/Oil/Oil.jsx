import "./Oil.css";
import Input from "../../Components/Input";

function Oil({ handleChange }) {
    return (
        <>
            <div className="oil">
                <h2 className="sidebar-title">Oil</h2>
                <Input
                    handleChange={handleChange}
                    name="subCategory"
                    value="engine-oil"
                    heading="Engine Oil"
                />
                <Input
                    handleChange={handleChange}
                    name="subCategory"
                    value="hydraulic-oil"
                    heading="Hydraulic Oil"
                />
                <Input
                    handleChange={handleChange}
                    name="subCategory"
                    value="transmission-oil"
                    heading="Transmission Oil"
                />
            </div>
        </>
    )
}

export default Oil;