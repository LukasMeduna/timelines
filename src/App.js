import './App.css';
import Topbar from './components/topbar/Topbar';
import { myTimeline, timeUnits, timeUnitsName,timeUnitWidth } from './myTimelineData';
import TimeUnitsRow from './components/timeUnitsRow/timeUnitsRow';
import Timeline from './components/timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="leftColumn"><div className="timeUnitsName">{timeUnitsName}</div>      </div>
      <div className="timelinesArea">
        <TimeUnitsRow timeUnits={timeUnits} timeUnitWidth={timeUnitWidth} />
        <Timeline timeUnits={timeUnits}  timeUnitWidth={timeUnitWidth} timeline={myTimeline} />
      </div>
    </div>
  );
}

export default App;
