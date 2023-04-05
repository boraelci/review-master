import { CategoricalDataProvider } from '../providers';
import { ChartWrapper } from '../components';

interface CategoricalViewProps {
  title: string;
  provider: CategoricalDataProvider;
  chartWrapper: ChartWrapper;
}

/**
 * This function renders a CategoricalView component with the given
 * title, provider, and chartWrapper. It displays a radar chart with
 * positive and negative category counts provided by the given CategoricalDataProvider.
 *
 * @param {CategoricalViewProps} props - The properties for the CategoricalView component.
 * @param {string} props.title - The title to display above the chart.
 * @param {CategoricalDataProvider} props.provider - A CategoricalDataProvider instance to retrieve data.
 * @param {ChartWrapper} props.chartWrapper - A ChartWrapper instance to render the chart.
 * @returns {React.ReactNode} A radar chart displaying the categorical data.
 */
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
        data: Object.values(categoricalData.positiveCount),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Negative',
        data: Object.values(categoricalData.negativeCount),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  return props.chartWrapper.radar(options, data);
  // return <Radar options={options} data={data} />;
}
