const slider = document.querySelector(".slider"),
    oneButton = document.querySelector(".one-button"),
    twoButton = document.querySelector(".two-button"),
    oneSlider = document.querySelector(".one-slider"),
    twoSlider = document.querySelector(".two-slider"),
    arrowLeft = document.querySelector(".arrow-left"),
    arrowRight = document.querySelector(".arrow-right");

twoButton.addEventListener("click", function(e) {
        e.preventDefault(), twoButton.classList.add("active-button"),
            oneButton.classList.remove("active-button"),
            slider.classList.add("wrapper-2"),
            slider.classList.remove("wrapper-1"),
            oneSlider.classList.add("slide"),
            twoSlider.classList.remove("slide")
    }),

    oneButton.addEventListener("click", function(e) {
        e.preventDefault(),
            twoButton.classList.remove("active-button"),
            oneButton.classList.add("active-button"),
            slider.classList.remove("wrapper-2"),
            slider.classList.add("wrapper-1"),
            oneSlider.classList.remove("slide"),
            twoSlider.classList.add("slide")
    }),

    arrowRight.addEventListener("click", function(e) {
        e.preventDefault(),
            twoButton.classList.add("active-button"),
            oneButton.classList.remove("active-button"),
            slider.classList.add("wrapper-2"),
            slider.classList.remove("wrapper-1"),
            oneSlider.classList.add("slide"),
            twoSlider.classList.remove("slide")
    }),

    arrowLeft.addEventListener("click", function(e) {
        e.preventDefault(),
            twoButton.classList.remove("active-button"),
            oneButton.classList.add("active-button"),
            slider.classList.remove("wrapper-2"),
            slider.classList.add("wrapper-1"),
            oneSlider.classList.remove("slide"),
            twoSlider.classList.add("slide")
    });
