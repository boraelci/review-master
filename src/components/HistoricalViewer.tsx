import { AnalysisModel, Review } from './AnalysisModel';
import {
  negativeBackgroundColor,
  negativeBorderColor,
  positiveBackgroundColor,
  positiveBorderColor,
} from './ColorPalette';
import { formatDate } from './DateUtils';

type TimeOption = 'day' | 'week' | 'month';

type ChartData = {
  labels: string[];
  positive: number[];
  negative: number[];
};

type ChartJSData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
};

export class HistoricalViewer {
  public analysisModel: AnalysisModel;
  public timeOption: TimeOption;

  constructor(analysisModel: AnalysisModel, timeOption: TimeOption) {
    this.analysisModel = analysisModel;
    this.timeOption = timeOption;
  }

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
