import { ChartWrapper } from '../../components';
import { HistoricalDataProvider } from '../../providers';
import { HistoricalView } from '../../views';

it('displays the historical data correctly', () => {
  const positiveCount = {
    Jan: 10,
    Feb: 20,
    Mar: 30,
  };
  const negativeCount = {
    Jan: 5,
    Feb: 15,
    Mar: 25,
  };
  const provider = new HistoricalDataProvider();
  jest.spyOn(provider, 'getLabels').mockReturnValue(['Jan', 'Feb', 'Mar']);
  jest
    .spyOn(provider, 'getData')
    .mockReturnValue({ positiveCount, negativeCount });

  const chartWrapper = new ChartWrapper();
  const lineMock = jest.fn();
  chartWrapper.line = lineMock;

  const props = {
    title: 'Test',
    provider: provider,
    chartWrapper: chartWrapper,
  };

  HistoricalView(props);

  const expectedData = {
    months: ['Jan', 'Feb', 'Mar'],
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

  expect(lineMock).toHaveBeenCalledWith(expect.any(Object), expectedData);
});
