import "./Tools.css";
import Input from "../../Components/Input";

function Tools({ handleChange }) {
    return (
        <>
            <div className="tools">
                <h2 className="sidebar-title">Tools</h2>
                <Input
                    handleChange={handleChange}
                    name="subCategory"
                    value="automotive-tools"
                    heading="Automotive Tools"
                />
                <Input
                    handleChange={handleChange}
                    name="subCategory"
                    value="abrasive-tools"
                    heading="Abrasive Tools"
                />
                <Input
                    handleChange={handleChange}
                    name="subCategory"
                    value="lighting-tools"
                    heading="Lighting Tools"
                />
            </div>
        </>
    )
}

export default Tools;

