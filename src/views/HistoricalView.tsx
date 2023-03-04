import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { HistoricalDataProvider } from '../providers';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface HistoricalViewProps {
  title: string;
}

export function HistoricalView(props: HistoricalViewProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: !!props.title,
        text: props.title,
      },
    },
  };

  const provider = new HistoricalDataProvider();
  const months = provider.getMonths();
  const historicalData = provider.getData();

  const data = {
    months,
    datasets: [
      {
        label: 'Positive',
        data: historicalData.positiveMonthToCount,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Negative',
        data: historicalData.negativeMonthToCount,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
