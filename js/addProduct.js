const buyProduct = document.querySelector(".buy");
const modalBuy = document.querySelector(".section-message");
const modalClose = modalBuy.querySelector(".modal-close");


buyProduct.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalBuy.classList.add("modal-show");
});

modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalBuy.classList.remove("modal-show");
});
