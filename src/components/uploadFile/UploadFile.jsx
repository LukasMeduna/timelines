import "./uploadFile.css";

export default function UploadFile(props) {
    const uploadJsonFile = (e) => {
        const readFile = new FileReader();
        readFile.readAsText(e.target.files[0],"UTF-8");
        readFile.onload = (e) => {
            const data = JSON.parse(e.target.result);
            //console.log("JSON data",data);
            props.uploadData(data);
        };
    };
    
    return (
        <div className="uploadFile">
            <input type="file" onChange={uploadJsonFile} />
        </div>
    )
}