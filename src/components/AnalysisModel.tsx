import { formatDate } from './DateUtils';

/**
 * Review interface defining the structure of a single review analysis.
 */
export type Review = {
  reviewId: string;
  date: string;
  stars: string;
  generalSentiment: string;
  positiveCategories: string[];
  negativeCategories: string[];
};

/**
 * AnalysisModel class for handling and validating review analyses.
 * Loads JSON data and provides access to the formatted review analysis data.
 */
export class AnalysisModel {
  public reviews: Review[] = [];

  /**
   * Initialize the AnalysisModel with JSON data.
   *
   * @param jsonData - JSON data in either string or object format.
   */
  constructor(jsonData: string | object) {
    this.loadJson(jsonData);
  }

  /**
   * Load and parse JSON data, validate and format the review analyses.
   *
   * @param jsonData - JSON data in either string or object format.
   */
  public loadJson(jsonData: string | object): void {
    let parsedData: any;

    if (typeof jsonData === 'string') {
      parsedData = JSON.parse(jsonData);
    } else if (typeof jsonData === 'object') {
      parsedData = jsonData;
    } else {
      throw new Error('Invalid input: Expected JSON string or object');
    }

    if (parsedData && parsedData.analysis) {
      this.reviews = parsedData.analysis.map((item: Review) => {
        this.validateReviewAnalysis(item);
        const formattedDate = this.getDate(item.date);
        return {
          reviewId: item.reviewId,
          date: formattedDate,
          stars: item.stars,
          generalSentiment: item.generalSentiment,
          positiveCategories: item.positiveCategories,
          negativeCategories: item.negativeCategories,
        };
      });
      this.sortByDate();
    } else {
      throw new Error('Invalid JSON: Missing "analysis" property');
    }
  }

  /**
   * Validate that a review analysis has all the required properties.
   *
   * @param item - The review analysis item to validate.
   */
  public validateReviewAnalysis(item: Review): void {
    const requiredFields = [
      'reviewId',
      'date',
      'stars',
      'generalSentiment',
      'positiveCategories',
      'negativeCategories',
    ];

    requiredFields.forEach((field) => {
      if (!item.hasOwnProperty(field)) {
        throw new Error(
          `Invalid JSON: Missing "${field}" property in ReviewAnalysis object`,
        );
      }
    });
  }

  /**
   * Convert a date string into a formatted date string in MM/DD/YYYY format.
   *
   * @param dateString - The date string to convert.
   * @returns The formatted date string.
   */
  public getDate(dateString: string): string {
    const dateObj = new Date(dateString);

    if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date format: ' + dateString);
    }

    return formatDate(dateObj);
  }

  /**
   * Sort the review analyses by date.
   */
  public sortByDate(): void {
    this.reviews.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });
  }

  /**
   * Get the formatted review analysis data.
   *
   * @returns An array of formatted review analyses.
   */
  get analysis(): Review[] {
    return this.reviews;
  }
}
