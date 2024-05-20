import { useState, useEffect } from "react";

const Form = () => {
    const [name, setName] = useState(() => {
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    useEffect(() => {
        localStorage.setItem("name", JSON.stringify(name));
    }, [name]);

    return(
        <form>
            <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Fullname"
            aria-label="full name"
            />
            <input type="submit" value="Submit"></input>
        </form>
    );
};

export default Form;