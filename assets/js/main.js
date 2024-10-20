import validate from "./formValidator.js";
import { buttonHandler } from "./utils/buttonEvent.js";
import elementsHtml from "./utils/elementsHtml.js";
import { containersTransitions } from "./utils/transition.js";

const { formValidation, resetValues } = validate;
//assign event to an html element.
const formEvents = ["submit", "blur"];

formValidation({
  initialValues: {
    emailForm: "",
  },
  validatorSchema: {
    emailForm: {
      type: "email",
      errors: {
        message: "Valid email required",
        required: "this field is required",
      },
    },
  },
  formEvents,
  errorOutputClass: "form-wrapper-error",
  formControlClass: "form-wrapper-invalid",
  onSubmit: () => {
    containersTransitions(
      elementsHtml.newsletter__container,
      elementsHtml.newsletter__message__container
    );
    resetValues();
  },
});

buttonHandler();
