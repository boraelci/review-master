/**
 * A class representing the statistical data of the star ratings of reviews.
 */
export class StarsStatisticalModel {
  mean: number;
  median: number;
  standardDeviation: number;
  lowerQuartile: number;
  upperQuartile: number;
  interquartileRange: number;

  /**
   * Creates a new StarsStatisticalModel instance.
   *
   * @param mean - The mean (average) of the star ratings.
   * @param median - The median (middle value) of the star ratings.
   * @param standardDeviation - The standard deviation of the star ratings.
   * @param lowerQuartile - The lower quartile (Q1) of the star ratings.
   * @param upperQuartile - The upper quartile (Q3) of the star ratings.
   * @param interquartileRange - The interquartile range (IQR) of the star ratings.
   */
  constructor(
    mean: number,
    median: number,
    standardDeviation: number,
    lowerQuartile: number,
    upperQuartile: number,
    interquartileRange: number,
  ) {
    this.mean = mean;
    this.median = median;
    this.standardDeviation = standardDeviation;
    this.lowerQuartile = lowerQuartile;
    this.upperQuartile = upperQuartile;
    this.interquartileRange = interquartileRange;
  }

  /**
   * Converts the StarsStatisticalModel instance to a JSON string.
   *
   * @returns A JSON string representing the instance.
   */
  toJSONString(): string {
    return JSON.stringify(this);
  }

  /**
   * Creates a new StarsStatisticalModel instance from a JSON string.
   *
   * @param jsonString - A JSON string representing a StarsStatisticalModel instance.
   * @returns A new StarsStatisticalModel instance.
   */
  static fromJSONString(jsonString: string): StarsStatisticalModel {
    const json = JSON.parse(jsonString);
    return new StarsStatisticalModel(
      json.mean,
      json.median,
      json.standardDeviation,
      json.lowerQuartile,
      json.upperQuartile,
      json.interquartileRange,
    );
  }
}
