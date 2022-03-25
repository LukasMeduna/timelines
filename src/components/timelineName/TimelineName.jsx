import "./timelineName.css";

export default function TimelineName(props) {
    return (
        <div className="timelineName"  style={{height: props.timeline.rows*40+"px"}}>
            {props.timeline.name}
        </div>
    )
}