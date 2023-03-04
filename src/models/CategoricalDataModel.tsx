export interface CategoricalDataModelProps {
  readonly positiveCategoryToCount: { [key: string]: number };
  readonly negativeCategoryToCount: { [key: string]: number };
}

export class CategoricalDataModel {
  readonly positiveCategoryToCount: { [key: string]: number };
  readonly negativeCategoryToCount: { [key: string]: number };

  constructor(props: CategoricalDataModelProps) {
    this.positiveCategoryToCount = props.positiveCategoryToCount;
    this.negativeCategoryToCount = props.negativeCategoryToCount;
  }
}
