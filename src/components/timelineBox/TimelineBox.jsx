import "./timelineBox.css";
import PopupBoxEditor from "../popupBoxEditor/PopupBoxEditor";

export function TimelineBox(props) {
    const startUnitNumber = props.timeUnits.map(x => x.id).indexOf(props.box.startingTimeUnit);
    const startPosition = startUnitNumber * props.timeUnitWidth + Math.round(props.box.startingPosition * props.timeUnitWidth);
    const endUnitNumber = props.timeUnits.map(x => x.id).indexOf(props.box.endingTimeUnit);
    const endPosition = endUnitNumber * props.timeUnitWidth + Math.round(props.box.endingPosition * props.timeUnitWidth);
    const boxWidth = endPosition - startPosition;
    const htmlId = props.timelineId + "box" + props.id;

    function initLeftResize() {
        window.addEventListener('mousemove', leftResize);
        window.addEventListener('mouseup', stopLeftResize);
    }
    function leftResize(e) {
        const rect = document.querySelector(".timeUnitsRow").getBoundingClientRect();
        const timelineHorizontalPosition = rect.left;
        const newStartPosition = e.pageX - timelineHorizontalPosition;
        const newBoxWidth = endPosition - e.pageX + timelineHorizontalPosition;
        if (newBoxWidth >= 0 && (e.pageX - rect.left) > 0) {
            document.getElementById(htmlId).style.left = newStartPosition + 'px';
            document.getElementById(htmlId).style.width = newBoxWidth + 'px';
        }
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
        const rect = document.querySelector(".timeline").getBoundingClientRect();
        const timelineHorizontalPosition = rect.left;
        const newBoxWidth = e.pageX - timelineHorizontalPosition - startPosition + 2;
        if (newBoxWidth >= 2 && (rect.right - e.screenX) >= 0) {
            document.getElementById(htmlId).style.width = newBoxWidth + 'px';
        }
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
        newBox.endingPosition = (rightPosition % props.timeUnitWidth) / props.timeUnitWidth;
        try { newBox.endingTimeUnit = props.timeUnits[Math.floor(rightPosition / props.timeUnitWidth)].id; }
        catch (err) {
            newBox.endingTimeUnit = props.timeUnits[props.timeUnits.length - 1].id;
            newBox.endingPosition = 1;
        }
        props.updateTimelineBox(props.timelineId, newBox);
    }

    function toggleDisplayPopupBoxEditor(e) {
        e.target.classList.toggle("displayPopupBoxEditor");
        const elements = Array.from(document.getElementsByClassName("displayPopupBoxEditor"));
        if (elements.length > 1) {
          elements.forEach(el => {el.classList.remove("displayPopupBoxEditor")});
          e.target.classList.add("displayPopupBoxEditor");
        }
    }

    return (
        <div onMouseDown={(e) => { e.stopPropagation(); }} className="timelineBoxContainer" id={props.timelineId + "box" + props.id} style={{ top: props.box.row * 40 + "px", left: startPosition + "px", width: boxWidth + "px" }}>
            <div onMouseDown={initLeftResize} className="resizerLeft"></div>
            <div className="timelineBox" style={{ backgroundColor: props.box.bgColor }} onClick={toggleDisplayPopupBoxEditor} title={props.box.text}>{props.box.text}</div>
            <PopupBoxEditor 
                updateTimelineBox={props.updateTimelineBox}
                deleteTimelineBox={props.deleteTimelineBox}
                box={props.box} 
                timelineId={props.timelineId} 
            />
            <div onMouseDown={initRightResize} className="resizerRight"></div>
        </div>
    );
}
