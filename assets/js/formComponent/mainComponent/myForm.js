import {
  addHandler,
  blurEventHandler,
  submitEventHandler,
} from "../utils/eventHandlers.js";
import { assignInputValue } from "../utils/formUtils.js";

export const formValidation = ({
  initialValues,
  validatorSchema,
  formEvents,
  ...rest
}) => {
  const initialValuesKeys = Object.keys(initialValues);
  //store validation state.
  //if input value is wrong sets isInvalid to true, otherwise will be to false
  //get each input id value.
  //asign input value validation states
  const hasErrors = initialValuesKeys.map((key) => {
    assignInputValue(key, initialValues);
    return {
      inputId: key,
      isInvalid: false,
    };
  });

  const eventValidatorProps = {
    initialValuesKeys,
    validatorSchema,
    hasErrors,
    rest,
  };

  formEvents = formEvents.map((object) => ({
    ...object,
    handler:
      object.eventType === "blur" ? blurEventHandler : submitEventHandler,
    eventValidatorProps,
  }));

  formEvents.forEach((formEventsObject) => addHandler(formEventsObject));
};
