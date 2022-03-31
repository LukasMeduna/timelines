import './App.css';
import { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import TimeUnitsRow from './components/timeUnitsRow/timeUnitsRow';
import Timeline from './components/timeline/Timeline';
import TimelineName from './components/timelineName/TimelineName';
import UploadFile from './components/uploadFile/UploadFile';

function App() {
  const [data, setData] = useState();
  const uploadData = (uploadedData) => setData(uploadedData);
  const downloadData = () => data;

  const zoomIn = () => { setData(previousState => { return { ...previousState, timeUnitWidth: data.timeUnitWidth + 10 } }); };
  const zoomOut = () => { setData(previousState => { return { ...previousState, timeUnitWidth: data.timeUnitWidth - 10 } }); };

  if (data) {
    return (
      <div className="App">
        <Topbar downloadData={downloadData} zoomIn={zoomIn} zoomOut={zoomOut} />
        <div className="leftColumn">
          <div className="timeUnitsName">{data.timeUnitsName}</div>
          {data.myTimelines.map(myTimeline => <TimelineName key={myTimeline.id} timeline={myTimeline} />)}
        </div>
        <div className="timelinesArea">
          <TimeUnitsRow timeUnits={data.timeUnits} timeUnitWidth={data.timeUnitWidth} />
          {data.myTimelines.map(myTimeline => <Timeline key={myTimeline.id} timeUnits={data.timeUnits} timeUnitWidth={data.timeUnitWidth} timeline={myTimeline} />)}
        </div>
      </div>
    );
  }

  else { //no data uploaded
    return (
      <div className="UploadDataContainer">
        No data uploaded.
        <UploadFile uploadData={uploadData} />
      </div>
    )
  }
}

export default App;
