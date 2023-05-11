import { AnalysisModel, StarsViewer } from '../..';
import analysisResponse from '../../data/analysisResponse.json';

describe('StarsViewer', () => {
  const analysisModel = new AnalysisModel(analysisResponse);
  const starsViewer = new StarsViewer(analysisModel);

  it('should calculate mean correctly', () => {
    const mean = starsViewer.mean();
    expect(mean).toBeCloseTo(3.35);
  });

  it('should calculate median correctly', () => {
    const median = starsViewer.median();
    expect(median).toBe(3.5);
  });

  it('should calculate standard deviation correctly', () => {
    const stdDev = starsViewer.standardDeviation();
    expect(stdDev).toBeCloseTo(1.3048);
  });

  it('should calculate quartiles correctly', () => {
    const { lowerQuartile, upperQuartile, interquartileRange } =
      starsViewer.quartiles();
    expect(lowerQuartile).toBe(2);
    expect(upperQuartile).toBe(4.25);
    expect(interquartileRange).toBe(2.25);
  });

  it('should create table correctly', () => {
    const table = starsViewer.createTable();

    expect(table.props.className).toBe('table');
    expect(table.type).toBe('table');
  });
});
