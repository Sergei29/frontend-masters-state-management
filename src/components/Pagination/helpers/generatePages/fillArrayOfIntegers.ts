/**
 * @description fills an array of ascending numbers
 * @param {Number} intStart from starting number
 * @param {Number} intEnd to ending number
 * @returns {Array} array of numbers
 */
const fillArrayOfIntegers = (intStart: number, intEnd: number): number[] => {
  const arrResult = [];
  for (let i = intStart; i <= intEnd; i++) {
    arrResult.push(i);
  }
  return arrResult;
};

export default fillArrayOfIntegers;
