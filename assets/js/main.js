import { formValidation } from "./formComponent/mainComponent/myForm.js";
import { buttonHandler } from "./utils/buttonEvent.js";
import elementsHtml from "./utils/elementsHtml.js";
import { containersTransitions } from "./utils/transition.js";

//assign event to an html element.
const formEvents = [
  {
    eventType: "submit",
    element: document.querySelector("form"),
  },
  {
    eventType: "blur",
    element: Array.from(document.querySelectorAll("input")),
  },
];

formValidation({
  initialValues: {
    emailForm: "",
  },
  validatorSchema: {
    emailForm: {
      type: "email",
      errors: {
        email: "Valid email required",
        required: "this field is required",
      },
    },
  },
  formEvents,
  errorOutputSelector: ".form-wrapper-error",
  formControlAttribute: "form-wrapper-invalid",
  onSubmit: () => {
    containersTransitions(
      elementsHtml.newsletter__container,
      elementsHtml.newsletter__message__container
    );
  },
});

buttonHandler();
