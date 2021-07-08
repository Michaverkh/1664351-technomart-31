const buyButtons = document.querySelectorAll(".buy-button");
const noticePopup = document.querySelector(".notice-window");
const noticeClose = noticePopup.querySelector(".close-button");

buyButtons.forEach(function(item){
    item.addEventListener("click", function (evt) {
    evt.preventDefault();
    noticePopup.classList.add("modal-show");
    });
});

noticeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  noticePopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (noticePopup.classList.contains("modal-show")) {
      evt.preventDefault();
      noticePopup.classList.remove("modal-show");
    }
  }
});