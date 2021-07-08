const deliveryButton = document.querySelector(".service-button--delivery-button"),
    guaranteeButton = document.querySelector(".service-button--guarantee-button"),
    creditButton = document.querySelector(".service-button--credit-button"),
    serviceButtons = document.querySelectorAll(".service-button"),
    deliveryItem = document.querySelector(".delivery-item"),
    guaranteeItem = document.querySelector(".guarantee-item"),
    creditItem = document.querySelector(".credit-item"),
    serviceItem = document.querySelectorAll(".service-item");
serviceButtons.forEach(function(e) { e.addEventListener("click", function() { serviceButtons.forEach(function(e) { e.classList.remove("active") }), e.classList.add("active") }) }), deliveryButton.addEventListener("click", function() { serviceItem.forEach(function(e) { e.classList.add("visually-hidden") }), deliveryItem.classList.remove("visually-hidden") }), guaranteeButton.addEventListener("click", function() { serviceItem.forEach(function(e) { e.classList.add("visually-hidden") }), guaranteeItem.classList.remove("visually-hidden") }), creditButton.addEventListener("click", function() { serviceItem.forEach(function(e) { e.classList.add("visually-hidden") }), creditItem.classList.remove("visually-hidden") });