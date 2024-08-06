/* eslint-disable react/prop-types */
import { useRef} from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import './Chartcomponent.css';

ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  const chartData = {
    labels: data.labels || [], 
    datasets: [
      {
        label: 'Score',
        data: data.values || [], 
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5, 
        tension: 0.1,
      },
    ],
  };
  const barChartData = {
    labels: data.labels || [], 
    datasets: [
      {
        label: 'Score',
        data: data.values || [], 
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)', 
        borderWidth: 1, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Scores',
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          color: '#333', 
        },
      },
      y: {
        grid: {
          color: '#ddd', 
        },
        ticks: {
          color: '#333', 
        },
      },
    },
  };

  return (
    <div className="chart-container">
            <Line ref={chartRef} data={chartData} options={options} />
            <Bar ref={chartRef} data={barChartData} options={options} />
    </div>
  );
};

export default ChartComponent;
