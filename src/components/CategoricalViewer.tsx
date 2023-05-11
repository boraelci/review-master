import { AnalysisModel, Review } from './AnalysisModel';
import {
  negativeBackgroundColor,
  negativeBorderColor,
  positiveBackgroundColor,
  positiveBorderColor,
} from './ColorPalette';

/**
 * Represents aggregated category data.
 */
type CategoryData = {
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
 * CategoricalViewer is a class for visualizing categorical review analysis data.
 * It processes the analysis data and formats it for use with Chart.js.
 */
export class CategoricalViewer {
  public analysisModel: AnalysisModel;

  /**
   * Creates a new CategoricalViewer instance.
   * @param {AnalysisModel} analysisModel - The analysis model containing review data.
   */
  constructor(analysisModel: AnalysisModel) {
    this.analysisModel = analysisModel;
  }

  /**
   * Returns the Chart.js options and formatted data.
   * @returns {{options: any, data: ChartJSData}} - The options and data for Chart.js.
   */
  public getOptionsAndData(): { options: any; data: ChartJSData } {
    const categoryData = this.aggregateData();
    const chartJSData = this.convertToChartJSData(categoryData);

    const options = {
      responsive: true,
      plugins: {
        legend: { position: 'top' as const },
      },
      scales: {
        r: {
          title: {
            text: 'Number of Reviews',
            display: true,
            font: { size: 14 },
          },
          pointLabels: { font: { size: 14 } },
        },
      },
    };

    return { options, data: chartJSData };
  }

  /**
   * Aggregates positive and negative category counts from the analysis model.
   * @returns {CategoryData} - The aggregated category data.
   */
  public aggregateData(): CategoryData {
    const categoryCounts: {
      [key: string]: { positive: number; negative: number };
    } = {};

    this.analysisModel.analysis.forEach((review: Review) => {
      review.positiveCategories.forEach((category) => {
        if (!categoryCounts[category]) {
          categoryCounts[category] = { positive: 0, negative: 0 };
        }
        categoryCounts[category].positive++;
      });

      review.negativeCategories.forEach((category) => {
        if (!categoryCounts[category]) {
          categoryCounts[category] = { positive: 0, negative: 0 };
        }
        categoryCounts[category].negative++;
      });
    });

    const labels = Object.keys(categoryCounts);
    const positive = labels.map((label) => categoryCounts[label].positive);
    const negative = labels.map((label) => categoryCounts[label].negative);

    return { labels, positive, negative };
  }

  /**
   * Converts the aggregated category data into the format required by Chart.js.
   * @param {CategoryData} categoryData - The aggregated category data.
   * @returns {ChartJSData} - The formatted data for Chart.js.
   */
  public convertToChartJSData(categoryData: CategoryData): ChartJSData {
    const labels = categoryData.labels;
    const positiveDataset = {
      label: 'Positive',
      data: categoryData.positive,
      borderColor: positiveBorderColor,
      backgroundColor: positiveBackgroundColor,
    };
    const negativeDataset = {
      label: 'Negative',
      data: categoryData.negative,
      borderColor: negativeBorderColor,
      backgroundColor: negativeBackgroundColor,
    };

    return {
      labels,
      datasets: [positiveDataset, negativeDataset],
    };
  }
}
