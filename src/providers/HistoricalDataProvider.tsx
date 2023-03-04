import { HistoricalDataModel } from '../models';

export class HistoricalDataProvider {
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

  getMonths() {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  }
}
