var link = document.querySelector(".link-write");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".button-close");
var magic = document.querySelector(".wrapper-feedback");
var login = document.querySelector(".login");
var popuplogin = document.querySelector(".modal-login");
var nick = document.querySelector(".focus");
var form = popuplogin.querySelector("form");
var password = popuplogin.querySelector("[name=password]");
var closelogin = popuplogin.querySelector(".close-login");
var storage = localStorage.getItem("nick");
var forename = popup.querySelector("[name=login]");


link.addEventListener("click", function (evt) {
  evt.preventDefault ();
  console.log("клик");
  magic.classList.add("modal-show");
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault ();
  console.log("закрыть");
  popup.classList.remove("modal-show");
  magic.classList.remove("modal-show");
});

magic.addEventListener("click", function (evt) {
  evt.preventDefault ();
  magic.classList.remove("modal-show");
  popup.classList.remove("modal-show");
});

login.addEventListener("click", function (evt) {
 evt.preventDefault();
 popuplogin.classList.add("modal-show");
 if (storage) {
   nick.value = storage;
   password.focus();
 } else {
   nick.focus();
 }
});

form.addEventListener("submit", function (evt) {
 if (!nick.value || !password.value) {
 evt.preventDefault();
 popuplogin.classList.add("modal-error");
 } else {
  localStorage.setItem("nick", nick.value);
  console.log("Запоминаю логин");
 }
});

closelogin.addEventListener("click", function (evt) {
 evt.preventDefault();
 popuplogin.classList.remove("modal-show");
 popuplogin.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
 if (evt.keyCode === 27) {
   if (popuplogin.classList.contains("modal-show")) {
    evt.preventDefault();
    popuplogin.classList.remove("modal-show");
    popuplogin.classList.remove("modal-error");
   }
   if (magic.classList.contains("modal-show")) {
     evt.preventDefault();
     magic.classList.remove("modal-show");
   }
 }
});
