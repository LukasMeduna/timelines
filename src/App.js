import './App.css';
import Topbar from './components/topbar/Topbar';
import { timeUnits, timeUnitsName,timeUnitWidth } from './myTimelineData';
import TimeUnitsRow from './components/timeUnitsRow/timeUnitsRow';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="leftColumn"><div className="timeUnitsName">{timeUnitsName}</div>      </div>
      <div className="timelinesArea">
        <TimeUnitsRow timeUnits={timeUnits} width={timeUnitWidth} />     
      </div>
    </div>
  );
}

export default App;
