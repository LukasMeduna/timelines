import { useState } from "react";
import "./popupTimeUnitEditor.css";

export default function PopupTimeUnitEditor(props) {
    
    const [timeUnitText, setTimeUnitText] = useState(props.timeUnit.name);

    function setNewText(e) {
        e.preventDefault();
        let newTimeUnit = props.timeUnit;
        newTimeUnit.name = timeUnitText;
        document.querySelector(".displayPopupTimeUnitEditor").classList.remove("displayPopupTimeUnitEditor");
        props.updateTimeUnit(newTimeUnit);
    }

    return (
        <div className="popupTimeUnitEditor">
            <form onSubmit={setNewText}>
                <label htmlFor="timeUnitText">Text: </label>
                <input type="text" name="boxText" className="timeUnitTextInput" value={timeUnitText} onChange={e => setTimeUnitText(e.target.value)} />
            <input type="submit" className="timeUnitTextButton"  value="OK" />
            </form>
        </div>
    )
}