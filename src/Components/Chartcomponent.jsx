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
        pointStyle: 'circle', 
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
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
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
        color: 'rgba(255, 87, 34, 1)',
        text: 'Scores',
      },
    },
    scales: {
      x: {
        grid: {
          display: false, 
        },
        ticks: {
          color: 'rgba(255, 87, 34, 1)', 
        },
      },
      y: {
        grid: {
          color: '#ddd', 
        },
        ticks: {
          color: 'rgba(255, 87, 34, 1)', 
        },
      },
    },
  };

  return (
    <div className="chart-container">
            <Line className='chart'ref={chartRef} data={chartData} options={options} />
            <Bar className='chart'ref={chartRef} data={barChartData} options={options} />
    </div>
  );
};

export default ChartComponent;
