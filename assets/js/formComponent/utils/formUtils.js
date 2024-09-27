export const assignInputValue = (key, initialValues) => {
  document.getElementById(key).value = initialValues[key];
};

export const errorMessageControl = (errorMessage, id, rest) => {
  const { errorOutputSelector, formControlAttribute } = rest;
  const parentContainer = document.getElementById(id).parentElement;
  parentContainer.querySelector(errorOutputSelector).innerText = errorMessage;
  let isInvalidValue = errorMessage ? true : false;

  // include class attribute to input parent container in case of errors
  isInvalidValue
    ? parentContainer.classList.add(formControlAttribute)
    : parentContainer.classList.remove(formControlAttribute);
  // return changeErrorState(id, hasErrors, isInvalidValue);
  return isInvalidValue;
};

export const resetValues = (initialValuesKeys, hasErrors, rest) => {
  const { onSubmit } = rest;
  if (hasErrors.length > 0) {
    const hasInvalidValues = hasErrors
      .map((el) => el.isInvalid)
      .some((value) => value === true);

    if (!hasInvalidValues) {
      const inputValues = initialValuesKeys.map(
        (id) => document.getElementById(id).value
      );

      onSubmit(inputValues);
      initialValuesKeys.forEach(
        (id) => (document.getElementById(id).value = "")
      );
    }
  }
};
