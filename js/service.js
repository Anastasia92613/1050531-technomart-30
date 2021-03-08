const delivery = document.querySelector(".label-delivery");
const guarantee = document.querySelector(".label-guarantee");
const credit = document.querySelector(".label-credit");
const descriptionDelivery = document.querySelector(".description-delivery");
const descriptionGuarantee = document.querySelector(".description-guarantee");
const descriptionCredit = document.querySelector(".description-credit");
const checkedDelivery = document.querySelector("#delivery");
const checkedGuarantee = document.querySelector("#guarantee");
const checkedCredit = document.querySelector("#credit");

delivery.addEventListener("click", function(evt) {
    evt.preventDefault();
    descriptionDelivery.classList.remove("service-none");
    descriptionGuarantee.classList.add("service-none");
    descriptionCredit.classList.add("service-none");
    checkedDelivery.checked = true;
});

guarantee.addEventListener("click", function(evt) {
    evt.preventDefault();
    descriptionGuarantee.classList.remove("service-none");
    descriptionDelivery.classList.add("service-none");
    descriptionCredit.classList.add("service-none");
    checkedGuarantee.checked = true;
});

credit.addEventListener("click", function(evt) {
    evt.preventDefault();
    descriptionCredit.classList.remove("service-none");
    descriptionDelivery.classList.add("service-none");
    descriptionGuarantee.classList.add("service-none");
    checkedCredit.checked = true;
});
