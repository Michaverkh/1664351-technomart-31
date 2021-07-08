const deliveryButton = document.querySelector(".service-button--delivery-button");
const guaranteeButton = document.querySelector(".service-button--guarantee-button");
const creditButton = document.querySelector(".service-button--credit-button");
const serviceButtons = document.querySelectorAll(".service-button");
const deliveryItem = document.querySelector(".delivery-item");
const guaranteeItem = document.querySelector(".guarantee-item");
const creditItem = document.querySelector(".credit-item");
const serviceItem = document.querySelectorAll(".service-item");

serviceButtons.forEach(function(item){
    item.addEventListener("click", function(){
        serviceButtons.forEach(function(item) {
          item.classList.remove("active")
        })
        item.classList.add("active")
    })
})

deliveryButton.addEventListener("click", function(){
    serviceItem.forEach(function(part){
        part.classList.add("visually-hidden")
    });
    deliveryItem.classList.remove("visually-hidden");
});

guaranteeButton.addEventListener("click", function(){
    serviceItem.forEach(function(part){
        part.classList.add("visually-hidden")
    });
    guaranteeItem.classList.remove("visually-hidden");
});

creditButton.addEventListener("click", function(){
    serviceItem.forEach(function(part){
        part.classList.add("visually-hidden")
    });
    creditItem.classList.remove("visually-hidden");
});