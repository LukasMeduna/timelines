import "./timeline.css";
import { TimelineBox } from "../timelineBox/TimelineBox";

export default function Timeline(props) {
    const totalTimeUnits = props.timeUnits.length;

    const createTimelineBox = (e) => { 
        const boxText = prompt("Enter the text: ");
        if (!boxText) return;
        const coordinateX = e.nativeEvent.offsetX;
        const coordinateY = e.nativeEvent.offsetY;
        const startingTimeUnit = props.timeUnits[Math.floor(coordinateX / props.timeUnitWidth)].id;
        const startingPosition = (coordinateX % props.timeUnitWidth) / props.timeUnitWidth;
        let endingTimeUnit;
        let endingPosition = startingPosition;
        try {endingTimeUnit = props.timeUnits[Math.floor(coordinateX / props.timeUnitWidth) + 1].id;}
        catch(err) {
            endingTimeUnit = props.timeUnits[props.timeUnits.length-1].id;
            endingPosition = 1;
        }
        
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
        <div className="timeline" style={{height: props.timeline.rows*40+"px", width: totalTimeUnits*props.timeUnitWidth+"px"}} onMouseDown={createTimelineBox}>
            {props.timeline.timelineBoxes.map(box => 
                <TimelineBox box={box} 
                             key={box.id} 
                             id={box.id}
                             timelineId={props.id} 
                             timeUnitWidth={props.timeUnitWidth} 
                             timeUnits={props.timeUnits} 
                             updateTimelineBox={props.updateTimelineBox}
                             deleteTimelineBox={props.deleteTimelineBox}
                />)}
        </div>
    )
}