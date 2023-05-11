import { StarsStatisticalModel } from '../..';

describe('StarsStatisticalModel', () => {
  it('should initialize correctly', () => {
    const model = new StarsStatisticalModel(4, 4, 1, 3, 4, 1);

    expect(model.mean).toBe(4);
    expect(model.median).toBe(4);
    expect(model.standardDeviation).toBe(1);
    expect(model.lowerQuartile).toBe(3);
    expect(model.upperQuartile).toBe(4);
    expect(model.interquartileRange).toBe(1);
  });

  it('should serialize and deserialize correctly', () => {
    const model = new StarsStatisticalModel(4, 4, 1, 3, 4, 1);
    const jsonString = model.toJSONString();

    expect(jsonString).toBe(
      '{"mean":4,"median":4,"standardDeviation":1,"lowerQuartile":3,"upperQuartile":4,"interquartileRange":1}',
    );

    const deserializedModel = StarsStatisticalModel.fromJSONString(jsonString);
    expect(deserializedModel).toEqual(model);
  });
});
