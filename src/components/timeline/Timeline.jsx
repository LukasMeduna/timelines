import "./timeline.css";

function TimelineBox(props) {
    const startUnitNumber = props.timeUnits.indexOf(props.box.startingTimeUnit);
    const startPosition = startUnitNumber*props.timeUnitWidth+Math.round(props.box.startingPosition*props.timeUnitWidth);
    const endUnitNumber = props.timeUnits.indexOf(props.box.endingTimeUnit);
    const endPosition = endUnitNumber*props.timeUnitWidth+Math.round(props.box.endingPosition*props.timeUnitWidth);
    const boxWidth = endPosition-startPosition;


    return (
        <div className="timelineBoxContainer" style={{top: props.box.row*40+"px", left: startPosition+"px", width: boxWidth+"px"}}>
            <div className="timelineBox" style={{backgroundColor: props.box.bgColor}}>{props.box.text}</div>
        </div>
    );
}


export default function Timeline(props) {
    const totalTimeUnits = props.timeUnits.length;
    return (
        <div className="timeline" style={{height: props.timeline.rows*40+"px", width: totalTimeUnits*props.timeUnitWidth+"px"}}>
            {props.timeline.timelineBoxes.map(box => <TimelineBox box={box} key={box.id} timeUnitWidth={props.timeUnitWidth} timeUnits={props.timeUnits} />)}
        </div>
    )
}