const listItemGoogle = document.querySelector("#Google");
console.log("🚀 ~ listItemGoogle", listItemGoogle);

const disableActiveElement = (element) => {
  element.classList.remove("listItemActive");
};

const enableActiveElement = (element) => {
  element.classList.add("listItemActive");
};

const isElementActive = (element) => {
  return element.classList.contains("listItemActive");
};

const switchListItemStatus = () => {
  if (isElementActive(listItemGoogle)) {
    // Activo
    disableActiveElement(listItemGoogle);
    return;
  }

  enableActiveElement(listItemGoogle);
};

listItemGoogle.addEventListener("click", () => {
  // 1. Switch List Item status
  switchListItemStatus();
});
