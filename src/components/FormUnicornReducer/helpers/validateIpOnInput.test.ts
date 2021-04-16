import {
  validateIP,
  validatePort,
  errorMessages,
  filterIPCharacters,
  filterPortCharcters,
} from "./validateIpOnInput";

describe("validateIP", () => {
  it("should return true if complete IP address valid", () => {
    const objExpected = {
      bIsValid: true,
      strErrorMessage: "",
    };
    const strNewValue = "11.11.11.112";
    const objReceived = validateIP(strNewValue);

    expect(objReceived).toEqual(objExpected);
  });

  it("should return false if complete IP address invalid", () => {
    const objExpected = {
      bIsValid: false,
      strErrorMessage: errorMessages.IP_INVALId,
    };
    const strNewValue = "11.11.1a.112";
    const objReceived = validateIP(strNewValue);

    expect(objReceived).toEqual(objExpected);
  });

  it("should return false if field value is longer than 15", () => {
    const objExpected = {
      bIsValid: false,
      strErrorMessage: errorMessages.IP_INVALId,
    };
    const strNewValue = "11.11.11.112.113";
    const objReceived = validateIP(strNewValue);

    expect(objReceived).toEqual(objExpected);
  });
});

describe("validatePort", () => {
  it("should return true if port number valid", () => {
    const objExpected = {
      bIsValid: true,
      strErrorMessage: "",
    };
    const strNewValue = "2444";
    const objReceived = validatePort(strNewValue);

    expect(objReceived).toEqual(objExpected);
  });

  it("should return true if port number is invalid not numeric", () => {
    const objExpected = {
      bIsValid: false,
      strErrorMessage: errorMessages.PORT_INVALID,
    };
    const strNewValue = "244a";
    const objReceived = validatePort(strNewValue);

    expect(objReceived).toEqual(objExpected);
  });

  it("should return true if port number is invalid out of range", () => {
    const objExpected = {
      bIsValid: false,
      strErrorMessage: errorMessages.PORT_INVALID,
    };
    const strNewValue = "65600";
    const objReceived = validatePort(strNewValue);

    expect(objReceived).toEqual(objExpected);
  });
});

describe("filterIPCharacters", () => {
  it("should filter out if character is not numeric or dot", () => {
    const strValue = "12a";
    const strExpected = "12";
    const strReceived = filterIPCharacters(strValue);

    expect(strReceived).toEqual(strExpected);
  });

  it("should not filter out if char is numeric", () => {
    const strValue = "122";
    const strExpected = "122";
    const strReceived = filterIPCharacters(strValue);

    expect(strReceived).toEqual(strExpected);
  });

  it("should not filter out if char is dot", () => {
    const strValue = "12.";
    const strExpected = "12.";
    const strReceived = filterIPCharacters(strValue);

    expect(strReceived).toEqual(strExpected);
  });
});

describe("filterPortCharcters", () => {
  it("should filter out non numeric", () => {
    const strValue = "12a";
    const strExpected = "12";
    const strReceived = filterPortCharcters(strValue);

    expect(strReceived).toEqual(strExpected);
  });

  it("should not filter out non numeric", () => {
    const strValue = "123";
    const strExpected = "123";
    const strReceived = filterPortCharcters(strValue);

    expect(strReceived).toEqual(strExpected);
  });

  it("should filter out numerics when out of range 0-65353", () => {
    const strValue = "65359";
    const strExpected = "6535";
    const strReceived = filterPortCharcters(strValue);

    expect(strReceived).toEqual(strExpected);
  });
});
