import { ChartWrapper } from '../components';

import { HistoricalDataModel } from '../models';

interface HistoricalViewProps {
  chartWrapper: ChartWrapper;
  historicalDataModel: HistoricalDataModel;
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
  let positiveData = props.historicalDataModel.positiveData;
  let negativeData = props.historicalDataModel.negativeData;

  const title = 'Review Counts by Day';
  // Replace the hardcoded months, positiveCount, and negativeCount
  positiveData.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  negativeData.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  const labels = positiveData.map((data) => data.date);
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
