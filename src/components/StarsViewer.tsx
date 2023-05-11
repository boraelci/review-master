import React from 'react';
import { AnalysisModel } from './AnalysisModel';
import { StarsStatisticalModel } from './StarsStatisticalModel';

export class StarsViewer {
  public analysisModel: AnalysisModel;
  public starsStatisticalModel: StarsStatisticalModel;

  constructor(analysisModel: AnalysisModel) {
    this.analysisModel = analysisModel;
    this.starsStatisticalModel = this.getData();
  }

  public mean(): number {
    const totalStars = this.analysisModel.analysis.reduce(
      (sum, review) => sum + parseFloat(review.stars),
      0,
    );
    return totalStars / this.analysisModel.analysis.length;
  }

  public median(): number {
    const sortedStars = this.analysisModel.analysis
      .map((review) => parseFloat(review.stars))
      .sort((a, b) => a - b);
    const mid = Math.floor(sortedStars.length / 2);

    return sortedStars.length % 2 === 0
      ? (sortedStars[mid - 1] + sortedStars[mid]) / 2
      : sortedStars[mid];
  }

  public standardDeviation(): number {
    const meanValue = this.mean();
    const variance =
      this.analysisModel.analysis.reduce(
        (sum, review) =>
          sum + Math.pow(parseFloat(review.stars) - meanValue, 2),
        0,
      ) / this.analysisModel.analysis.length;

    return Math.sqrt(variance);
  }

  public quartiles(): {
    lowerQuartile: number;
    upperQuartile: number;
    interquartileRange: number;
  } {
    const sortedStars = this.analysisModel.analysis
      .map((review) => parseFloat(review.stars))
      .sort((a, b) => a - b);
    const mid = Math.floor(sortedStars.length / 2);

    const q1 =
      sortedStars.length % 2 === 0
        ? (sortedStars[Math.floor(mid / 2) - 1] +
            sortedStars[Math.floor(mid / 2)]) /
          2
        : sortedStars[Math.floor(mid / 2)];
    const q3 =
      sortedStars.length % 2 === 0
        ? (sortedStars[mid + Math.floor(mid / 2) - 1] +
            sortedStars[mid + Math.floor(mid / 2)]) /
          2
        : sortedStars[mid + Math.floor(mid / 2)];

    const iqr = q3 - q1;
    return {
      lowerQuartile: q1,
      upperQuartile: q3,
      interquartileRange: iqr,
    };
  }

  public getData(): StarsStatisticalModel {
    const { lowerQuartile, upperQuartile, interquartileRange } =
      this.quartiles();
    return new StarsStatisticalModel(
      this.mean(),
      this.median(),
      this.standardDeviation(),
      lowerQuartile,
      upperQuartile,
      interquartileRange,
    );
  }

  public createTable(): JSX.Element {
    const data = this.starsStatisticalModel;

    return (
      <table className="table">
        <tbody>
          <tr>
            <th>Mean</th>
            <td>{data.mean.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Median</th>
            <td>{data.median.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Std Dev</th>
            <td>{data.standardDeviation.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Q1</th>
            <td>{data.lowerQuartile.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Q3</th>
            <td>{data.upperQuartile.toFixed(2)}</td>
          </tr>
          <tr>
            <th>IQR</th>
            <td>{data.interquartileRange.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
