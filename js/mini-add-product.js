const buyProduct = document.querySelectorAll(".buy"),
    modalBuy = document.querySelector(".section-message"),
    modalClose = modalBuy.querySelector(".modal-close");
buyProduct.forEach(function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault(), modalBuy.classList.add("modal-show")
        })
    }),
    modalClose.addEventListener("click", function(e) {
        e.preventDefault(), modalBuy.classList.remove("modal-show")
    });
