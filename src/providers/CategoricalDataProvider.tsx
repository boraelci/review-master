import { CategoricalDataModel } from '../models';
import { DataProvider } from '.';

/**
 * This class implements the DataProvider interface and provides methods
 * for getting categorical data and labels.
 */
export class CategoricalDataProvider implements DataProvider {
  /**
   * This method returns a new CategoricalDataModel instance with the
   * given positive and negative category counts.
   *
   * @returns {CategoricalDataModel} A new CategoricalDataModel instance.
   */
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

  /**
   * This method returns an array of category labels.
   *
   * @returns {string[]} An array of category labels.
   */
  getLabels() {
    return ['Cost', 'Quality', 'Durability', 'Effectiveness', 'Ease of use'];
  }
}
