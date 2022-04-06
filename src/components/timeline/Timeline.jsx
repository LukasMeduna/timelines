import "./timeline.css";

function TimelineBox(props) {
    const startUnitNumber = props.timeUnits.map(x => x.id).indexOf(props.box.startingTimeUnit);
    const startPosition = startUnitNumber*props.timeUnitWidth+Math.round(props.box.startingPosition*props.timeUnitWidth);
    const endUnitNumber = props.timeUnits.map(x => x.id).indexOf(props.box.endingTimeUnit);
    const endPosition = endUnitNumber*props.timeUnitWidth+Math.round(props.box.endingPosition*props.timeUnitWidth);
    const boxWidth = endPosition-startPosition;
    const htmlId = props.timelineId+"box"+props.id;

    function initLeftResize() {
        window.addEventListener('mousemove', leftResize);
        window.addEventListener('mouseup', stopLeftResize);
    }
    function leftResize(e) {
        const rect = document.querySelector(".timeUnitsRow").getBoundingClientRect();
        const timelineHorizontalPosition = rect.left;
        const newStartPosition = e.pageX-timelineHorizontalPosition;
        const newBoxWidth = endPosition - e.pageX+timelineHorizontalPosition;
        document.getElementById(htmlId).style.left = newStartPosition + 'px';
        document.getElementById(htmlId).style.width = newBoxWidth + 'px';
        
    }
    function stopLeftResize() {
        window.removeEventListener('mousemove', leftResize);
        window.removeEventListener('mouseup', stopLeftResize);
        updateBox();
    }

    function initRightResize() {
        window.addEventListener('mousemove', rightResize);
        window.addEventListener('mouseup', stopRightResize);
    }
    function rightResize(e) {
        const rect = document.querySelector(".timeUnitsRow").getBoundingClientRect();
        const timelineHorizontalPosition = rect.left;
        const newBoxWidth = e.pageX - timelineHorizontalPosition - startPosition + 2;
        document.getElementById(htmlId).style.width = newBoxWidth + 'px';
    }
    function stopRightResize() {
        window.removeEventListener('mousemove', rightResize);
        window.removeEventListener('mouseup', stopRightResize);
        updateBox();
    }

    function updateBox() {
        const leftPosition = parseInt(document.getElementById(htmlId).style.left);
        const width = parseInt(document.getElementById(htmlId).style.width);
        const rightPosition = leftPosition + width;
        
        let newBox = props.box;
        newBox.startingTimeUnit = props.timeUnits[Math.floor(leftPosition / props.timeUnitWidth)].id;
        newBox.startingPosition = (leftPosition % props.timeUnitWidth) / props.timeUnitWidth;
        newBox.endingTimeUnit = props.timeUnits[Math.floor(rightPosition / props.timeUnitWidth)].id;
        newBox.endingPosition = (rightPosition % props.timeUnitWidth) / props.timeUnitWidth;
        console.log(newBox);

        props.updateTimelineBox(props.timelineId,newBox);
    }

    return (
        <div onMouseDown={(e) => {e.stopPropagation()}} className="timelineBoxContainer" id={props.timelineId+"box"+props.id} style={{top: props.box.row*40+"px", left: startPosition+"px", width: boxWidth+"px"}}>
            <div onMouseDown={initLeftResize} className="resizerLeft"></div>
            <div className="timelineBox" style={{backgroundColor: props.box.bgColor}} title={props.box.text}>{props.box.text}</div>
            <div onMouseDown={initRightResize} className="resizerRight"></div>
        </div>
    );
}


export default function Timeline(props) {
    const totalTimeUnits = props.timeUnits.length;

    const createTimelineBox = (e) => { 
        const boxText = prompt("Enter the text: ");
        if (!boxText) return;
        const coordinateX = e.nativeEvent.offsetX;
        const coordinateY = e.nativeEvent.offsetY;
        /*if (e.type === "mousedown") {
            value = e.nativeEvent.offsetX;
        } else {
            value -= e.nativeEvent.offsetX;
            console.log("value:",value);
        }*/
        const startingTimeUnit = props.timeUnits[Math.floor(coordinateX / props.timeUnitWidth)].id;
        const startingPosition = (coordinateX % props.timeUnitWidth) / props.timeUnitWidth;
        const endingTimeUnit = props.timeUnits[Math.floor(coordinateX / props.timeUnitWidth) + 1].id;
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
        <div className="timeline" style={{height: props.timeline.rows*40+"px", width: totalTimeUnits*props.timeUnitWidth+"px"}} onMouseDown={createTimelineBox}>
            {props.timeline.timelineBoxes.map(box => 
                <TimelineBox box={box} 
                             key={box.id} 
                             id={box.id}
                             timelineId={props.id} 
                             timeUnitWidth={props.timeUnitWidth} 
                             timeUnits={props.timeUnits} 
                             updateTimelineBox={props.updateTimelineBox}
                />)}
        </div>
    )
}