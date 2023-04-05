/**
 * The DataProvider interface defines the required methods for a data provider
 * that retrieves data and corresponding labels.
 */
export interface DataProvider {
  /**
   * Retrieves data from the provider.
   *
   * @returns {any} Data from the provider.
   */
  getData(): any;

  /**
   * Retrieves an array of labels corresponding to the data.
   *
   * @returns {string[]} An array of labels.
   */
  getLabels(): string[];
}
