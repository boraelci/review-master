import React from 'react';
import { AnalysisModel } from './AnalysisModel';
import { StarsStatisticalModel } from './StarsStatisticalModel';

/**
 * A class for visualizing the review analysis data in a tabular format.
 */
export class StarsViewer {
  public analysisModel: AnalysisModel;
  public starsStatisticalModel: StarsStatisticalModel;

  /**
   * Creates a new StarsViewer instance.
   *
   * @param analysisModel - An instance of the AnalysisModel class containing review analysis data.
   */
  constructor(analysisModel: AnalysisModel) {
    this.analysisModel = analysisModel;
    this.starsStatisticalModel = this.getData();
  }

  /**
   * Calculates the mean (average) of the star ratings.
   *
   * @returns The mean of the star ratings.
   */
  public mean(): number {
    const totalStars = this.analysisModel.analysis.reduce(
      (sum, review) => sum + parseFloat(review.stars),
      0,
    );
    return totalStars / this.analysisModel.analysis.length;
  }

  /**
   * Calculates the median (middle value) of the star ratings.
   *
   * @returns The median of the star ratings.
   */
  public median(): number {
    const sortedStars = this.analysisModel.analysis
      .map((review) => parseFloat(review.stars))
      .sort((a, b) => a - b);
    const mid = Math.floor(sortedStars.length / 2);

    return sortedStars.length % 2 === 0
      ? (sortedStars[mid - 1] + sortedStars[mid]) / 2
      : sortedStars[mid];
  }

  /**
   * Calculates the standard deviation of the star ratings.
   *
   * @returns The standard deviation of the star ratings.
   */
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

  /**
   * Calculates the quartiles of the star ratings.
   *
   * @returns An object containing the lower quartile (Q1), upper quartile (Q3),
   * and interquartile range (IQR) of the star ratings.
   */
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

  /**
   * Retrieves the StarsStatisticalModel instance with calculated statistical data.
   *
   * @returns A StarsStatisticalModel instance.
   */
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

  /**
   * Creates a table element for displaying the statistical data of the star ratings.
   *
   * @returns A JSX.Element representing a table with statistical data.
   */
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
