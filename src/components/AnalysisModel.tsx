import { formatDate } from './DateUtils';

export type Review = {
  reviewId: string;
  date: string;
  stars: string;
  generalSentiment: string;
  positiveCategories: string[];
  negativeCategories: string[];
};

export class AnalysisModel {
  public reviews: Review[] = [];

  constructor(jsonData: string | object) {
    this.loadJson(jsonData);
  }

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

  public getDate(dateString: string): string {
    const dateObj = new Date(dateString);

    if (isNaN(dateObj.getTime())) {
      throw new Error('Invalid date format: ' + dateString);
    }

    return formatDate(dateObj);
  }

  public sortByDate(): void {
    this.reviews.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });
  }

  get analysis(): Review[] {
    return this.reviews;
  }
}
