var buylink = document.querySelectorAll(".js-buy"),
    buy = document.querySelector(".window-basket"),
    closewindow = document.querySelector(".window-close"),
    linkcontacts = document.querySelector(".js-contacts"),
    contacts = document.querySelector(".window-message"),


    closecontacts = document.querySelector(".window-message-close"),
    maplink = document.querySelector(".js-map"),
    map = document.querySelector(".window-map"),
    closemap = document.querySelector(".window-close-map");

[].forEach.call(buylink, function(buylink) {
    buylink.addEventListener("click", function(event) {
        event.preventDefault();
        buy.classList.add("window-show");
    });
});
closewindow.addEventListener("click", function(event) {
    event.preventDefault();
    buy.classList.remove("window-show");
});
linkcontacts.addEventListener("click", function(event) {
    event.preventDefault();
    contacts.classList.add("window-show");
});
closecontacts.addEventListener("click", function(event) {
    event.preventDefault();
    contacts.classList.remove("window-show");
});
maplink.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.add("window-map-show");
});
closemap.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.remove("window-map-show");
});


if (linkcontacts && contacts && closecontacts) {
    var form = contacts.querySelector("form"),
        login = contacts.querySelector("[name=login]"),
        email = contacts.querySelector("[name=email]"),
        textletter = contacts.querySelector("[name=textletter]");
    linkcontacts.addEventListener("click", function(a) {
        a.preventDefault(), contacts.classList.add("window-show"), login.focus(), storage ? (login.value = storage, email.focus()) : login.focus()
    });
    closecontacts.addEventListener("click", function(a) {
        a.preventDefault(), contacts.classList.remove("window-show"), contacts.classList.remove("modal-error");
    });
    form.addEventListener("submit", function(a) {
        login.value && email.value && textletter.value ? (localStorage.setItem("login", login.value), localStorage.setItem("email", email.value)) : (a.preventDefault(), contacts.classList.add("modal-error"));
    });
    window.addEventListener("keydown", function(a) {
        27 === a.keyCode && contacts.classList.contains("window-show") && (contacts.classList.remove("window-show"), contacts.classList.remove("modal-error"));
    })
}