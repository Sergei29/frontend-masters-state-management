import fillArrayOfIntegers from "./fillArrayOfIntegers";

export enum Spill {
  LEFT_SPILL = "LEFT_SPILL",
  RIGHT_SPILL = "RIGHT_SPILL",
}

/**
 * @description generate pages for paginator
 * @param {Number} intCurrentPage currently selected page
 * @param {Number} intTotalItems total number of items
 * @param {Number} intItemsPerPage amount of items per page
 * @param {Number} intMaxPages maximum number of pages allowed to show, example 5 : [1, '...', 6,7,8,9,10, '...', 19];
 * @returns {Array} array of numbers and string '...'
 */
const generatePages = (
  intCurrentPage: number,
  intTotalItems: number,
  intItemsPerPage: number = 10,
  intMaxPages: number = 5
) => {
  const { LEFT_SPILL, RIGHT_SPILL } = Spill;
  let arrResult: (number | Spill)[];
  let intStartPage: number, intEndPage: number;

  // calculate total pages:
  const intTotalPages = Math.ceil(intTotalItems / intItemsPerPage);

  // ensure current page isn't out of range:
  if (intCurrentPage < 1) {
    intCurrentPage = 1;
  } else if (intCurrentPage > intTotalPages) {
    intCurrentPage = intTotalPages;
  }

  if (intTotalPages <= intMaxPages) {
    // if total pages less than max - so show all pages:
    intStartPage = 1;
    intEndPage = intTotalPages;

    arrResult = fillArrayOfIntegers(intStartPage, intEndPage);
  } else {
    // if total pages more than max limit- then calculate based on current page:
    const intNeighboursLeft = Math.ceil(intMaxPages / 2);
    const intNeighboursRight = Math.floor(intMaxPages / 2);

    if (intCurrentPage < intNeighboursLeft) {
      // current page is near the start of array:

      intStartPage = 1;
      intEndPage = intMaxPages;
      const arrPages = fillArrayOfIntegers(intStartPage, intEndPage);

      arrResult = [...arrPages, RIGHT_SPILL, intTotalPages];
    } else if (intCurrentPage + intMaxPages > intTotalPages) {
      // current page is near the finish of the array:

      intStartPage = intTotalPages - intMaxPages;
      intEndPage = intTotalPages;

      const arrPages = fillArrayOfIntegers(intStartPage, intEndPage);

      arrResult = [1, LEFT_SPILL, ...arrPages];
    } else {
      // current page is somewhere in the middle of the array:

      intStartPage = intCurrentPage - intNeighboursLeft;
      intEndPage = intCurrentPage + intNeighboursRight;

      const arrPages = fillArrayOfIntegers(intStartPage, intEndPage);

      arrResult = [1, LEFT_SPILL, ...arrPages, RIGHT_SPILL, intTotalPages];
    }
  }

  return arrResult;
};

export default generatePages;
