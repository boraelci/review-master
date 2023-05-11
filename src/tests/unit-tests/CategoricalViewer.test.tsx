import { AnalysisModel, CategoricalViewer } from '../..';
import analysisResponse from '../../data/analysisResponse.json';

describe('CategoricalViewer', () => {
  let analysisModel: AnalysisModel;
  let categoricalViewer: CategoricalViewer;

  beforeEach(() => {
    analysisModel = new AnalysisModel(analysisResponse);
    categoricalViewer = new CategoricalViewer(analysisModel);
  });

  it('should create a CategoricalViewer instance with given AnalysisModel', () => {
    expect(categoricalViewer).toBeDefined();
    expect(categoricalViewer.analysisModel).toEqual(analysisModel);
  });

  describe('getOptionsAndData', () => {
    it('should return chart options and data', () => {
      const { options, data } = categoricalViewer.getOptionsAndData();

      expect(options).toBeDefined();
      expect(options.responsive).toBe(true);
      expect(options.plugins.legend.position).toBe('top');
      expect(options.scales.r.title.display).toBe(true);
      expect(options.scales.r.title.font.size).toBe(14);
      expect(options.scales.r.pointLabels.font.size).toBe(14);

      expect(data).toBeDefined();
      expect(data.labels).toBeDefined();
      expect(data.datasets).toBeDefined();
    });
  });

  describe('aggregateData', () => {
    it('should aggregate data by categories and count positive and negative reviews', () => {
      const categoryData = categoricalViewer.aggregateData();

      expect(categoryData.labels.length).toBeGreaterThan(0);
      expect(categoryData.positive.length).toBe(categoryData.labels.length);
      expect(categoryData.negative.length).toBe(categoryData.labels.length);

      categoryData.labels.forEach((_, index) => {
        const positiveCount = categoryData.positive[index];
        const negativeCount = categoryData.negative[index];
        expect(positiveCount).toBeGreaterThanOrEqual(0);
        expect(negativeCount).toBeGreaterThanOrEqual(0);
      });
    });
  });

  describe('convertToChartJSData', () => {
    it('should convert aggregated category data to ChartJS data format', () => {
      const categoryData = categoricalViewer.aggregateData();
      const chartJSData = categoricalViewer.convertToChartJSData(categoryData);

      expect(chartJSData.labels).toEqual(categoryData.labels);
      expect(chartJSData.datasets.length).toBe(2);

      const positiveDataset = chartJSData.datasets[0];
      expect(positiveDataset.label).toBe('Positive');
      expect(positiveDataset.data).toEqual(categoryData.positive);
      expect(positiveDataset.borderColor).toBeDefined();
      expect(positiveDataset.backgroundColor).toBeDefined();

      const negativeDataset = chartJSData.datasets[1];
      expect(negativeDataset.label).toBe('Negative');
      expect(negativeDataset.data).toEqual(categoryData.negative);
      expect(negativeDataset.borderColor).toBeDefined();
      expect(negativeDataset.backgroundColor).toBeDefined();
    });
  });
});
