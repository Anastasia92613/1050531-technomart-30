const delivery = document.querySelector(".label-delivery"),
    guarantee = document.querySelector(".label-guarantee"),
    credit = document.querySelector(".label-credit"),
    descriptionDelivery = document.querySelector(".description-delivery"),
    descriptionGuarantee = document.querySelector(".description-guarantee"),
    descriptionCredit = document.querySelector(".description-credit"),
    checkedDelivery = document.querySelector("#delivery"),
    checkedGuarantee = document.querySelector("#guarantee"),
    checkedCredit = document.querySelector("#credit");

delivery.addEventListener("click", function(e) {
        e.preventDefault(),
            descriptionDelivery.classList.remove("service-none"),
            descriptionGuarantee.classList.add("service-none"),
            descriptionCredit.classList.add("service-none"),
            checkedDelivery.checked = !0
    }),

    guarantee.addEventListener("click", function(e) {
        e.preventDefault(),
            descriptionGuarantee.classList.remove("service-none"),
            descriptionDelivery.classList.add("service-none"),
            descriptionCredit.classList.add("service-none"),
            checkedGuarantee.checked = !0
    }),

    credit.addEventListener("click", function(e) {
        e.preventDefault(),
            descriptionCredit.classList.remove("service-none"),
            descriptionDelivery.classList.add("service-none"),
            descriptionGuarantee.classList.add("service-none"),
            checkedCredit.checked = !0
    });
