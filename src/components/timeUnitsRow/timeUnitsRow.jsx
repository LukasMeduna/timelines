import "./timeUnitsRow.css";

function TimeUnit(props) {
    return (
        <div className="timeUnit" style={{width: props.timeUnitWidth+"px"}}>
            {props.timeUnitName}
        </div>
    )
}

export default function TimeUnitsRow(props) {
    return (
        <div className="timeUnitsRow">
            {props.timeUnits.map((timeUnit) => <TimeUnit key={timeUnit.id} timeUnitWidth={props.timeUnitWidth} timeUnitName = {timeUnit.name} />)}
        </div>
    )
}