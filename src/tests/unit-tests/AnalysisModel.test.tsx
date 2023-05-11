import { AnalysisModel, Review } from '../..';
import analysisResponse from '../../data/analysisResponse.json';

describe('AnalysisModel', () => {
  let analysisModel: AnalysisModel;

  beforeEach(() => {
    analysisModel = new AnalysisModel(analysisResponse);
  });

  test('should load JSON data when passed as a string', () => {
    const jsonString = JSON.stringify(analysisResponse);
    const modelFromString = new AnalysisModel(jsonString);
    expect(modelFromString.analysis.length).toBe(10);
  });

  test('should throw an error for invalid JSON format', () => {
    const invalidJson = { invalidKey: 'invalidValue' };
    expect(() => new AnalysisModel(invalidJson)).toThrow(
      /Missing "analysis" property/,
    );
  });

  test('should throw an error for missing required fields in Review', () => {
    const invalidReviewJson = {
      analysis: [
        {
          reviewId: '1',
          stars: '4.5',
          generalSentiment: 'Positive',
        },
      ],
    };
    expect(() => new AnalysisModel(invalidReviewJson)).toThrow(
      /Missing "date" property/,
    );
  });

  test('should throw an error for invalid date format', () => {
    const invalidDateJson = {
      analysis: [
        {
          reviewId: '1',
          date: 'invalid-date',
          stars: '4.5',
          generalSentiment: 'Positive',
          positiveCategories: [],
          negativeCategories: [],
        },
      ],
    };
    expect(() => new AnalysisModel(invalidDateJson)).toThrow(
      /Invalid date format/,
    );
  });

  test('should sort reviews by date', () => {
    const sortedReviews: Review[] = analysisModel.analysis;
    for (let i = 0; i < sortedReviews.length - 1; i++) {
      const dateA = new Date(sortedReviews[i].date);
      const dateB = new Date(sortedReviews[i + 1].date);
      expect(dateA.getTime()).toBeLessThanOrEqual(dateB.getTime());
    }
  });
});
