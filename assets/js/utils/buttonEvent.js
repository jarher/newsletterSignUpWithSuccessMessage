import elementsHtml from "./elementsHtml.js";
import { containersTransitions } from "./transition.js";

export const buttonHandler = () => {
  elementsHtml.newsletter_message_button.addEventListener("click", () =>
    containersTransitions(
      elementsHtml.newsletter__message__container,
      elementsHtml.newsletter__container
    )
  );
};
