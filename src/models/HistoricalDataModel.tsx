export interface HistoricalDataModelProps {
  readonly positiveMonthToCount: { [key: string]: number };
  readonly negativeMonthToCount: { [key: string]: number };
}

export class HistoricalDataModel {
  readonly positiveMonthToCount: { [key: string]: number };
  readonly negativeMonthToCount: { [key: string]: number };

  constructor(props: HistoricalDataModelProps) {
    this.positiveMonthToCount = props.positiveMonthToCount;
    this.negativeMonthToCount = props.negativeMonthToCount;
  }
}
