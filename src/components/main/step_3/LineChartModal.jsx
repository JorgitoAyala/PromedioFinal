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
  responsive: true,
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

const LineChartModal = ({ labels, pinta }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }

    setChartData({
      datasets: pinta,
      labels,
    });
  }, [labels, pinta]);

  return <Line data={chartData} options={options} ref={chartRef} />;
};

export default LineChartModal;
