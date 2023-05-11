import {
  AnalysisModel,
  CategoricalViewer,
  HistoricalViewer,
  StarsStatisticalModel,
  StarsViewer,
} from '../..';
import analysisResponse from '../../data/analysisResponse.json';

describe('Integration Tests', () => {
  let analysisModel: AnalysisModel;

  beforeEach(() => {
    analysisModel = new AnalysisModel(analysisResponse);
  });

  it('should create a HistoricalViewer with the correct AnalysisModel', () => {
    const historicalViewer = new HistoricalViewer(analysisModel, 'day');
    expect(historicalViewer.analysisModel).toEqual(analysisModel);
  });

  it('should create a CategoricalViewer with the correct AnalysisModel', () => {
    const categoricalViewer = new CategoricalViewer(analysisModel);
    expect(categoricalViewer.analysisModel).toEqual(analysisModel);
  });

  it('should create a StarsViewer with the correct AnalysisModel and StarsStatisticalModel', () => {
    const starsViewer = new StarsViewer(analysisModel);
    expect(starsViewer.analysisModel).toEqual(analysisModel);
    expect(starsViewer.starsStatisticalModel).toBeInstanceOf(
      StarsStatisticalModel,
    );
  });

  it('should generate the correct chart data for HistoricalViewer', () => {
    const historicalViewer = new HistoricalViewer(analysisModel, 'day');
    const { options, data } = historicalViewer.getOptionsAndData();
    expect(options).toBeDefined();
    expect(data).toBeDefined();
  });

  it('should generate the correct chart data for CategoricalViewer', () => {
    const categoricalViewer = new CategoricalViewer(analysisModel);
    const { options, data } = categoricalViewer.getOptionsAndData();
    expect(options).toBeDefined();
    expect(data).toBeDefined();
  });

  it('should generate the correct table for StarsViewer', () => {
    const starsViewer = new StarsViewer(analysisModel);
    const table = starsViewer.createTable();
    expect(table).toBeDefined();
  });
});
