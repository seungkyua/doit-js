const btnOpen = document.querySelector("#open");
const btnClose = document.querySelector("#close");
const modalBox = document.querySelector("#modal-box");

btnOpen.addEventListener("click", () => {
  modalBox.classList.toggle("active");
});

btnClose.addEventListener("click", () => {
  modalBox.classList.toggle("active");
});