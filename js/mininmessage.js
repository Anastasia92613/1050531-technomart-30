const messageLink = document.querySelector(".button-contact-company"),
    messagePopup = document.querySelector(".form-letter"),
    messageClose = messagePopup.querySelector(".modal-close"),
    messageForm = messagePopup.querySelector(".message-form"),
    loginName = messagePopup.querySelector(".input-name-login"),
    loginEmail = messagePopup.querySelector(".input-name-email"),
    message = messagePopup.querySelector(".message-text");

let isStorageSupport = !0,
    storageLogin = "",
    storageEmail = "";
try {
    storageLogin = localStorage.getItem("login"),
        storageEmail = localStorage.getItem("email")
} catch (e) {
    isStorageSupport = !1
}

messageLink.addEventListener("click", function(e) {
        e.preventDefault(),
            messagePopup.classList.add("modal-show"),

            storageLogin || storageEmail ? (loginName.value = storageLogin, loginEmail.value = storageEmail, message.focus()) : loginName.focus()
    }),
    messageClose.addEventListener("click", function(e) {
        e.preventDefault(),
            messagePopup.classList.remove("modal-show"),
            messagePopup.classList.remove("modal-error")
    }),

    messageForm.addEventListener("submit", function(e) {

        loginName.value && loginEmail.value && message.value ? isStorageSupport && (localStorage.setItem("login", loginName.value),
            localStorage.setItem("email", loginEmail.value)) : (e.preventDefault(), messagePopup.classList.add("modal-error"),
            loginPopup.offsetWidth = loginPopup.offsetWidth,
            messagePopup.classList.remove("modal-error"))
    }),

    window.addEventListener("keydown", function(e) {
        27 === e.keyCode && messagePopup.classList.contains("modal-show") && (e.preventDefault(),
            messagePopup.classList.remove("modal-show"),
            messagePopup.classList.remove("modal-error")
        )
    });
