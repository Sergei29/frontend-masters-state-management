import generatePages, { Spill } from "./generatePages";

const { LEFT_SPILL, RIGHT_SPILL } = Spill;

const arrExpectedWithinRange = [1, 2, 3, 4, 5];
const arrExpectedPage2 = [1, 2, 3, 4, 5, RIGHT_SPILL, 12];
const arrExpectedPage3 = [1, LEFT_SPILL, 2, 3, 4, 5, 6, RIGHT_SPILL, 12];
const arrExpectedPage7 = [1, LEFT_SPILL, 6, 7, 8, 9, 10, RIGHT_SPILL, 12];
const arrExpectedPage8 = [1, LEFT_SPILL, 7, 8, 9, 10, 11, RIGHT_SPILL, 12];
const arrExpectedPage10 = [1, LEFT_SPILL, 8, 9, 10, 11, 12];

describe("generatePages", () => {
  it("should generate all pages if within the total range", () => {
    const arrReceived = generatePages(3, 22, 5, 5);

    expect(arrReceived).toEqual(arrExpectedWithinRange);
  });

  it("should generate pages when current page near start", () => {
    const arrReceived = generatePages(2, 58, 5, 5);

    expect(arrReceived).toEqual(arrExpectedPage2);
  });

  it("should generate pages when current page near middle - 3", () => {
    const arrReceived = generatePages(3, 58, 5, 5);
    expect(arrReceived).toEqual(arrExpectedPage3);
  });

  it("should generate pages when current page near middle - 7", () => {
    const arrReceived = generatePages(7, 58, 5, 5);

    expect(arrReceived).toEqual(arrExpectedPage7);
  });

  it("should generate pages when current page near end - 8", () => {
    const arrReceived = generatePages(8, 58, 5, 5);

    expect(arrReceived).toEqual(arrExpectedPage8);
  });

  it("should generate pages when current page near end", () => {
    const arrReceived = generatePages(10, 58, 5, 5);

    expect(arrReceived).toEqual(arrExpectedPage10);
  });
});
