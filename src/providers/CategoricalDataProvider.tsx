import { CategoricalDataModel } from '../models';

export class CategoricalDataProvider {
  getData() {
    const positiveCategoryToCount: { [key: string]: number } = {
      Cost: 2,
      Quality: 9,
      Durability: 3,
      Effectiveness: 5,
      'Ease of use': 2,
    };

    const negativeCategoryToCount: { [key: string]: number } = {
      Cost: 9,
      Quality: 3,
      Durability: 5,
      Effectiveness: 2,
      'Ease of use': 1,
    };

    return new CategoricalDataModel({
      positiveCategoryToCount,
      negativeCategoryToCount,
    });
  }

  getLabels() {
    return ['Cost', 'Quality', 'Durability', 'Effectiveness', 'Ease of use'];
  }
}
