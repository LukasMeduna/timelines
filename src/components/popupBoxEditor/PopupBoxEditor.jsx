import { useState } from "react";
import "./popupBoxEditor.css";

export default function PopupBoxEditor(props) {
    
    const [boxText, setBoxText] = useState(props.box.text);

    function setNewText() {
        let newBox = props.box;
        newBox.text = boxText;
        props.updateTimelineBox(props.timelineId, newBox);
    }

    function deleteBox() {
        if (window.confirm("Are you sure?") == true) {
            props.deleteTimelineBox(props.timelineId, props.box.id);
        }
    }

    return (
        <div className="popupBoxEditor">
            <label for="boxText">Text: </label>
            <input type="text" name="boxText" className="boxTextInput" value={boxText} onChange={e => setBoxText(e.target.value)} />
            <input type="button" className="boxTextButton" onClick={setNewText} value="OK" />
            <div className="deleteBox" onClick={deleteBox}>Delete this box</div>
        </div>
    )
}