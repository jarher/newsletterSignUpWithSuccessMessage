export const containersTransitions = (firstContainer, secondContainer) => {
  firstContainer.style.opacity = 0;
  setTimeout(() => {
    secondContainer.style.display = "flex";
    firstContainer.style.display = "none";
    setTimeout(() => {
      secondContainer.style.opacity = 1;
    }, 200);
  }, 400);
};
