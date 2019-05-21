const { assert } = require('chai');
const portalNameToPascalCase = require('../../app/helpers/portalNameToPascalCase');

describe('portalNameToPascalCase', () => {
  it('should convert ONE.TWO.THREE into OneTwoThree', () => {
    const result = portalNameToPascalCase('ONE.TWO.THREE');
    assert(result === 'OneTwoThree', result);
  });

  it('should convert ONE-TWO.THREE into OneTwoThree', () => {
    const result = portalNameToPascalCase('ONE-TWO.THREE-FOUR.FIVE');
    assert(result === 'OneTwoThreeFourFive', result);
  });
});
