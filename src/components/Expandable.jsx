import {useState} from "react";
import "../MeteorList.css";

const Expandable = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toogleOpen = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen)
    }
    return (
        <div>
            <button className="hidebutton" onClick={toogleOpen}>{isOpen ? "Hide" : "Show"} Searchbar</button>
            {isOpen ? children : null}
        </div>
    )
}

export default Expandable;