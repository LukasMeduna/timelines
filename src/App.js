import './App.css';
import { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import TimeUnitsRow from './components/timeUnitsRow/TimeUnitsRow';
import Timeline from './components/timeline/Timeline';
import TimelineName from './components/timelineName/TimelineName';
import UploadFile from './components/uploadFile/UploadFile';

document.onselectstart = () => {return false}

function App() {
  const [data, setData] = useState();
  const uploadData = (uploadedData) => setData(uploadedData);
  const downloadData = () => data;

  const zoomIn = () => { setData(previousState => { return { ...previousState, timeUnitWidth: data.timeUnitWidth + 10 } }); };
  const zoomOut = () => { setData(previousState => { return { ...previousState, timeUnitWidth: data.timeUnitWidth - 10 } }); };

  const addNewTimelineBox = (newTimelineBox, timelineId) => {
    const timelineNumber = data.timelines.findIndex(obj => {return obj.id === timelineId});
    let timeline = data.timelines[timelineNumber];
    const maxIdInTimelineBoxes = Math.max(...timeline.timelineBoxes.map(x => x.id));
    newTimelineBox.id = maxIdInTimelineBoxes+1;
    timeline.timelineBoxes.push(newTimelineBox);
    let newTimelines = data.timelines;
    newTimelines[timelineNumber] = timeline;
    setData(previousState => { return { ...previousState, timelines: newTimelines } });
  }

  const updateTimelineBox = (timelineId, updatedTimelineBox) => {
    const timelineNumber = data.timelines.findIndex(obj => {return obj.id === timelineId});
    let timeline = data.timelines[timelineNumber];
    const boxNumber = timeline.timelineBoxes.findIndex(obj => {return obj.id === updatedTimelineBox.id});
    timeline.timelineBoxes[boxNumber] = updatedTimelineBox;
    let newTimelines = data.timelines;
    newTimelines[timelineNumber] = timeline;
    setData(previousState => { return { ...previousState, timelines: newTimelines } });
  }

  const deleteTimelineBox = (timelineId, boxId) => {
    const timelineNumber = data.timelines.findIndex(obj => {return obj.id === timelineId});
    let timeline = data.timelines[timelineNumber];
    const boxNumber = timeline.timelineBoxes.findIndex(obj => {return obj.id === boxId});
    timeline.timelineBoxes.splice(boxNumber,1);
    let newTimelines = data.timelines;
    newTimelines[timelineNumber] = timeline;
    setData(previousState => { return { ...previousState, timelines: newTimelines } });
  }

  const addTimeUnit = () => {
    const timeUnitName = prompt("New time Unit name: ");
    if (!timeUnitName) return;
    const maxIdInTimeUnites = Math.max(...data.timeUnits.map(x => x.id));
    let newTimeUnits =  data.timeUnits;
    const newTimeUnit = {
      id:maxIdInTimeUnites+1, 
      name: timeUnitName
    }
    newTimeUnits.push(newTimeUnit);
    setData(previousState => { return { ...previousState, timeUnits: newTimeUnits } });
  }

  const updateTimeUnit = (timeUnit) => {
    const timeUnitNumber = data.timeUnits.findIndex(obj => {return obj.id === timeUnit.id});
    let newTimeUnits =  data.timeUnits;
    newTimeUnits[timeUnitNumber] = timeUnit;
    setData(previousState => { return { ...previousState, timeUnits: newTimeUnits } });
  }

  const editTimeUnitsName = () => {
    const newName = prompt("Time units name: ");
    if (!newName) return;
    setData(previousState => { return { ...previousState, timeUnitsName: newName } });
  }

  if (data) {
    return (
      <div className="App">
        <Topbar downloadData={downloadData} zoomIn={zoomIn} zoomOut={zoomOut} />
        <div className="leftColumn">
          <div className="timeUnitsName">
            <span onClick={editTimeUnitsName}>{data.timeUnitsName}</span>
            <button className="addTimeUnit" onClick={addTimeUnit}>+</button>
          </div>
          {data.timelines.map(myTimeline => <TimelineName key={myTimeline.id} timeline={myTimeline} />)}
        </div>
        <div className="timelinesArea">
          <TimeUnitsRow timeUnits={data.timeUnits} timeUnitWidth={data.timeUnitWidth} updateTimeUnit={updateTimeUnit} />
          {data.timelines.map(myTimeline => 
            <Timeline key={myTimeline.id} 
                      id={myTimeline.id} 
                      timeUnits={data.timeUnits} 
                      timeUnitWidth={data.timeUnitWidth} 
                      timeline={myTimeline} 
                      addNewTimelineBox={addNewTimelineBox}
                      updateTimelineBox={updateTimelineBox}
                      deleteTimelineBox={deleteTimelineBox}
            />
          )}
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
