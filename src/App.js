import './App.css';
import { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import { myTimelines, timeUnits, timeUnitsName,timeUnitWidth } from './myTimelineData';
import TimeUnitsRow from './components/timeUnitsRow/timeUnitsRow';
import Timeline from './components/timeline/Timeline';
import TimelineName from './components/timelineName/TimelineName';

function App() {
  const [unitWidth, setUnitWidth] = useState(timeUnitWidth);
  const zoomIn = () => setUnitWidth(unitWidth+10);
  const zoomOut = () => setUnitWidth(unitWidth-10);

  return (
    <div className="App">
      <Topbar zoomIn={zoomIn} zoomOut={zoomOut} />
      <div className="leftColumn">
        <div className="timeUnitsName">{timeUnitsName}</div>
        {myTimelines.map(myTimeline => <TimelineName key={myTimeline.id} timeline={myTimeline} />)}
      </div>
      <div className="timelinesArea">
        
        <TimeUnitsRow timeUnits={timeUnits} timeUnitWidth={unitWidth} />
        {myTimelines.map(myTimeline => <Timeline key={myTimeline.id} timeUnits={timeUnits}  timeUnitWidth={unitWidth} timeline={myTimeline} />)}
      </div>
    </div>
  );
}

export default App;
