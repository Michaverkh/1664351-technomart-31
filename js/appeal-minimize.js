const appealLink = document.querySelector(".appeal-link"),
    appealPopup = document.querySelector(".appeal"),
    appealClose = appealPopup.querySelector(".close-button"),
    appealForm = appealPopup.querySelector(".appeal-form"),
    appealLogin = appealPopup.querySelector(".your-name"),
    appealEmail = appealPopup.querySelector(".your-email");
appealLink.addEventListener("click", function(e) { e.preventDefault(), appealPopup.classList.add("modal-show"), appealLogin.focus() }), appealClose.addEventListener("click", function(e) { e.preventDefault(), appealPopup.classList.remove("modal-show"), appealPopup.classList.remove("modal-error") }), window.addEventListener("keydown", function(e) { 27 === e.keyCode && appealPopup.classList.contains("modal-show") && (e.preventDefault(), appealPopup.classList.remove("modal-show"), loginPopup.classList.remove("modal-error")) }), appealForm.addEventListener("submit", function(e) { appealLogin.value && appealEmail.value || (e.preventDefault(), appealPopup.classList.remove("modal-error"), appealPopup.offsetWidth = appealPopup.offsetWidth, appealPopup.classList.add("modal-error")) });