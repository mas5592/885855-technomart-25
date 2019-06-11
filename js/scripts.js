var maplink = document.querySelector(".js-map"),
    buylink = document.querySelectorAll(".js-buy"),
    map = document.querySelector(".window-map"),
    buy = document.querySelector(".window-basket"),
    closemap = document.querySelector(".window-close-map"),
    closebuy = document.querySelector(".window-close-buy"),
    linkcontacts = document.querySelector(".js-contacts"),
    closecontacts = document.querySelector(".window-message-close"),
    storage = localStorage.getItem("login"),
    contacts = document.querySelector(".window-message");

if (linkcontacts && contacts && closecontacts) {
    var form = contacts.querySelector("form"),
        login = contacts.querySelector("[name=login]"),
        email = contacts.querySelector("[name=email]"),
        textletter = contacts.querySelector("[name=textletter]");
    linkcontacts.addEventListener("click", function(a) {
        a.preventDefault(), contacts.classList.add("window-show"), login.focus(), storage ? (login.value = storage, email.focus()) : login.focus()
    }), closecontacts.addEventListener("click", function(a) {
        a.preventDefault(), contacts.classList.remove("window-show"), contacts.classList.remove("modal-error")
    }), form.addEventListener("submit", function(a) {
        login.value && email.value && textletter.value ? (localStorage.setItem("login", login.value), localStorage.setItem("email", email.value)) : (a.preventDefault(), contacts.classList.add("modal-error"))
    }), window.addEventListener("keydown", function(a) {
        27 === a.keyCode && contacts.classList.contains("window-show") && (contacts.classList.remove("window-show"), contacts.classList.remove("modal-error"))
    })
}

for (var i = 0; i < buylink.length; i++) buylink[i].addEventListener("click", function(a) {
    a.preventDefault(), buy.classList.add("window-show")
});
closebuy.addEventListener("click", function(a) {
    a.preventDefault(), buy.classList.remove("window-show")
}), window.addEventListener("keydown", function(a) {
    27 === a.keyCode && buy.classList.contains("window-show") && buy.classList.remove("window-show")
}), maplink.addEventListener("click", function(a) {
    a.preventDefault(), map.classList.add("window-map-show")
}), closemap.addEventListener("click", function(a) {
    a.preventDefault(), map.classList.remove("window-map-show")
}), window.addEventListener("keydown", function(a) {
    27 === a.keyCode && map.classList.contains("window-map-show") && map.classList.remove("window-show-map")
});