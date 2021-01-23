import { useState, useCallback, useEffect } from "react";
import generatePages, {
  Spill,
} from "../../helpers/generatePages/generatePages";

type UsePaginationReturntype = {
  bPrevDisabled: boolean;
  bNextDisabled: boolean;
  intCurrentPage: number;
  funcGoToPage: (intPageNumber: number) => void;
  funcGoToNext: () => void;
  funcGoToPrev: () => void;
  generatePageButtons: () => (number | Spill)[];
};

/**
 * @description custom hook for paginator
 * @param {Number} intItemsPerPage number of items per page
 * @param {Number} intTotalItems total number of items
 * @param {Number} intMaxPages maximum number of consecuitive pages
 * @param {Function} funcCallback callback on page change
 * @returns {Object} pagination state and handler functions
 */
const usePagination = (
  intItemsPerPage: number,
  intTotalItems: number,
  intMaxPages: number,
  funcCallback: (intPage: number) => void
): UsePaginationReturntype => {
  /**
   * @description current page state
   */
  const [intCurrentPage, setIntCurrentPage] = useState<number>(1);
  const [bPrevDisabled, setBPrevDisabled] = useState<boolean>(true);
  const [bNextDisabled, setBNextDisabled] = useState<boolean>(false);

  /**
   * @description run callback on page change
   */
  useEffect(() => funcCallback(intCurrentPage), [intCurrentPage, funcCallback]);

  useEffect(() => {
    const intLastPage = Math.ceil(intTotalItems / intItemsPerPage);

    if (intCurrentPage === 1) {
      setBPrevDisabled(true);
      setBNextDisabled(false);
    } else if (intCurrentPage === intLastPage) {
      setBPrevDisabled(false);
      setBNextDisabled(true);
    } else {
      setBPrevDisabled(false);
      setBNextDisabled(false);
    }
  }, [intCurrentPage, intTotalItems, intItemsPerPage]);

  /**
   * @description navigate to page
   * @param {number} intPageNumber page number
   * @returns {undefined} sets state
   */
  const funcGoToPage = useCallback(
    (intPageNumber: number) => setIntCurrentPage(() => intPageNumber),
    []
  );

  /**
   * @description navigate to next page
   * @returns {undefined} sets state
   */
  const funcGoToNext = useCallback(() => funcGoToPage(intCurrentPage + 1), [
    funcGoToPage,
    intCurrentPage,
  ]);

  /**
   * @description navigate to previous page
   * @returns {undefined} sets state
   */
  const funcGoToPrev = useCallback(() => funcGoToPage(intCurrentPage - 1), [
    funcGoToPage,
    intCurrentPage,
  ]);

  /**
   * @description generate pages
   * @returns {Array} array of page values
   */
  const generatePageButtons = useCallback(
    () =>
      generatePages(
        intCurrentPage,
        intTotalItems,
        intItemsPerPage,
        intMaxPages
      ),
    [intCurrentPage, intTotalItems, intItemsPerPage, intMaxPages]
  );

  return {
    bPrevDisabled,
    bNextDisabled,
    intCurrentPage,
    funcGoToPage,
    funcGoToNext,
    funcGoToPrev,
    generatePageButtons,
  };
};

export default usePagination;
