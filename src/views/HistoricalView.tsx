import { ChartWrapper } from '../components';
import { HistoricalDataProvider } from '../providers';

interface HistoricalViewProps {
  title: string;
  provider: HistoricalDataProvider;
  chartWrapper: ChartWrapper;
}

/**
 * This function renders a HistoricalView component with the given
 * title, provider, and chartWrapper. It displays a line chart with
 * positive and negative review counts over time provided by the given HistoricalDataProvider.
 *
 * @param {HistoricalViewProps} props - The properties for the HistoricalView component.
 * @param {string} props.title - The title to display above the chart.
 * @param {HistoricalDataProvider} props.provider - A HistoricalDataProvider instance to retrieve data.
 * @param {ChartWrapper} props.chartWrapper - A ChartWrapper instance to render the chart.
 * @returns {React.ReactNode} A line chart displaying the historical review data.
 */
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

  const provider = props.provider;
  const months = provider.getLabels();
  const historicalData = provider.getData();

  const data = {
    months,
    datasets: [
      {
        label: 'Positive',
        data: historicalData.positiveCount,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Negative',
        data: historicalData.negativeCount,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return props.chartWrapper.line(options, data);
}
