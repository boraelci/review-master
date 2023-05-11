import { AnalysisModel, HistoricalViewer } from '../..';
import analysisResponse from '../../data/analysisResponse.json';

describe('HistoricalViewer', () => {
  let analysisModel: AnalysisModel;

  beforeEach(() => {
    analysisModel = new AnalysisModel(analysisResponse);
  });

  test('should aggregate data by day', () => {
    const historicalViewer = new HistoricalViewer(analysisModel, 'day');
    const chartData = historicalViewer.aggregateData();

    expect(chartData.labels.length).toBeGreaterThan(0);
    expect(chartData.positive.length).toBeGreaterThan(0);
    expect(chartData.negative.length).toBeGreaterThan(0);
  });

  test('should aggregate data by week', () => {
    const historicalViewer = new HistoricalViewer(analysisModel, 'week');
    const chartData = historicalViewer.aggregateData();

    expect(chartData.labels.length).toBeGreaterThan(0);
    expect(chartData.positive.length).toBeGreaterThan(0);
    expect(chartData.negative.length).toBeGreaterThan(0);
  });

  test('should aggregate data by month', () => {
    const historicalViewer = new HistoricalViewer(analysisModel, 'month');
    const chartData = historicalViewer.aggregateData();

    expect(chartData.labels.length).toBeGreaterThan(0);
    expect(chartData.positive.length).toBeGreaterThan(0);
    expect(chartData.negative.length).toBeGreaterThan(0);
  });

  test('should convert to ChartJS data format', () => {
    const historicalViewer = new HistoricalViewer(analysisModel, 'day');
    const chartData = historicalViewer.aggregateData();
    const chartJSData = historicalViewer.convertToChartJSData(chartData);

    expect(chartJSData.labels.length).toBeGreaterThan(0);
    expect(chartJSData.datasets.length).toBe(2);
    expect(chartJSData.datasets[0].label).toBe('Positive');
    expect(chartJSData.datasets[1].label).toBe('Negative');
  });

  test('should generate options and data for ChartJS', () => {
    const historicalViewer = new HistoricalViewer(analysisModel, 'day');
    const { options, data } = historicalViewer.getOptionsAndData();

    expect(options).toBeDefined();
    expect(data.labels.length).toBeGreaterThan(0);
    expect(data.datasets.length).toBe(2);
  });
});
