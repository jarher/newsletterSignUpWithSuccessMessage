import { changeState } from "./formState.js";
import { resetValues } from "./formUtils.js";

export const addHandler = ({
  eventType,
  element,
  handler,
  eventValidatorProps,
}) => {
  const handlerProps = {
    eventType,
    element,
    initialValuesKeys: eventValidatorProps.initialValuesKeys,
    changeErrorStateProps: {
      validatorSchema: eventValidatorProps.validatorSchema,
      hasErrors: eventValidatorProps.hasErrors, // Use original array
      rest: eventValidatorProps.rest,
    },
  };
  handler(handlerProps);
};

export const submitEventHandler = ({
  eventType,
  element,
  initialValuesKeys,
  changeErrorStateProps,
}) => {
  // run validation if triggered submit event
  const { hasErrors, rest } = changeErrorStateProps;
  element.addEventListener(eventType, (e) => {
    e.preventDefault();
    initialValuesKeys.forEach((inputId) => {
      changeState(changeErrorStateProps, inputId);
    });
    resetValues(initialValuesKeys, hasErrors, rest);
  });
};

export const blurEventHandler = ({
  eventType,
  element,
  changeErrorStateProps,
}) => {
  //run validation if triggered blur event
  element.forEach((input) => {
    input.addEventListener(eventType, (e) => {
      const inputId = e.target.id;
      changeState(changeErrorStateProps, inputId);
    });
  });
};
