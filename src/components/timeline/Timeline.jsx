import "./timeline.css";

function TimelineBox(props) {
    const startUnitNumber = props.timeUnits.map(x => x.id).indexOf(props.box.startingTimeUnit);
    const startPosition = startUnitNumber*props.timeUnitWidth+Math.round(props.box.startingPosition*props.timeUnitWidth);
    const endUnitNumber = props.timeUnits.map(x => x.id).indexOf(props.box.endingTimeUnit);
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

    const createTimelineBox = (e) => { 
        const boxText = prompt("Enter the text: ");
        const coordinateX = e.nativeEvent.offsetX;
        const coordinateY = e.nativeEvent.offsetY;
        /*if (e.type === "mousedown") {
            value = e.nativeEvent.offsetX;
        } else {
            value -= e.nativeEvent.offsetX;
            console.log("value:",value);
        }*/
        const startingTimeUnit = Math.floor(coordinateX / props.timeUnitWidth);
        const startingPosition = (coordinateX % props.timeUnitWidth) / props.timeUnitWidth;
        const endingTimeUnit = startingTimeUnit + 1;
        const endingPosition = startingPosition;
        const row = Math.floor(coordinateY / 40);

        const newTimelineBox = {
            startingTimeUnit: startingTimeUnit,
            startingPosition: startingPosition,
            endingTimeUnit: endingTimeUnit,
            endingPosition: endingPosition,
            row: row,
            text: boxText,
            bgColor: "white"
        }

        props.addNewTimelineBox(newTimelineBox, props.id);
    }

    return (
        <div className="timeline" style={{height: props.timeline.rows*40+"px", width: totalTimeUnits*props.timeUnitWidth+"px"}} onClick={createTimelineBox}>
            {props.timeline.timelineBoxes.map(box => <TimelineBox box={box} key={box.id} timeUnitWidth={props.timeUnitWidth} timeUnits={props.timeUnits} />)}
        </div>
    )
}