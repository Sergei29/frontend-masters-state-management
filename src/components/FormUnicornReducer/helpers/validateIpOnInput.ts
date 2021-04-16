import { ObjValidatonType } from "../types/types";

export const objRegex = {
  ipAddress: /^([0-9]{1,3}\.){3}[0-9]{1,3}$/,
  numericOrDot: /^[0-9\.]+$/,
  numeric: /^[0-9]+$/,
};

export enum errorMessages {
  IP_INVALId = "Invalid IP address",
  PORT_INVALID = "Invalid port number",
}

export const validateIP = (strNewValue: string): ObjValidatonType => {
  const objValidation: ObjValidatonType = {
    bIsValid: true,
    strErrorMessage: "",
  };
  if (!objRegex.ipAddress.test(strNewValue) || strNewValue.length > 15) {
    objValidation.bIsValid = false;
    objValidation.strErrorMessage = errorMessages.IP_INVALId;
  }
  return objValidation;
};

export const validatePort = (strPortNumber: string): ObjValidatonType => {
  const objValidation: ObjValidatonType = {
    bIsValid: true,
    strErrorMessage: "",
  };
  const bIsNumeric = objRegex.numeric.test(strPortNumber);
  const bIsPortNumber = +strPortNumber >= 0 && +strPortNumber <= 65353;

  if (!bIsNumeric || !bIsPortNumber) {
    objValidation.bIsValid = false;
    objValidation.strErrorMessage = errorMessages.PORT_INVALID;
  }

  return objValidation;
};

export const filterIPCharacters = (strValue: string) => {
  const strLastChar = strValue.slice(-1);
  if (!objRegex.numericOrDot.test(strLastChar)) {
    return strValue.slice(0, strValue.length - 1);
  }
  return strValue;
};

export const filterPortCharcters = (strValue: string) => {
  const strLastChar = strValue.slice(-1);
  const strPrevValue = strValue.slice(0, strValue.length - 1);
  if (false === objRegex.numeric.test(strLastChar)) {
    return strPrevValue;
  }
  const bIsInteger = objRegex.numeric.test(strValue);
  const bIsInRange = +strValue >= 0 && +strValue <= 65353;
  return bIsInteger && bIsInRange ? strValue : strPrevValue;
};
