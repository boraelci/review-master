import { ChartWrapper } from '../components';
import { CategoricalDataModel } from '../models';

interface CategoricalViewProps {
  chartWrapper: ChartWrapper;
  categoricalDataModel: CategoricalDataModel;
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
  let positiveData = props.categoricalDataModel.positiveData;
  let negativeData = props.categoricalDataModel.negativeData;

  const title = 'Review Counts by Category';

  const labels = positiveData.map((data) => data.category);
  const positiveCount = positiveData.map((data) => data.count);
  const negativeCount = negativeData.map((data) => data.count);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: !!title, text: title },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Positive',
        data: positiveCount,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Negative',
        data: negativeCount,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return props.chartWrapper.line(options, data);
}
