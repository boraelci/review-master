import { ChartWrapper } from '../components';
import { HistoricalDataProvider } from '../providers';

interface HistoricalViewProps {
  title: string;
  provider: HistoricalDataProvider;
  chartWrapper: ChartWrapper;
}

/**
 * This is a historical view that shows the number of positive and negative reviews
 * @param props
 * @returns
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

  return props.chartWrapper.line(options, data);
}
