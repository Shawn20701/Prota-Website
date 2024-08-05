/* eslint-disable react/prop-types */
import { useRef} from 'react';
import { Line } from 'react-chartjs-2';
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
        label: 'Scores',
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

  // Chart options configuration
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
          display: false, // Hide grid lines for x-axis if not needed
        },
        ticks: {
          color: '#333', // Color of x-axis labels
        },
      },
      y: {
        grid: {
          color: '#ddd', // Color of y-axis grid lines
        },
        ticks: {
          color: '#333', // Color of y-axis labels
        },
      },
    },
  };

  return (
    <div className="chart-container">
            <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;
