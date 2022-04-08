import "./timelineName.css";
import PopupTimelineEditor from "../popupTimelineEditor/PopupTimelineEditor";

export default function TimelineName(props) {
    function createTimeline() {
        const name = prompt("Name of new timeline: ");
        if (!name) return;
        props.addNewTimeline(name,props.timeline.id);
    }

    function toggleDisplayTimelineEditor(e) {
        e.target.classList.toggle("displayPopupTimelineEditor");
        const elements = Array.from(document.getElementsByClassName("displayPopupTimelineEditor"));
        if (elements.length > 1) {
          elements.forEach(el => {el.classList.remove("displayPopupTimelineEditor")});
          e.target.classList.add("displayPopupTimelineEditor");
        }
    }
    
    return (
        <div className="timelineName"  style={{height: props.timeline.rows*40+"px"}}>
            <div style={{position: "relative"}}>
                <div onClick={toggleDisplayTimelineEditor}>{props.timeline.name}</div>
                <PopupTimelineEditor timeline={props.timeline} updateTimeline={props.updateTimeline} deleteTimeline={props.deleteTimeline} />
            </div>
            <div className="addNewTimeline" onClick={createTimeline}></div>
        </div>
    )
}