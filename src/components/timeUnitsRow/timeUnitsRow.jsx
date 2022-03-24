import "./timeUnitsRow.css";

function TimeUnit() {

}


export default function TimeUnitsRow(props) {
    return (
        <div className="timeUnitsRow">
            {props.timeUnits.map((timeUnit) => <div className="timeUnit" style={{width: props.width}}>{timeUnit}</div>)}
        </div>
    )
}