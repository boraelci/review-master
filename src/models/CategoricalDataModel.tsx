export interface CategoricalDataModelProps {
  positiveData: { category: string; count: number }[];
  negativeData: { category: string; count: number }[];
}

export class CategoricalDataModel {
  positiveData: { category: string; count: number }[];
  negativeData: { category: string; count: number }[];

  constructor(props: CategoricalDataModelProps) {
    this.positiveData = props.positiveData;
    this.negativeData = props.negativeData;
  }
}
