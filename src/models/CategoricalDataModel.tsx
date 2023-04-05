import { DataModel } from '.';

export interface CategoricalDataModelProps {
  readonly positiveCategoryToCount: { [key: string]: number };
  readonly negativeCategoryToCount: { [key: string]: number };
}

export class CategoricalDataModel implements DataModel {
  readonly positiveCount: { [key: string]: number };
  readonly negativeCount: { [key: string]: number };

  constructor(props: CategoricalDataModelProps) {
    this.positiveCount = props.positiveCategoryToCount;
    this.negativeCount = props.negativeCategoryToCount;
  }
}
