const formContainer = document.querySelector(".formContainer");

const formOptions = document.querySelector(".formOptions");
const formContainerOpeners = document.querySelectorAll(".formOptions button");

formContainerOpeners.forEach((formContainerOpener) => {
  formContainerOpener.addEventListener("click", () => {
    displayFormContainer();
  });
});

function displayFormContainer() {
  formOptions.classList.add("close");
  formContainer.classList.add("active");
}
