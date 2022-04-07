import "./timeUnitsRow.css";
import PopupTimeUnitEditor from "../popupTimeUnitEditor/PopupTimeUnitEditor";

function TimeUnit(props) {

    function toggleDisplayTimeUnitEditor(e) {
        e.target.classList.toggle("displayPopupTimeUnitEditor");
        const elements = Array.from(document.getElementsByClassName("displayPopupTimeUnitEditor"));
        if (elements.length > 1) {
          elements.forEach(el => {el.classList.remove("displayPopupTimeUnitEditor")});
          e.target.classList.add("displayPopupTimeUnitEditor");
        }
    }

    return (
        <div className="timeUnit" style={{width: props.timeUnitWidth+"px"}}>
            <span onClick={toggleDisplayTimeUnitEditor}>{props.timeUnit.name}</span>
            <PopupTimeUnitEditor 
                updateTimeUnit={props.updateTimeUnit}
                timeUnit={props.timeUnit} 
            />
        </div>
    )
}

export default function TimeUnitsRow(props) {
    return (
        <div className="timeUnitsRow">
            {props.timeUnits.map((timeUnit) => <TimeUnit key={timeUnit.id} timeUnitWidth={props.timeUnitWidth} timeUnit = {timeUnit} updateTimeUnit={props.updateTimeUnit} />)}
        </div>
    )
}