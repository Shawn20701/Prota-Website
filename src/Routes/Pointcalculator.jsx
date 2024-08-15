import './Pointcalculator.css';
import Pointcalcform from '../Components/Pointcalcform';
import ChartComponent from '../Components/Chartcomponent';
import { useState, useEffect, useContext} from 'react';
import Toggle from '../Components/Toggle';
import { Eventcontext } from '../Components/Eventcontext';
import Hidden from '../Components/Hidden';
export default function Pointcalculator(){
  const {isdark} = useContext(Eventcontext);
  const [totalgraph, settotalgraph] = useState(() => {
    const savedgraphtimes = localStorage.getItem('TimesGraphed');
    return savedgraphtimes ? JSON.parse(savedgraphtimes) : 0;
  });
  const [secretTheme, setsecretTheme] = useState(false);
    const [chartData, setChartData] = useState(() => {
        const savedData = localStorage.getItem('chartData');
        return savedData ? JSON.parse(savedData) : { labels: [], values: [] };
    });
    const [timesdeleted, settimesdeleted] = useState(() => {
      const savedtimesdeleted = localStorage.getItem('TimesDeleted');
      return savedtimesdeleted ? JSON.parse(savedtimesdeleted) : 0;
    })
    useEffect(() => {
      if (totalgraph >= 13) {
        console.log('Congrats you achieved 13 Points Graphed at one time :P');
        setsecretTheme(true);
      }
      if (timesdeleted > 3 && timesdeleted < 5){
        console.log("you have officially achieved 4 deletes, congrats :P ");
      }
    }, [totalgraph, timesdeleted]);
    const [isPressed, setisPressed] = useState(false);
    useEffect(() => {
        localStorage.setItem('chartData', JSON.stringify(chartData));
    }, [chartData]);
      const handleAddData = (value, label) => {
        setChartData((prevData) => ({
            labels: [...prevData.labels, label],
            values: [...prevData.values, value],
        }));
        settotalgraph((prevTotalGraph) => {
          const newTotalGraph = prevTotalGraph + 1;
          localStorage.setItem('TimesGraphed', JSON.stringify(newTotalGraph));
          console.log('Points Graphed: ' + newTotalGraph + ' ' + ':P')
          return newTotalGraph;
        });
      }
      const handleClearData = () => {
        if (window.confirm('Are you sure you want to clear all data?')) {
          setChartData({ labels: [], values: [] });
          localStorage.removeItem('chartData');
          setisPressed(!isPressed);
          console.log("data deleted");
          localStorage.removeItem('TimesGraphed');
          settotalgraph(0);
          settimesdeleted((prevTotalDeleted) => {
            const newTotalDeleted = prevTotalDeleted + 1;
            localStorage.setItem('TimesDeleted', JSON.stringify(newTotalDeleted));
            console.log('Times Data has been deleted: ' + newTotalDeleted + " Times :(");
            return newTotalDeleted;
          })
        }
      };
      const [istoggled, setistoggled] = useState(() => {
        const savedMode = localStorage.getItem('istoggled');
        return savedMode === 'true'; 
      });
      const toggleSecret = () => {
        const newMode = !istoggled;
        setistoggled(newMode);
        localStorage.setItem('istoggled', newMode); 
      };
      const toggleSecretTheme = () => {
        const newMode = !secretTheme;
        setsecretTheme(newMode);
      };
    return (
        <div className='page-container' data-secrettheme={secretTheme ? "true" : "false"} data-theme={isdark ? "dark" : "light"} data-secret={istoggled ? "toggled" : ""}>
            <Toggle />
            <div id='Page-header-container'>
              <h1 id='Page-header'>WELCOME TO THE BETA <Hidden istoggled={istoggled} toggleSecret={toggleSecret}/>OINT COUNTER/TRACKER</h1>
            </div>
            <h3 id='Explanation'>This is a program designed by PROTA 17222 for FTC teams to be able to log and visualize scores</h3>
            <Pointcalcform onAddData={handleAddData} />
            <button onClick={handleClearData} className={`clrdatabutton ${isPressed ? "show" : ""}`} id='clrdatabutton'>Clear ALL Data</button>
            <ChartComponent data={chartData} />
            {totalgraph >= 13 && (
        <button onClick={toggleSecretTheme} className='toggle-theme-button'> Toggle Secret Theme </button>
      )}
        </div>
    )
}