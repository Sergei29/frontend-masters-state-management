import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import useFetch from "./useFetch";

const MOCK_AXIOS_PAYLOAD = { results: "test-response-data" };
const MOCK_AXIOS_ERROR_MSG = "Test Error Message";

describe("Custom hook useFetch", () => {
  let spyInstance: jest.SpyInstance;

  beforeAll(() => {
    spyInstance = jest.spyOn(axios, "get");
  });

  // runs after all tests have finished
  afterAll(() => {
    spyInstance.mockClear();
  });

  it("should handle the fetch success ", async () => {
    spyInstance.mockResolvedValueOnce({ data: MOCK_AXIOS_PAYLOAD });
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("test-url")
    );

    const objExpectedState = {
      objData: MOCK_AXIOS_PAYLOAD,
      bLoading: false,
      strError: "",
    };
    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current).toEqual(objExpectedState);
  });

  it("should handle the fetch failure", async () => {
    spyInstance.mockRejectedValueOnce(new Error(MOCK_AXIOS_ERROR_MSG));
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("test-url")
    );

    const objExpectedState = {
      objData: {},
      bLoading: false,
      strError: MOCK_AXIOS_ERROR_MSG,
    };
    await act(async () => {
      await waitForNextUpdate();
    });

    expect(result.current).toEqual(objExpectedState);
  });
});
