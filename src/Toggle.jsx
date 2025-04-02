import {useState} from "react";

export default function Toggle() {
    const [toggleOn, setToggleOn] = useState(false);

    const handleClick = () => {
        setToggleOn(!toggleOn);
    }

    return (
        <button onClick={handleClick}>
            {toggleOn ? "꺼짐" : "켜짐"}
        </button>
    )
}