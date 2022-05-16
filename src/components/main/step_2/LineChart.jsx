import { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  fill: true,
  responsive: false,
  scales: {
    y: {
      min: 0,
      max: 20,
      ticks: {
        color: "gray",
      },
      grid: {
        color: "gray",
      },
    },
    x: {
      ticks: {
        color: "gray",
      },
      grid: {
        color: "gray",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const LineChart = ({ labels, values, colors }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }

    const createGradientColor = (color) => {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.99, "rgba(255, 255, 255, 0.6)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.6)");
      return gradient;
    };

    setChartData({
      datasets: [
        {
          data: values,
          tension: 0.3,
          borderColor: `${colors[0]}`,
          pointRadius: 6,
          pointBackgroundColor: `${colors[1]}`,
          backgroundColor: createGradientColor(`${colors[2]}`),
        },
      ],
      labels,
    });
  }, [labels, values, colors]);

  return <Line data={chartData} options={options} ref={chartRef} />;
};

export default LineChart;
