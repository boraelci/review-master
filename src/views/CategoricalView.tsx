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
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: props.title,
        text: props.title,
      },
    },
  };

  const positiveCategoryToCount = {
    Cost: 2,
    Quality: 9,
    Durability: 3,
    Effectiveness: 5,
    'Ease of use': 2,
  };

  const negativeCategoryToCount = {
    Cost: 9,
    Quality: 3,
    Durability: 5,
    Effectiveness: 2,
    'Ease of use': 1,
  };

  const data = {
    labels: ['Cost', 'Quality', 'Durability', 'Effectiveness', 'Ease of use'],
    datasets: [
      {
        label: 'Positive',
        data: Object.values(positiveCategoryToCount),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Negative',
        data: Object.values(negativeCategoryToCount),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  return <Radar options={options} data={data} />;
}
