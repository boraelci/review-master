import { HistoricalDataModel } from '../models';
import { DataProvider } from '.';

/**
 * This class implements the DataProvider interface and provides methods
 * for getting historical data and labels.
 */
export class HistoricalDataProvider implements DataProvider {
  /**
   * This method returns a new HistoricalDataModel instance with the
   * given positive and negative counts per month.
   *
   * @returns {HistoricalDataModel} A new HistoricalDataModel instance.
   */
  getData() {
    const positiveMonthToCount: { [key: string]: number } = {
      January: 10,
      February: 11,
      March: 9,
      April: 3,
      May: 2,
      June: 1,
      July: 1,
    };

    const negativeMonthToCount: { [key: string]: number } = {
      January: 1,
      February: 3,
      March: 5,
      April: 7,
      May: 9,
      June: 10,
      July: 12,
    };

    return new HistoricalDataModel({
      positiveMonthToCount,
      negativeMonthToCount,
    });
  }

  /**
   * This method returns an array of month labels.
   *
   * @returns {string[]} An array of month labels.
   */
  getLabels() {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  }
}
