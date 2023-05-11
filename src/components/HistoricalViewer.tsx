import { AnalysisModel, Review } from './AnalysisModel';
import {
  negativeBackgroundColor,
  negativeBorderColor,
  positiveBackgroundColor,
  positiveBorderColor,
} from './ColorPalette';
import { formatDate } from './DateUtils';

/**
 * Represents the period of time for aggregating reviews.
 */
type TimeOption = 'day' | 'week' | 'month';

/**
 * Represents aggregated category data.
 */
type ChartData = {
  labels: string[];
  positive: number[];
  negative: number[];
};

/**
 * Represents data in the format required by Chart.js.
 */
type ChartJSData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
};

/**
 * HistoricalViewer class is responsible for visualizing review analyses data
 * over a specific period of time (day, week, or month). It aggregates the data,
 * converts it to the format required by ChartJS, and provides the necessary
 * options for rendering the chart.
 *
 * @example
 * const analysisModel = new AnalysisModel(jsonData);
 * const historicalViewer = new HistoricalViewer(analysisModel, 'month');
 * const { options, data } = historicalViewer.getOptionsAndData();
 * // Render the chart using ChartJS with provided options and data
 */
export class HistoricalViewer {
  public analysisModel: AnalysisModel;
  public timeOption: TimeOption;

  /**
   * Constructs a HistoricalViewer instance.
   *
   * @param {AnalysisModel} analysisModel - An instance of AnalysisModel containing review analyses data.
   * @param {TimeOption} timeOption - The period of time for aggregating data ('day', 'week', or 'month').
   */
  constructor(analysisModel: AnalysisModel, timeOption: TimeOption) {
    this.analysisModel = analysisModel;
    this.timeOption = timeOption;
  }

  /**
   * Returns the options and data needed for rendering a ChartJS chart.
   *
   * @returns {object} An object containing chart options and data formatted for ChartJS.
   */
  public getOptionsAndData(): { options: any; data: ChartJSData } {
    const chartData = this.aggregateData();
    const chartJSData = this.convertToChartJSData(chartData);

    const options = {
      responsive: true,
      plugins: {
        legend: { position: 'top' as const },
      },
      scales: {
        x: {
          title: { text: 'Date', display: true, font: { size: 14 } },
          ticks: { font: { size: 14 } },
        },
        y: {
          title: {
            text: 'Number of Reviews',
            display: true,
            font: { size: 14 },
          },
          ticks: { font: { size: 14 } },
        },
      },
    };

    return { options, data: chartJSData };
  }

  /**
   * Aggregates the review analyses data based on the timeOption.
   *
   * @returns {ChartData} An object containing labels and positive/negative review counts.
   */
  public aggregateData(): ChartData {
    const labels: string[] = [];
    const positive: number[] = [];
    const negative: number[] = [];

    const reviewsByDate: {
      [key: string]: { positive: number; negative: number };
    } = {};

    this.analysisModel.analysis.forEach((review: Review) => {
      const dateKey = this.getDateKey(review.date);

      if (!reviewsByDate[dateKey]) {
        reviewsByDate[dateKey] = { positive: 0, negative: 0 };
      }

      if (review.generalSentiment === 'Positive') {
        reviewsByDate[dateKey].positive++;
      } else if (review.generalSentiment === 'Negative') {
        reviewsByDate[dateKey].negative++;
      }
    });

    Object.entries(reviewsByDate).forEach(([dateKey, counts]) => {
      labels.push(dateKey);
      positive.push(counts.positive);
      negative.push(counts.negative);
    });

    return { labels, positive, negative };
  }

  /**
   * Generates a unique date key based on the timeOption. This can be 'day', 'week', or 'month'.
   *
   * @param {string} dateString - The date string to generate a key for.
   * @returns {string} A unique date key for the specified dateString.
   */
  public getDateKey(dateString: string): string {
    const dateObj = new Date(dateString);
    let key = '';

    switch (this.timeOption) {
      case 'day':
        key = dateString;
        break;
      case 'week':
        const weekStart = new Date(dateObj);
        weekStart.setDate(dateObj.getDate() - dateObj.getDay());
        key = 'Week of ' + formatDate(weekStart);
        break;
      case 'month':
        key =
          String(dateObj.getMonth() + 1).padStart(2, '0') +
          '/' +
          dateObj.getFullYear();
        break;
      default:
        throw new Error('Invalid time option: ' + this.timeOption);
    }
    return key;
  }

  /**
   * Converts aggregated ChartData to the format required by ChartJS.
   *
   * @param {ChartData} chartData - The aggregated data to be converted.
   * @returns {ChartJSData} The formatted data for rendering a ChartJS chart.
   */
  public convertToChartJSData(chartData: ChartData): ChartJSData {
    const labels = chartData.labels;
    const positiveDataset = {
      label: 'Positive',
      data: chartData.positive,
      borderColor: positiveBorderColor,
      backgroundColor: positiveBackgroundColor,
    };
    const negativeDataset = {
      label: 'Negative',
      data: chartData.negative,
      borderColor: negativeBorderColor,
      backgroundColor: negativeBackgroundColor,
    };

    return {
      labels,
      datasets: [positiveDataset, negativeDataset],
    };
  }
}
