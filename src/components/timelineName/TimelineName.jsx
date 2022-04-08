import "./timelineName.css";

export default function TimelineName(props) {
    function createTimeline() {
        const name = prompt("Name of new timeline: ");
        if (!name) return;
        props.addNewTimeline(name,props.timeline.id);
    }
    
    return (
        <div className="timelineName"  style={{height: props.timeline.rows*40+"px"}}>
            {props.timeline.name}
        <div className="addNewTimeline" onClick={createTimeline}></div>
        </div>
    )
}