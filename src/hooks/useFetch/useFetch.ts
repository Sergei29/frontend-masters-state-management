import { useState, useEffect } from "react";
import axios from "axios";

/**
 * @description custom hook to fetch data
 * @param {String} strUrl api endpoint
 * @returns {Object} fetching status: data,loading, error
 */
const useFetch = (strUrl: string) => {
  const [objData, setData] = useState<Record<string, any>>({});
  const [bLoading, setBLoading] = useState<boolean>(false);
  const [strError, setStrError] = useState<string>("");

  /**
   * @description fetch data on mount.
   * @returns {undefined} sets local state with fetch results
   */
  useEffect(() => {
    let bWillUnmount = false;

    const funchFetchData = async () => {
      setBLoading(true);
      try {
        const { data } = await axios.get(strUrl);
        if (!bWillUnmount) {
          setBLoading(false);
          setStrError("");
          setData(() => data);
        }
      } catch (error) {
        const strMessage = error.message ? error.message : "Failed to fetch.";

        if (!bWillUnmount) {
          setBLoading(false);
          setStrError(strMessage);
        }
      }
    };

    funchFetchData();

    //cleanup:
    return () => {
      bWillUnmount = true;
    };
  }, [strUrl]);

  return { objData, bLoading, strError };
};

export default useFetch;
