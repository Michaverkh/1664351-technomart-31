const appealLink = document.querySelector(".appeal-link");
const appealPopup = document.querySelector(".appeal");
const appealClose = appealPopup.querySelector(".close-button");
const appealForm = appealPopup.querySelector(".appeal-form");
const appealLogin = appealPopup.querySelector(".your-name");
const appealEmail = appealPopup.querySelector(".your-email");

appealLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  appealPopup.classList.add("modal-show");
  appealLogin.focus();
});

appealClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  appealPopup.classList.remove("modal-show");
  appealPopup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (appealPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        appealPopup.classList.remove("modal-show");
        loginPopup.classList.remove("modal-error");
      }
    }
  });

  appealForm.addEventListener("submit", function (evt) {
    if (!appealLogin.value || !appealEmail.value) {
      evt.preventDefault();
      appealPopup.classList.remove("modal-error");
      appealPopup.offsetWidth = appealPopup.offsetWidth;
      appealPopup.classList.add("modal-error");
    } 
  });
  