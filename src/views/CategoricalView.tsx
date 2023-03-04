import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { CategoricalDataProvider } from '../providers';

interface CategoricalViewProps {
  title: string;
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
);

export function CategoricalView(props: CategoricalViewProps) {
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

  const provider = new CategoricalDataProvider();
  const categoricalData = provider.getData();

  const data = {
    labels: ['Cost', 'Quality', 'Durability', 'Effectiveness', 'Ease of use'],
    datasets: [
      {
        label: 'Positive',
        data: Object.values(categoricalData.positiveCategoryToCount),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Negative',
        data: Object.values(categoricalData.negativeCategoryToCount),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  return <Radar options={options} data={data} />;
}
