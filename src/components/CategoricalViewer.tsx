import { AnalysisModel, Review } from './AnalysisModel';
import {
  negativeBackgroundColor,
  negativeBorderColor,
  positiveBackgroundColor,
  positiveBorderColor,
} from './ColorPalette';

type CategoryData = {
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

export class CategoricalViewer {
  public analysisModel: AnalysisModel;

  constructor(analysisModel: AnalysisModel) {
    this.analysisModel = analysisModel;
  }

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
