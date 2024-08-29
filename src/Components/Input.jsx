function Input({ handleChange, name, value, heading }) {
    return (
        <>
            <label className="sidebar-label">
                <input onChange={handleChange} type="radio" value={value} name={name} />
                {heading}
            </label>
        </>
    )
}

export default Input;

