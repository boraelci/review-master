export interface HistoricalDataModelProps {
  positiveData: { date: string; count: number }[];
  negativeData: { date: string; count: number }[];
}

export class HistoricalDataModel {
  positiveData: { date: string; count: number }[];
  negativeData: { date: string; count: number }[];

  constructor(props: HistoricalDataModelProps) {
    this.positiveData = props.positiveData;
    this.negativeData = props.negativeData;
  }
}
