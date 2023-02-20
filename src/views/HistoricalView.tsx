import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface HistoricalViewProps {
  title: string;
}

export function HistoricalView(props: HistoricalViewProps) {
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: props.title,
        text: props.title,
      },
    },
  };

  const sampleDates = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const samplePositiveCountMap: any = {
    January: 10,
    February: 11,
    March: 9,
    April: 3,
    May: 2,
    June: 1,
    July: 1,
  };

  const sampleNegativeCountMap: any = {
    January: 1,
    February: 3,
    March: 5,
    April: 7,
    May: 9,
    June: 10,
    July: 12,
  };

  const data: any = {
    sampleDates,
    datasets: [
      {
        label: "Positive",
        data: samplePositiveCountMap,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Negative",
        data: sampleNegativeCountMap,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
