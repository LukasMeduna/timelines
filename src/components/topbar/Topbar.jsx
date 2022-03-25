import "./topbar.css";

export default function Topbar(props) {
    return (
        <div className="topBar">
            <h1>Timelines</h1>
            <div className="zoomButtons">
                <button onClick={props.zoomIn}>+</button>
                <button onClick={props.zoomOut}>-</button>
            </div>
        </div>
    );
}