const slider = document.querySelector(".slider");
const oneButton = document.querySelector(".one-button");
const twoButton = document.querySelector(".two-button");
const oneSlider = document.querySelector(".one-slider");
const twoSlider = document.querySelector(".two-slider");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

twoButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    twoButton.classList.add("active-button");
    oneButton.classList.remove("active-button");
    slider.classList.add("wrapper-2");
    slider.classList.remove("wrapper-1");
    oneSlider.classList.add("slide");
    twoSlider.classList.remove("slide");
});

oneButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    twoButton.classList.remove("active-button");
    oneButton.classList.add("active-button");
    slider.classList.remove("wrapper-2");
    slider.classList.add("wrapper-1");
    oneSlider.classList.remove("slide");
    twoSlider.classList.add("slide");
});

arrowRight.addEventListener("click", function(evt) {
    evt.preventDefault();
    twoButton.classList.add("active-button");
    oneButton.classList.remove("active-button");
    slider.classList.add("wrapper-2");
    slider.classList.remove("wrapper-1");
    oneSlider.classList.add("slide");
    twoSlider.classList.remove("slide");
});

arrowLeft.addEventListener("click", function(evt) {
    evt.preventDefault();
    twoButton.classList.remove("active-button");
    oneButton.classList.add("active-button");
    slider.classList.remove("wrapper-2");
    slider.classList.add("wrapper-1");
    oneSlider.classList.remove("slide");
    twoSlider.classList.add("slide");
});
