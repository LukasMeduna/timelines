import "./downloadFile.css";

export default function DownloadFile(props) {

    const downloadJsonFile = () => {
        const timelinesData = props.downloadData();
        const data = new Blob([JSON.stringify(timelinesData)], {type: "text/json"});
        const url = window.URL.createObjectURL(data);
        const link = document.createElement("a");
        document.body.appendChild(link);
        link.href = url;
        link.setAttribute("download", "myTimelines.json");
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="downloadFile">
            <button onClick={downloadJsonFile}>Download</button>
        </div>
    );
}