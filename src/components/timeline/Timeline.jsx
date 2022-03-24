import "./timeline.css";

function TimelineBox(props) {
    let startUnitNumber = props.timeUnits.indexOf(props.box.startingTimeUnit);
    let startPosition = startUnitNumber*props.timeUnitWidth+Math.round(props.box.startingPosition*props.timeUnitWidth);
    let endUnitNumber = props.timeUnits.indexOf(props.box.endingTimeUnit);
    let endPosition = endUnitNumber*props.timeUnitWidth+Math.round(props.box.endingPosition*props.timeUnitWidth);
    let boxWidth = endPosition-startPosition;


    return (
        <div className="timelineBoxContainer" style={{top: props.box.row*40+"px", left: startPosition+"px", width: boxWidth+"px"}}>
            <div className="timelineBox" style={{backgroundColor: props.box.bgColor}}>{props.box.text}</div>
        </div>
    );
}


export default function Timeline(props) {
    return (
        <div className="timeline" style={{height: props.timeline.rows*40+"px"}}>
            {props.timeline.timelineBoxes.map(box => <TimelineBox box={box} key={box.id} timeUnitWidth={props.timeUnitWidth} timeUnits={props.timeUnits} />)}
        </div>
    )
}