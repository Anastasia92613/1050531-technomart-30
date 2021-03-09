const mapLink = document.querySelector(".map-link"),
    mapPopup = document.querySelector(".modal-map"),
    mapClose = mapPopup.querySelector(".modal-close");
mapLink.addEventListener("click", function(e) {
        e.preventDefault(), mapPopup.classList.add("modal-show")
    }),
    mapClose.addEventListener("click", function(e) {
        e.preventDefault(), mapPopup.classList.remove("modal-show")
    }), window.addEventListener("keydown", function(e) {
        27 === e.keyCode && mapPopup.classList.contains("modal-show") && (e.preventDefault(),
            mapPopup.classList.remove("modal-show"))
    });
