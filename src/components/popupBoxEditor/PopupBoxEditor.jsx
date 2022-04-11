import { useState } from "react";
import "./popupBoxEditor.css";

export default function PopupBoxEditor(props) {
    
    const [boxText, setBoxText] = useState(props.box.text);
    const colorPallete = [
        "silver",
        "#c5d5c5",
        "#e0e2e4",
        "#e3e0cc",
        "#e4d1d1",
        "#FAFAD2",
        "#f3dfeb",
        "#bcd7f3",
        "#e1eed5",
        "#FFF0F5",
        "#ecf2ff",
        "#ccffe6",
    ];

    function setNewText(e) {
        e.preventDefault();
        let newBox = props.box;
        newBox.text = boxText;
        document.querySelector(".displayPopupBoxEditor").classList.remove("displayPopupBoxEditor");
        props.updateTimelineBox(props.timelineId, newBox);
    }

    function setNewBgColor(color) {
        let newBox = props.box;
        newBox.bgColor = color;
        document.querySelector(".displayPopupBoxEditor").classList.remove("displayPopupBoxEditor");
        props.updateTimelineBox(props.timelineId, newBox);
    }

    function deleteBox() {
        if (window.confirm("Are you sure?") === true) {
            props.deleteTimelineBox(props.timelineId, props.box.id);
        }
    }

    return (
        <div className="popupBoxEditor">
            <form onSubmit={setNewText}>
            <label htmlFor="boxText">Text: </label>
            <input type="text" name="boxText" className="boxTextInput" value={boxText} onChange={e => setBoxText(e.target.value)} />
            <input type="submit" className="boxTextButton"  value="OK" />
            </form>
            <div className="colorPickerContainer">
                <div className="colorPicker" style={{backgroundColor: colorPallete[0]}} onClick={()=>setNewBgColor(colorPallete[0])} ></div>
                <div className="colorPicker" style={{backgroundColor: colorPallete[1]}} onClick={()=>setNewBgColor(colorPallete[1])} ></div>
                <div className="colorPicker" style={{backgroundColor: colorPallete[2]}} onClick={()=>setNewBgColor(colorPallete[2])} ></div>
                <div className="colorPicker" style={{backgroundColor: colorPallete[3]}} onClick={()=>setNewBgColor(colorPallete[3])} ></div>
                <div className="colorPicker" style={{backgroundColor: colorPallete[4]}} onClick={()=>setNewBgColor(colorPallete[4])} ></div>
                <div className="colorPicker" style={{backgroundColor: colorPallete[5]}} onClick={()=>setNewBgColor(colorPallete[5])} ></div>
                <div className="colorPicker" style={{backgroundColor: colorPallete[6]}} onClick={()=>setNewBgColor(colorPallete[6])} ></div>
                <div className="colorPicker" style={{backgroundColor: colorPallete[7]}} onClick={()=>setNewBgColor(colorPallete[7])} ></div>
                <div className="colorPicker" style={{backgroundColor: colorPallete[8]}} onClick={()=>setNewBgColor(colorPallete[8])} ></div>
                <div className="colorPicker" style={{backgroundColor: colorPallete[9]}} onClick={()=>setNewBgColor(colorPallete[9])} ></div>
                <div className="colorPicker" style={{backgroundColor: colorPallete[10]}} onClick={()=>setNewBgColor(colorPallete[10])} ></div>
                <div className="colorPicker" style={{backgroundColor: colorPallete[11]}} onClick={()=>setNewBgColor(colorPallete[11])} ></div>
            </div>
            <div className="deleteBox" onClick={deleteBox}>Delete this box</div>
        </div>
    )
}