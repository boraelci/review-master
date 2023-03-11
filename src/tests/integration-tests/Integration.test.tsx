import { render } from '@testing-library/react';
import { ChartWrapper } from '../../components';
import { HistoricalDataProvider } from '../../providers';
import { HistoricalView } from '../../views';

it('displays the historical data correctly', () => {
  const positiveMonthToCount = {
    Jan: 10,
    Feb: 20,
    Mar: 30,
  };
  const negativeMonthToCount = {
    Jan: 5,
    Feb: 15,
    Mar: 25,
  };
  const provider = new HistoricalDataProvider();
  jest.spyOn(provider, 'getMonths').mockReturnValue(['Jan', 'Feb', 'Mar']);
  jest
    .spyOn(provider, 'getData')
    .mockReturnValue({ positiveMonthToCount, negativeMonthToCount });

  const chartWrapper = new ChartWrapper();
  const lineMock = jest.fn();
  chartWrapper.line = lineMock;

  const props = {
    title: 'Test',
    provider: provider,
    chartWrapper: chartWrapper,
  };

  render(<HistoricalView {...props} />);

  const expectedData = {
    months: ['Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Positive',
        data: positiveMonthToCount,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Negative',
        data: negativeMonthToCount,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  expect(lineMock).toHaveBeenCalledWith(expect.any(Object), expectedData);
});
