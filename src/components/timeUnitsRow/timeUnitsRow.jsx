import "./timeUnitsRow.css";

export default function TimeUnitsRow(props) {
    return (
        <div className="timeUnitsRow">
            {props.timeUnits.map((timeUnit) => <div className="timeUnit" key={timeUnit.id} style={{width: props.timeUnitWidth+"px"}}>{timeUnit.name}</div>)}
        </div>
    )
}