import { CategoricalDataProvider } from '../providers';
import { ChartWrapper } from '../components';

interface CategoricalViewProps {
  title: string;
  provider: CategoricalDataProvider;
  chartWrapper: ChartWrapper;
}

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

  const provider = props.provider;
  const categoricalData = provider.getData();
  const labels = provider.getLabels();

  const data = {
    labels: labels,
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

  return props.chartWrapper.radar(options, data);
  // return <Radar options={options} data={data} />;
}
