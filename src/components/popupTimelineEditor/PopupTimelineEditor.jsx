import { useState } from "react";
import "./popupTimelineEditor.css";

export default function PopupTimelineEditor(props) {
    const [timelineName, setTimelineName] = useState(props.timeline.name);

    function setNewName(e) {
        e.preventDefault();
        let newTimeline = props.timeline;
        newTimeline.name = timelineName;
        document.querySelector(".displayPopupTimelineEditor").classList.remove("displayPopupTimelineEditor");
        props.updateTimeline(newTimeline);
    }

    function deleteTimeline() {
        if (window.confirm("Are you sure?") === true) {
            props.deleteTimeline(props.timeline.id);
        }
    }

    function addRow() {
        let newTimeline = props.timeline;
        newTimeline.rows = Number(newTimeline.rows)+1;
        document.querySelector(".displayPopupTimelineEditor").classList.remove("displayPopupTimelineEditor");
        props.updateTimeline(newTimeline);
    }

    return (
        <div className="popupTimelineEditor">
            <form onSubmit={setNewName}>
            <label htmlFor="timelineName">Text: </label>
            <input type="text" name="timelineName" className="timelineNameInput" value={timelineName} onChange={e => setTimelineName(e.target.value)} />
            <input type="submit" className="timelineNameButton"  value="OK" />
            </form>
            <div className="deleteTimeline" onClick={deleteTimeline}>Delete this timeline</div>
            <div className="addRow" onClick={addRow}>Add a new row</div>
        </div>
    )
}