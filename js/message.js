const messageLink = document.querySelector(".button-contact-company");
const messagePopup = document.querySelector(".form-letter");
const messageClose = messagePopup.querySelector(".modal-close");
const messageForm = messagePopup.querySelector(".message-form");
const loginName = messagePopup.querySelector(".input-name-login");
const loginEmail = messagePopup.querySelector(".input-name-email");
const message = messagePopup.querySelector(".message-text");

let isStorageSupport = true;
let storageLogin = "";
let storageEmail = "";

try {
    storageLogin = localStorage.getItem("login");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

messageLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    messagePopup.classList.add("modal-show");
    if (storageLogin || storageEmail) {
        loginName.value = storageLogin;
        loginEmail.value = storageEmail;
        message.focus();
    } else {
        loginName.focus();

    }

});

messageClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    messagePopup.classList.remove("modal-show");
    messagePopup.classList.remove("modal-error");
});

messageForm.addEventListener("submit", function(evt) {
    if (!loginName.value || !loginEmail.value || !message.value) {
        evt.preventDefault();
        messagePopup.classList.add("modal-error");
        loginPopup.offsetWidth = loginPopup.offsetWidth;
        messagePopup.classList.remove("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", loginName.value);
            localStorage.setItem("email", loginEmail.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (messagePopup.classList.contains("modal-show")) {
            evt.preventDefault();
            messagePopup.classList.remove("modal-show");
            messagePopup.classList.remove("modal-error");
        }
    }
});
