import Validator from "../formValidator.js";
import { errorMessageControl } from "./formUtils.js";

export const showValidationErrorMessage = (inputId, validatorSchema, rest) => {
  const errorMessage = validateFormResponse(inputId, validatorSchema);
  return errorMessageControl(errorMessage, inputId, rest);
};

export const validateFormResponse = (inputId, validatorSchema) => {
  const value = document.getElementById(inputId).value;
  const validatorSchemaValues = validatorSchema[inputId];
  const validateResponse = Validator.validate(value, validatorSchemaValues);
  if (validateResponse === undefined) return "";
  return validateResponse;
};
