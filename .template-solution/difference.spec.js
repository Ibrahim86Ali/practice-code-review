import { difference  } from './difference';

describe('README test', () => {
  it('should exculed a value from the second array ', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });
});
it('should not repeat return values  ', () => {
  expect(difference([1, 2, 1], [2, 3])).toEqual([1]);
});


