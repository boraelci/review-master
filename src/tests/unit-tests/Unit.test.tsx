import { HistoricalView, CategoricalView } from '../../views';

import {
  CategoricalDataProvider,
  HistoricalDataProvider,
} from '../../providers';
import { ChartWrapper } from '../../components';

describe('CategoricalView', () => {
  it('calls its provider to get data', () => {
    const provider = new CategoricalDataProvider();
    const getDataSpy = jest.spyOn(provider, 'getData');

    const wrapper = new ChartWrapper();
    const radarMock = jest.fn();
    wrapper.radar = radarMock;

    const props = {
      title: 'Test',
      provider: provider,
      chartWrapper: wrapper,
    };
    CategoricalView(props);
    expect(getDataSpy).toHaveBeenCalledTimes(1);
  });
});

describe('HistoricalView', () => {
  it('calls its provider to get data', () => {
    const provider = new HistoricalDataProvider();
    const getDataSpy = jest.spyOn(provider, 'getData');

    const wrapper = new ChartWrapper();
    const lineMock = jest.fn();
    wrapper.line = lineMock;

    const props = {
      title: 'Test',
      provider: provider,
      chartWrapper: wrapper,
    };

    HistoricalView(props);
    expect(getDataSpy).toHaveBeenCalledTimes(1);
  });
});

it('displays the categorical data correctly', () => {
  const positiveCount = {
    a: 10,
    b: 20,
    c: 30,
  };
  const negativeCount = {
    a: 5,
    b: 15,
    c: 25,
  };
  const labels = ['a', 'b', 'c'];
  const provider = new CategoricalDataProvider();
  jest.spyOn(provider, 'getLabels').mockReturnValue(labels);
  jest.spyOn(provider, 'getData').mockReturnValue({
    positiveCount,
    negativeCount,
  });

  const chartWrapper = new ChartWrapper();
  const radarMock = jest.fn();
  chartWrapper.radar = radarMock;

  const props = {
    title: 'Test',
    provider: provider,
    chartWrapper: chartWrapper,
  };

  CategoricalView(props);

  const expectedData = {
    labels: labels,
    datasets: [
      {
        label: 'Positive',
        data: [positiveCount.a, positiveCount.b, positiveCount.c],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Negative',
        data: [negativeCount.a, negativeCount.b, negativeCount.c],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  expect(radarMock).toHaveBeenCalledWith(expect.any(Object), expectedData);
});

describe('CategoricalDataProvider', () => {
  it('should return data with greater than or equal to 5 elements', () => {
    const provider = new CategoricalDataProvider();
    const data = provider.getData();
    const labels = provider.getLabels();
    const expectedMinCount = 5;

    expect(Object.keys(data.positiveCount).length).toBeGreaterThanOrEqual(
      expectedMinCount,
    );
    expect(Object.keys(data.negativeCount).length).toBeGreaterThanOrEqual(
      expectedMinCount,
    );

    labels.forEach((label) => {
      expect(data.positiveCount).toHaveProperty(label);
      expect(data.negativeCount).toHaveProperty(label);
    });
  });
});

describe('HistoricalDataProvider', () => {
  it('should return data with more than 5 elements and all months should be present', () => {
    const provider = new HistoricalDataProvider();
    const data = provider.getData();
    const months = provider.getLabels();
    const expectedMinCount = 5;

    expect(Object.keys(data.positiveCount).length).toBeGreaterThanOrEqual(
      expectedMinCount,
    );
    expect(Object.keys(data.negativeCount).length).toBeGreaterThanOrEqual(
      expectedMinCount,
    );

    months.forEach((month) => {
      expect(data.positiveCount).toHaveProperty(month);
      expect(data.negativeCount).toHaveProperty(month);
    });
  });
});
