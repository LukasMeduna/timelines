import DownloadFile from "../downloadFile/DownloadFile";
import "./topbar.css";

export default function Topbar(props) {
    return (
        <div className="topBar">
            <h1>Timelines</h1>
            <div className="topbarButtons">
                <DownloadFile downloadData={props.downloadData} />
            </div>
            <div className="zoomButtons">
                <button onClick={props.zoomIn}>+</button>
                <button onClick={props.zoomOut}>-</button>
            </div>
        </div>
    );
}