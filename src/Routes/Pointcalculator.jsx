import './Pointcalculator.css';
import Pointcalcform from '../Components/Pointcalcform';
import ChartComponent from '../Components/Chartcomponent';
import { useState, useEffect, useContext} from 'react';
import Toggle from '../Components/Toggle';
import { Eventcontext } from '../Components/Eventcontext';
import Hidden from '../Components/Hidden';
export default function Pointcalculator(){
  const {isdark} = useContext(Eventcontext);
    const [chartData, setChartData] = useState(() => {
        const savedData = localStorage.getItem('chartData');
        return savedData ? JSON.parse(savedData) : { labels: [], values: [] };
    });
    const [isPressed, setisPressed] = useState(false);
    useEffect(() => {
        localStorage.setItem('chartData', JSON.stringify(chartData));
    }, [chartData]);
      const handleAddData = (value, label) => {
        setChartData((prevData) => ({
            labels: [...prevData.labels, label],
            values: [...prevData.values, value],
        }));
      };
      const handleClearData = () => {
        if (window.confirm('Are you sure you want to clear all data?')) {
          setChartData({ labels: [], values: [] });
          localStorage.removeItem('chartData');
          setisPressed(!isPressed);
          window.confirm("Data deleted...");
          console.log("data deleted");
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
        console.log(istoggled);
      };
    return (
        <div className='page-container' data-theme={isdark ? "dark" : "light"} data-secret={istoggled ? "toggled" : ""}>
            <Toggle />
            <div id='Page-header-container'>
              <h1 id='Page-header'>WELCOME TO THE BETA <Hidden istoggled={istoggled} toggleSecret={toggleSecret}/>OINT COUNTER/TRACKER</h1>
            </div>
            <h3 id='Explanation'>This is a program designed by PROTA 17222 for FTC teams to be able to log and visualize scores</h3>
            <Pointcalcform onAddData={handleAddData} />
            <button onClick={handleClearData} className={`clrdatabutton ${isPressed ? "show" : ""}`} id='clrdatabutton'>Clear ALL Data</button>
            <ChartComponent data={chartData} />
        </div>
    )
}