import './Pointcalculator.css';
import Pointcalcform from '../Components/Pointcalcform';
import ChartComponent from '../Components/Chartcomponent';
import { useState, useEffect} from 'react';
export default function Pointcalculator(){
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
        }
      };
    return (
        <div className='page-container'>
            <h1 id='Page-header'>WELCOME TO THE BETA POINT COUNTER/TRACKER</h1>
            <h3 id='Explanation'>This is a program designed by PROTA 17222 for FTC teams to be able to log and visualize scores</h3>
            <Pointcalcform onAddData={handleAddData} />
            <button onClick={handleClearData} className={`clrdatabutton ${isPressed ? "show" : ""}`} id='clrdatabutton'>Clear ALL Data</button>
            <ChartComponent data={chartData} />
        </div>
    )
}