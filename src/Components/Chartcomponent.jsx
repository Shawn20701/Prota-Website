/* eslint-disable react/prop-types */
import { useRef} from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';
import './Chartcomponent.css';
// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  // Chart data configuration
  const chartData = {
    labels: data.labels || [], // Ensure labels are provided
    datasets: [
      {
        label: 'Score',
        data: data.values || [], // Ensure values are provided
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5, // Set point radius to make points visible
        tension: 0.1,
      },
    ],
  };
  const barChartData = {
    labels: data.labels || [], // Ensure labels are provided
    datasets: [
      {
        label: 'Score',
        data: data.values || [], // Ensure values are provided
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Color for bars
        borderColor: 'rgba(75, 192, 192, 1)', // Border color for bars
        borderWidth: 1, // Border width for bars
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
