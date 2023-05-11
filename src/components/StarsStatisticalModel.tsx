export class StarsStatisticalModel {
  mean: number;
  median: number;
  standardDeviation: number;
  lowerQuartile: number;
  upperQuartile: number;
  interquartileRange: number;

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

  toJSONString(): string {
    return JSON.stringify(this);
  }

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
