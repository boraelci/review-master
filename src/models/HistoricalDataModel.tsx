import { DataModel } from '.';

export interface HistoricalDataModelProps {
  readonly positiveMonthToCount: { [key: string]: number };
  readonly negativeMonthToCount: { [key: string]: number };
}

export class HistoricalDataModel implements DataModel {
  readonly positiveCount: { [key: string]: number };
  readonly negativeCount: { [key: string]: number };

  constructor(props: HistoricalDataModelProps) {
    this.positiveCount = props.positiveMonthToCount;
    this.negativeCount = props.negativeMonthToCount;
  }
}
