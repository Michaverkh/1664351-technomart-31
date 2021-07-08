const mapLink = document.querySelector(".button-map"),
    mapPopup = document.querySelector(".map-wrapper"),
    mapClose = mapPopup.querySelector(".close-button");
mapLink.addEventListener("click", function(e) { e.preventDefault(), mapPopup.classList.add("modal-show") }), mapClose.addEventListener("click", function(e) { e.preventDefault(), mapPopup.classList.remove("modal-show") }), window.addEventListener("keydown", function(e) { 27 === e.keyCode && mapPopup.classList.contains("modal-show") && (e.preventDefault(), mapPopup.classList.remove("modal-show")) });